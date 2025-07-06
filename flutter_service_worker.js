'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9dac8c41e4b3148d6c98fc59ecdb928d",
"assets/AssetManifest.bin.json": "28e2ee80aaee492a2e6defe9f9645c33",
"assets/AssetManifest.json": "074c9735f51d04d39d0f191f33a9628d",
"assets/assets/alex_knowledge.json": "1842bf1b6e81786eab20a3d0ba37df04",
"assets/assets/avatars/asian_girl_back.png": "74fd316a04ea4561e1e3f660ea387e20",
"assets/assets/avatars/asian_girl_front.png": "282c0335c854f0d65c841bf0e9ccf889",
"assets/assets/avatars/asian_girl_left.png": "ccaac78c9a7f839329146cbf517e251f",
"assets/assets/avatars/asian_girl_right.png": "1d132d5bfc4068f5e9a1816417442587",
"assets/assets/avatars/asian_man_back.png": "4ff96e6a3fca04b877d51574b0825319",
"assets/assets/avatars/asian_man_front.png": "0801fb2cf52db3c2559f39e7d749cfd5",
"assets/assets/avatars/asian_man_left.png": "d34d7d0e700ffbf7eea6ecb40d52f3a3",
"assets/assets/avatars/asian_man_right.png": "b45324a5cc310d7528d16a28321f4624",
"assets/assets/avatars/black_girl_back.png": "b52fed3d77fa981fcbe6128abed87ee2",
"assets/assets/avatars/black_girl_front.png": "75077bee4dd029b19d18a9cb4be5d602",
"assets/assets/avatars/black_girl_left.png": "bd5e78a4f3909ef24c79fe33000f1476",
"assets/assets/avatars/black_girl_right.png": "dfcf41bad006efe66f7a2d38db87617d",
"assets/assets/avatars/black_man_back.png": "9b7681e9044219a64945dda94a17d2cc",
"assets/assets/avatars/black_man_front.png": "7d55112db42c1b47f56bb25569aaf462",
"assets/assets/avatars/black_man_left.png": "2982c4d1ba9744ecec9d1746d6404ac3",
"assets/assets/avatars/black_man_right.png": "a21b4b9b67d587251593d779f53cc8e6",
"assets/assets/avatars/indian_girl_back.png": "b4867d72197b98de6ab3e103437ff389",
"assets/assets/avatars/indian_girl_front.png": "caf445e182a3d7263875db213ccbb9ae",
"assets/assets/avatars/indian_girl_left.png": "144b3d28f10170edd5692c3ecf2e96fb",
"assets/assets/avatars/indian_girl_right.png": "53467d32c6efee2836f621f9f4242531",
"assets/assets/avatars/indian_man_back.png": "d2bb43e13aa64e9e95b5aa6f17f9676c",
"assets/assets/avatars/indian_man_front.png": "ac57deac074afdb5f62b953868224238",
"assets/assets/avatars/indian_man_left.png": "227a12ed52204d97ccbe707c82edbb2d",
"assets/assets/avatars/indian_man_right.png": "4b830f33b6005ed1794d8f20a7452494",
"assets/assets/avatars/mexican_girl_back.png": "90bd457dc1bb9423b60150b5353f65ed",
"assets/assets/avatars/mexican_girl_front.png": "09d116f3c2b93bd5b8f6783e4ebe716f",
"assets/assets/avatars/mexican_girl_left.png": "443090c972176a8b0d2258e21477087d",
"assets/assets/avatars/mexican_girl_right.png": "e9db6155333bf38ec0e1c8c8d14393db",
"assets/assets/avatars/mexican_man_back.png": "1fec5462f7805f243b19f92879e1815a",
"assets/assets/avatars/mexican_man_front.png": "cc3ff0425eda63dac1503a69f6ad9a05",
"assets/assets/avatars/mexican_man_left.png": "ddddc09ec794bac55af6b3dff89b47fa",
"assets/assets/avatars/mexican_man_right.png": "8ab64cba1581db3a8978e161de2cd3ff",
"assets/assets/avatars/white_girl_back.png": "aba98b2011b87ab4923c476b3cfd00b1",
"assets/assets/avatars/white_girl_front.png": "ea343fbdd5e5a3736752fe956c940bea",
"assets/assets/avatars/white_girl_left.png": "b897de9685ec7b568e02741b518c0dea",
"assets/assets/avatars/white_girl_right.png": "87d170d10610eba670b0575e057004bc",
"assets/assets/avatars/white_man_back.png": "0605fc7710d9ad7764790673b9cf4e04",
"assets/assets/avatars/white_man_front.png": "8f748a8153a380566a1e6e80a9b89525",
"assets/assets/avatars/white_man_left.png": "62f5fc7275c77958668e2834f781bf8e",
"assets/assets/avatars/white_man_right.png": "e09d179fa0ccf65a3f1e1d99d952a824",
"assets/assets/bella_knowledge.json": "dc22018b5a239b09d79d87f9d81f72c0",
"assets/assets/finn_knowledge.json": "9510967200d82652a0da2dff7c29beaa",
"assets/assets/finn_the_fact_guy_knowledge.json": "2fb08cbc4261ac69549d73695718a368",
"assets/assets/jake_knowledge.json": "7399a33c64525e250810e943e4c44b2a",
"assets/assets/maya_knowledge.json": "909b70e7f771fe2d0d274f09f614227e",
"assets/assets/milo_the_mystic_knowledge.json": "daca8bf81038df1109ccda3955945a4d",
"assets/assets/nova_knowledge.json": "9d6ddf1ec9e2d5eaf5a7e0212ca16a76",
"assets/assets/olivia_knowledge.json": "64bfc598008e8180d590f3b267edf950",
"assets/assets/pete_knowledge.json": "089dd3179e42fd01e51743d9ee3a564b",
"assets/assets/sarah_knowledge.json": "72c42a1a036ce4e235fb799369d4a659",
"assets/assets/zoe_knowledge.json": "041d6ee6124e6b9da1ef48511bf73c03",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9ace18a444427ec923b8039991c14df0",
"assets/NOTICES": "4e761962e3c8c78f9cd65f02ec777668",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a7f7538eb164e5fff3077b862bd55b00",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "008e0188a4fc4e4091b2a875cfd988db",
"/": "008e0188a4fc4e4091b2a875cfd988db",
"main.dart.js": "a8ae95a9cfd342a53fea7ce4b6a26810",
"manifest.json": "7f7735f3db92a3d3b60eb36cb817385c",
"version.json": "f36b735491a9b8d30338d81c33199e59"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
