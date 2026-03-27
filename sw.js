const CACHE_NAME = 'salary-tracker-v1';
const assets = [
  './index.html',
  './manifest.json',
  './profile.jpg',
  './logo-.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});