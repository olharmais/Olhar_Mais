const CACHE_NAME = 'olharmais-v1';

// Lista de recursos para cache
const urlsToCache = [
  '/',
  '/index.html',
  '/auth.html',
  '/assets/images/icons/icon-144x144.png',
  '/assets/images/icons/icon-192x192.png',
  '/assets/images/icons/icon-512x512.png',
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
      .then(response => response || fetch(event.request))
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