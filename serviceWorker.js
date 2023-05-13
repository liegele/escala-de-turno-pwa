const staticDevEscala = 'dev-escala-site-v5';
const assets = ['/', '/index.html', '/style.css', '/script.js'];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevEscala).then((cache) => {
      cache.addAll(assets);
    })
  );
  //Força a atualização do serviceWorker.js para a versão mais nova.
  self.skipWaiting();
});

self.addEventListener('fetch', (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});

/* self.addEventListener('activate', async () => {
  const tabs = await self.clients.matchAll({ type: 'window' });
  tabs.forEach((tab) => {
    tab.navigate(tab.url);
  });
}); */
