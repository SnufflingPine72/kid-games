// Offline support: keep every file of this game on the device.
const CACHE = "kidgames:hoppity-lanes:44b9cc32162e";
const FILES = ["./", "apple-touch-icon.png", "audio/music.wav", "chars/bamboo.png", "chars/biscuit.png", "chars/bolt.png", "chars/boo.png", "chars/bun.png", "chars/buzz.png", "chars/chomper.png", "chars/cosmo.png", "chars/ember.png", "chars/jack.png", "chars/merlin.png", "chars/midnight.png", "chars/peep.png", "chars/ribbit.png", "chars/rusty.png", "chars/sirhops.png", "chars/sparkle.png", "chars/spotty.png", "chars/waddles.png", "chars/zib.png", "fonts/fredoka.woff2", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "index.html", "manifest.webmanifest", "sw-register.js"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith("kidgames:hoppity-lanes:") && k !== CACHE).map(k => caches.delete(k))
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
