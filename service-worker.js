self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("app-cache").then((cache) => {
      return cache.addAll([
        "/writing-tools.html",  // Correction de la faute de frappe
        "/manifest.json",  // S'assurer que manifest est mis en cache
        "/service-worker.js",
        "/web-app-manifest-192x192.png",
        "/web-app-manifest-512x512.png",
        "/apple-touch-icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
