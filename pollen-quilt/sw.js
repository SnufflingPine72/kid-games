// Offline support: keep every file of this game on the device.
const CACHE = "kidgames:pollen-quilt:16abfa9ecfa1";
const FILES = ["./", "apple-touch-icon.png", "bee.png", "fonts/fredoka.woff2", "fonts/nunito.woff2", "game.js", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "index.html", "manifest.webmanifest", "style.css", "sw-register.js"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith("kidgames:pollen-quilt:") && k !== CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(c =>
    c.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(res => {
      if (res.ok) c.put(req, res.clone());
      return res;
    }))
  ));
});
