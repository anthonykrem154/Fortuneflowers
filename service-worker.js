const CACHE_NAME = "fortune-flowers-cache-v1";
const urlsToCache = [
  "index.html",
  "flower logo fgotune gflowers.png",
  "manifest.json"
];

// Install the service worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Serve cached files when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
