/*
 * Retire the service worker installed by the former portfolio site.
 *
 * Keep this file at /sw.js so browsers with the old root-scoped worker can
 * download this replacement, remove legacy caches, and unregister it.
 *
 * TODO(2027-04-19): Remove this retirement worker after the six-month
 * migration window, provided returning visitors no longer report stale pages.
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
