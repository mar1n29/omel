// sw.js
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('age-prediction-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/stylesheet.css',
                '/manifest.json',
                '/pamboat.png',
                'https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
