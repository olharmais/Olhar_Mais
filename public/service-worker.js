// Nome do cache
const CACHE_NAME = 'olharmais-v1';

// Arquivos para cache
const urlsToCache = [
  '/',
  '/index.html',
  '/auth.html',
  '/config/supabase.js',
  '/assets/images/icons/icon-144x144.png',
  // Adicione outros arquivos que precisam ser cacheados
];

// Instalação do service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Busca de recursos
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 