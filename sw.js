const CACHE_NAME = 'ludo-v1';
const ASSETS = [
  './',
  './index.html',
  './home.html',
  './ludo.html',
  './style.css',
  './ludo.css',
  './manifest.json'
];

// इन्स्टल हुँदा फाइलहरू क्यास गर्ने
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// अफलाइन वा अनलाइन सधैं फाइलहरू लोड गराउने
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
