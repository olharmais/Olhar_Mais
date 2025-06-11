const CACHE_NAME = 'olharmais-cache-v1.2';
const OFFLINE_URL = '/offline.html';

// Lista de recursos para cache
const urlsToCache = [
  // Páginas principais
  '/',
  '/index.html',
  '/auth.html',
  '/aprovacao.html',
  '/offline.html',
  
  // Manifesto e configurações
  '/manifest.json',
  '/check-icons.js',
  
  // Favicons e ícones
  '/favicon/favicon.svg',
  '/favicon/favicon.ico',
  '/favicon/safari-pinned-tab.svg',
  '/favicon/browserconfig.xml',
  '/favicon/apple-touch-icon.png',
  '/favicon/favicon-16x16.png',
  '/favicon/favicon-32x32.png',
  '/assets/images/icons/icon-16x16.png',
  '/assets/images/icons/icon-32x32.png',
  '/assets/images/icons/icon-72x72.png',
  '/assets/images/icons/icon-96x96.png',
  '/assets/images/icons/icon-128x128.png',
  '/assets/images/icons/icon-144x144.png',
  '/assets/images/icons/icon-152x152.png',
  '/assets/images/icons/icon-192x192.png',
  '/assets/images/icons/icon-384x384.png',
  '/assets/images/icons/icon-512x512.png',
  
  // JavaScript e CSS
  '/assets/js/tailwind.min.js',
  
  // Recursos externos essenciais
  'https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600;700;800&display=swap',
  'https://unpkg.com/@phosphor-icons/web/styles.css',
  
  // Imagens e assets
  '/metatag.png'
];

// Função para verificar se a URL é válida para cache
function isValidUrl(url) {
  try {
    const urlObj = new URL(url);
    return ['http:', 'https:'].includes(urlObj.protocol);
  } catch (e) {
    return false;
  }
}

// Função para verificar se devemos logar a URL
function shouldLogUrl(url) {
  // Não logar URLs que contenham informações sensíveis
  return !url.includes('supabase') && 
         !url.includes('lambda') && 
         !url.includes('api') &&
         !url.includes('auth') &&
         !url.includes('whatsapp') &&
         !url.includes('check-icons') &&
         !url.includes('messageTimestamp');
}

// Função para sanitizar URLs antes de logar
function sanitizeUrl(url) {
  try {
    const urlObj = new URL(url);
    // Remover parâmetros sensíveis da query string
    urlObj.searchParams.delete('key');
    urlObj.searchParams.delete('token');
    urlObj.searchParams.delete('apiKey');
    return urlObj.pathname;
  } catch {
    return 'URL inválida';
  }
}

// Instalação do Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)),
      // Criar página offline se não existir
      fetch(OFFLINE_URL).catch(() => {
        return new Response(
          `<!DOCTYPE html>
          <html lang="pt-br">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>OlharMais - Offline</title>
              <style>
                  body { font-family: 'Inter', sans-serif; background: #E6F0FF; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
                  .container { text-align: center; padding: 20px; }
                  h1 { color: #005ae2; }
                  p { color: #666; }
                  .btn { background: #005ae2; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; display: inline-block; margin-top: 20px; }
              </style>
          </head>
          <body>
              <div class="container">
                  <h1>Você está offline</h1>
                  <p>Verifique sua conexão com a internet e tente novamente.</p>
                  <a href="/" class="btn">Tentar novamente</a>
              </div>
          </body>
          </html>`,
          { headers: { 'Content-Type': 'text/html' } }
        );
      })
    ])
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // Limpar caches antigos
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
      }),
      // Tomar controle imediatamente
      self.clients.claim()
    ])
  );
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  // Não interceptar requisições para APIs ou recursos sensíveis
  if (event.request.url.includes('supabase') || 
      event.request.url.includes('lambda') || 
      event.request.url.includes('whatsapp')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Cache hit
        }
        
        return fetch(event.request)
          .then(response => {
            // Verificar se a resposta é válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clonar a resposta para o cache
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Se falhar e for uma navegação, mostrar página offline
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            // Para outros recursos, retornar erro 503
            return new Response('Recurso indisponível offline', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// Sincronização em background
self.addEventListener('sync', event => {
  if (event.tag === 'syncData') {
    event.waitUntil(
  // Implementar lógica de sincronização aqui
      Promise.resolve()
    );
}
});

// Notificações push
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Nova notificação do OlharMais',
    icon: '/assets/images/icons/icon-192x192.png',
    badge: '/assets/images/icons/icon-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('OlharMais', options)
  );
});

// Clique em notificações
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
}); 