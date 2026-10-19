/*
 * Retire the service worker installed by the former Gatsby site.
 *
 * Keep this file at /sw.js so browsers with the old root-scoped worker can
 * download this replacement, remove Gatsby's caches, and unregister it.
 */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName))),
      )
      .then(() => self.registration.unregister()),
  );
});
