const CACHE_NAME = 'olharmais-cache-v1';

// Lista de recursos para cache
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/img/logo.png',
  '/manifest.json',
  '/favicon/favicon.svg'
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
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(() => {/* Silenciar erros */})
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
            if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
      .then(() => self.clients.claim())
      .catch(() => {/* Silenciar erros */})
  );
});

// Interceptação de requisições para usar cache quando offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        
        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                if (shouldLogUrl(event.request.url)) {
                cache.put(event.request, responseToCache);
                }
              });
            
            return response;
          })
          .catch(() => {
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            return new Response('Recurso não disponível offline', {
              status: 503,
              statusText: 'Serviço Indisponível'
            });
          });
      })
      .catch(() => {/* Silenciar erros */})
  );
});

// Evento de sincronização em background
self.addEventListener('sync', event => {
  if (event.tag === 'syncData') {
    event.waitUntil(syncData());
  }
});

// Função para sincronizar dados
function syncData() {
  return Promise.resolve();
}

// Evento para mostrar notificações push
self.addEventListener('push', event => {
  const title = 'OlharMais';
  const options = {
    body: 'Nova notificação do OlharMais',
    icon: '/assets/img/logo.png',
    badge: '/assets/img/badge.png'
  };
  
  event.waitUntil(self.registration.showNotification(title, options));
});

// Evento para lidar com cliques em notificações
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
}); 