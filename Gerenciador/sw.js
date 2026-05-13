self.addEventListener('fetch', (event) => {
  // Isso aqui é o mínimo pro Chrome aceitar o PWA JURO
  event.respondWith(fetch(event.request));
});
