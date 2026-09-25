const CACHE = 'trafiktenta-2.5.2';
const ASSETS = ["./", "./index.html", "./style.css", "./app.js", "./support.js", "./images/trafikbilen.png", "./data.js", "./learning.js", "./icon.svg", "./icon-192.png", "./icon-512.png", "./manifest.webmanifest", "./LEGAL-REVIEW.md", "./images/dk1-10-2.png", "./images/dk1-10-3.png", "./images/dk1-10-4.png", "./images/dk1-10-5.png", "./images/dk1-12-2.png", "./images/dk1-13-2.png", "./images/dk1-13-3.png", "./images/dk1-15-2.png", "./images/dk1-16-2.png", "./images/dk1-16-3.png", "./images/dk1-16-4.png", "./images/dk1-9-2.png", "./images/dk1-9-3.png", "./images/dk1-9-4.png", "./images/vt22-1.png", "./images/vt22-2.png", "./images/vt22-3.png", "./images/vt22-4.png", "./images/vt22-5.png", "./images/vt22-6.png", "./images/quick3-41.png", "./images/quick3-42.png", "./images/quick3-43.png", "./images/quick3-44.png", "./images/quick3-45.png"];
const urls = new Set(ASSETS.map(path => new URL(path, self.registration.scope).href));
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('trafiktenta-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  url.hash = ''; url.search = '';
  const cacheKey = url.href;
  if (event.request.method !== 'GET' || !urls.has(cacheKey)) return;
  const response = fetch(event.request);
  event.waitUntil(response.then(async result => {
    if (result.ok) { const copy = result.clone(); const cache = await caches.open(CACHE); await cache.put(cacheKey, copy); }
  }).catch(() => {}));
  event.respondWith(response.catch(async () => (await caches.match(cacheKey)) || Response.error()));
});
