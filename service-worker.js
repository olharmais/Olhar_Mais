const CACHE_NAME = 'olharmais-cache-v1';

// Lista de recursos para cache
const urlsToCache = [
  '/',
  '/index.html',
  '/dashboard.html',
  '/assets/css/style.css',
  '/assets/js/main.js',
  '/assets/img/logo.png',
  '/manifest.json'
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

// Instalação do Service Worker
self.addEventListener('install', event => {
  console.log('[Service Worker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('[Service Worker] Erro ao instalar:', err);
      })
  );
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', event => {
  console.log('[Service Worker] Ativando...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('[Service Worker] Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      console.log('[Service Worker] Ativado com sucesso');
      return self.clients.claim();
    })
    .catch(err => {
      console.error('[Service Worker] Erro ao ativar:', err);
    })
  );
});

// Interceptação de requisições para usar cache quando offline
self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetch:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - retorna a resposta do cache
        if (response) {
          console.log('[Service Worker] Servindo do cache:', event.request.url);
          return response;
        }
        
        // Faz a requisição normalmente
        return fetch(event.request)
          .then(response => {
            // Verifica se a resposta é válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              console.log('[Service Worker] Resposta não armazenável:', event.request.url);
              return response;
            }
            
            // Clona a resposta pois é um stream que só pode ser consumido uma vez
            const responseToCache = response.clone();
            
            // Adiciona a resposta ao cache para uso futuro
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
                console.log('[Service Worker] Novo recurso armazenado em cache:', event.request.url);
              });
            
            return response;
          })
          .catch((error) => {
            console.log('[Service Worker] Erro de fetch, servindo página offline', error);
            
            // Verifica se a solicitação é de uma página HTML
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
            
            // Para outros recursos, retorna erro
            return new Response('Recurso não disponível offline', {
              status: 503,
              statusText: 'Serviço Indisponível'
            });
          });
      })
      .catch(err => {
        console.error('[Service Worker] Erro ao verificar cache:', err);
        return fetch(event.request);
      })
  );
});

// Evento de sincronização em background
self.addEventListener('sync', event => {
  console.log('[Service Worker] Sincronização em background:', event.tag);
  if (event.tag === 'syncData') {
    event.waitUntil(syncData());
  }
});

// Função para sincronizar dados
function syncData() {
  console.log('[Service Worker] Tentando sincronizar dados...');
  // Implementar lógica de sincronização aqui
  return Promise.resolve();
}

// Evento para mostrar notificações push
self.addEventListener('push', event => {
  console.log('[Service Worker] Push recebido:', event);
  
  const title = 'OlharMais';
  const options = {
    body: event.data ? event.data.text() : 'Nova notificação do OlharMais',
    icon: '/assets/img/logo.png',
    badge: '/assets/img/badge.png'
  };
  
  event.waitUntil(self.registration.showNotification(title, options));
});

// Evento para lidar com cliques em notificações
self.addEventListener('notificationclick', event => {
  console.log('[Service Worker] Clique em notificação:', event);
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
}); 