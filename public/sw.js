const CACHE_NAME = 'portafolio-v1';
const STATIC_ASSETS = [
  '/',
  '/images/profile.jpg',
  '/images/hero-background.jpg',
  '/images/wave-top.svg',
  '/images/wave-bottom.svg',
  '/images/logo7.png',
  '/favicon.png'
];

// Install event - cachear recursos críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - limpiar cache antiguo
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - estrategia cache-first para recursos estáticos
self.addEventListener('fetch', (event) => {
  // Solo cachear requests GET
  if (event.request.method !== 'GET') return;
  
  // Ignorar requests de extensiones del navegador
  if (event.request.url.startsWith('chrome-extension')) return;
  
  // Estrategia para imágenes y recursos estáticos
  if (event.request.url.includes('/images/') || 
      event.request.url.includes('.png') || 
      event.request.url.includes('.jpg') || 
      event.request.url.includes('.svg') ||
      event.request.url.includes('.ico')) {
    
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Si está en cache, devolver de cache
        if (response) {
          return response;
        }
        
        // Si no está en cache, fetchear y cachear
        return fetch(event.request).then((response) => {
          // Solo cachear responses válidas
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
    );
  }
  
  // Para otros recursos, usar network-first
  else {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request);
      })
    );
  }
}); 