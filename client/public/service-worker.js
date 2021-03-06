/* eslint-disable no-restricted-globals */
const DATA_PORTFOLIO = "data-portfolio-v4";

const FILES_TO_CACHE = [
          '/manifest.json',
          '/docs/DanielSoledadResume.pdf',
          '/images/Untitled.png',
          '/images/logo-2.png',
          '/images/logo.png',
          '/images/small-logo.png',
          '/images/small-logo-2.png',
          '/images/small-logo-3.png',
          '/images/burger-example.png',
          '/images/me.png',
          '/images/seattle.jpg',
          '/images/example.png',
          '/images/movie.png',
          '/images/Weather-App.png',
          '/images/My-Team.png',

        ]
// install
self.addEventListener("install", function (evt) {

  evt.waitUntil(
    caches.open(DATA_PORTFOLIO).then((cache) => cache.addAll(FILES_TO_CACHE))
  );

  self.skipWaiting();
});

self.addEventListener("activate", function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== DATA_PORTFOLIO) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
  // code to handle requests goes her
      evt.respondWith(
          caches.match(evt.request).then(response => {
              return response || fetch(evt.request);
            })
      )
});
