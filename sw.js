const CACHE = 'trafiktenta-1.2.0';
const ASSETS = ['./','./index.html','./style.css','./app.js','./data.js','./learning.js','./icon.svg','./icon-192.png','./icon-512.png','./manifest.webmanifest','./LEGAL-REVIEW.md'];
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
