const CACHE_NAME = 'clipnote-v2';  // تغییر نسخه
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js'  // اضافه شدن PeerJS
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
