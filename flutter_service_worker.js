'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b6f5221bb0684f54ee9fc27c5b207e4a",
"/": "b6f5221bb0684f54ee9fc27c5b207e4a",
"main.dart.js": "a7ff148030396921873ace3f700acee9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6cddf0684b5308d17b2bef5a6fc1ad27",
"assets/LICENSE": "03fd737fea568bd702db332ff0f5ffc4",
"assets/AssetManifest.json": "7bc879e47995bab8d891f7ffd875574f",
"assets/FontManifest.json": "4985aa519cb378ea22c51fed6897b7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/strings/pl.json": "1629e98050a4d4373bede93e3fdcdc3a",
"assets/assets/strings/en.json": "ce79a5226a55348442ba63d07fbda59a",
"assets/assets/images/ad2.png": "709275f7be6a1c492f60b36b3bf06f0f",
"assets/assets/images/ad1.png": "561385f5cc33b01602c122f05a1a72bc",
"assets/assets/images/card_chip.svg": "d593778eb8384be2da3c3f19ad6b7b16",
"assets/assets/images/nfc.svg": "1043518048c727ad3b057cfcd13012f1",
"assets/assets/images/facebook.svg": "0612820ce654cc0942d97f86c4664895",
"assets/assets/images/google.svg": "a809712b6900985b4979d75f4e9a483d",
"assets/assets/images/nav_wallet.svg": "c4b3f8a606f69abc9bd69c23c637cac4",
"assets/assets/images/paymentWithNfc.svg": "00696b5a77a5bbfeb33e972694f8fd8e",
"assets/assets/images/linkedin.svg": "f6b15a592c6db4151031a5a04b53aed2",
"assets/assets/images/logo.svg": "29ef270623cf0114264a0525e6e2fe01",
"assets/assets/images/card_mastercard.svg": "ba1dbd37f7dd3026a6af1d5ab118ad98",
"assets/assets/fonts/P24.ttf": "0d91bd7d06ec89dde87c02cfd149252e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
