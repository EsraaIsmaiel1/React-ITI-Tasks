let cacheName = "Cache1";
let assets = [
  "/bootstrap/min/css",
  "/",
  "/products",
  "/static/js/bundle.js",
  "/static/media/bootstrap-icons.dea24bf5a7646d8b84e7.woff2",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/ws",
  "/static/media/1.f6d272ca2c9f7471dcd4.jpg",
  "/static/media/2.c88bd557a5762f80c78d.jpg",
  "/static/media/3.b6cbb2c960eb135dc41b.jpg",
  "/static/media/esraa-low-resolution-logo-color-on-transparent-background.82eed7e55226f36d60d0.png",
  "/products/:id",
  "/index.html",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  if (!navigator.onLine) {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then((res) => {
        if (res) {
          return res;
        }
        fetch(fetchEvent.request);
      })
    );
  }
});
