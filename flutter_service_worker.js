'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e4fe66132aed0b3afbadcbe8831158b9",
"assets/AssetManifest.bin.json": "53797ff32b471b6ba007af2817fcb812",
"assets/AssetManifest.json": "3374afae55ba446f58676d5a7d887d58",
"assets/assets/images/avatars/avatar.jpg": "d04bf968124eb9b18c0435f9cb4e5ef1",
"assets/assets/images/avatars/female1.jpg": "df8f7efdd0eec38858aadba00ffd188d",
"assets/assets/images/avatars/female2.jpg": "7b4b7b2daf7120bbc344e3105c24ac2e",
"assets/assets/images/avatars/female3.jpg": "b2af8ae2a45fa4a0a0438cfe6d527e80",
"assets/assets/images/avatars/female4.jpg": "040592fb9f736ece4eeb545f48a2d859",
"assets/assets/images/avatars/female5.jpg": "850ec2bc8806432d1ab198935b8d89d6",
"assets/assets/images/avatars/female6.jpg": "b542cdf5655ab6d8ed7459ffceee870e",
"assets/assets/images/avatars/female7.jpg": "bbe531b860fd8062e52854b8a3b57b1a",
"assets/assets/images/avatars/male1.jpg": "cc2b9ef52875bdd0bb3fcd9703d8588a",
"assets/assets/images/avatars/male10.jpg": "509a0093647a9cbfde356522edc62956",
"assets/assets/images/avatars/male11.jpg": "8f1cb8168743a87020aeeeb5e529358c",
"assets/assets/images/avatars/male12.jpg": "8a869781da49dcbe9426ebe2bc690777",
"assets/assets/images/avatars/male13.jpg": "ffca55805169a6f9462c6bae8e3758bc",
"assets/assets/images/avatars/male14.jpg": "297dd7668f1f093da2f3273ff6871118",
"assets/assets/images/avatars/male15.jpg": "4a9efbdbc608412eb8592c0618a8bcbc",
"assets/assets/images/avatars/male16.jpg": "5467304f7cfe7eaad7c49765e9657f55",
"assets/assets/images/avatars/male2.jpg": "e44dd620203d976171aa8cddbfcce7c6",
"assets/assets/images/avatars/male3.jpg": "a4817325de8a1769b684dc1444f2ec84",
"assets/assets/images/avatars/male4.jpg": "b3b907fb4704860f0511a646db9defbf",
"assets/assets/images/avatars/male5.jpg": "5d12cb2d60a48d349b249ee7b43822b7",
"assets/assets/images/avatars/male6.jpg": "bcbb6bab7c8cdf476195d7324013d38b",
"assets/assets/images/avatars/male7.jpg": "bbc198ae9b166ff6fff6a51751e88765",
"assets/assets/images/avatars/male8.jpg": "7952cbd7148d047f803b43906f3e560f",
"assets/assets/images/avatars/male9.jpg": "f15b247d6299a4a66d9db9fd2655923b",
"assets/assets/images/badges/badge_blockchain_expert.png": "e3b6da2dec274a3e3183a3acfccb9f22",
"assets/assets/images/badges/badge_smart_contract.png": "4d00a9909f6fdefa0714e7ee9880db07",
"assets/assets/images/badges/badge_solidity_basics.png": "7364b220c651a8532c81a28aeed77eac",
"assets/assets/images/badges/badge_web3_developer.png": "1ee18820ad74a4b409751e2b1948dab9",
"assets/assets/images/badges/community_contributor_gray.png": "1ee18820ad74a4b409751e2b1948dab9",
"assets/assets/images/badges/course_completer.png": "4d00a9909f6fdefa0714e7ee9880db07",
"assets/assets/images/badges/outstanding_student.png": "e3b6da2dec274a3e3183a3acfccb9f22",
"assets/assets/images/badges/tech_pioneer.png": "9ab2fbe154b00c95c6a5664a688a8d57",
"assets/assets/images/badges/web3_expert_gray.png": "7364b220c651a8532c81a28aeed77eac",
"assets/assets/images/courses/ai-course.jpg": "f343a4c4e19d049831409810d2fae297",
"assets/assets/images/courses/fitness-course.jpg": "6589cf67529c5a30e7800f33b4f36034",
"assets/assets/images/courses/marketing-course.jpg": "eb7c931d407f5d430e8d0b5dac298b5c",
"assets/assets/images/courses/metaverse-course.jpg": "c4ddc13638347307313e977b5061ed76",
"assets/assets/images/courses/nutrition-course.jpg": "0e996ec4734e0595da9023b11d339f49",
"assets/assets/images/courses/web3-course.jpg": "4972d8b6f98970b8088e890f60bdb0ee",
"assets/assets/images/logos/ai-research-institute.png": "df329df57e88b2b853de211c25147e75",
"assets/assets/images/logos/blockchain-academy.png": "18c0d6c714ce0012f237b464da8f74b6",
"assets/assets/images/logos/digital-business-school.png": "3e8b8533f5f856ad244f9bda09d81080",
"assets/assets/images/logos/fundora-logo-small.jpg": "7beca2005717140cc261744aa026ab1e",
"assets/assets/images/logos/fundora-logo-small.png": "78fae658446aca6c13aeeed8629a7014",
"assets/assets/images/logos/fundora_logo.png": "d6f1a9c5e4cf3f1a4514474a03c92f82",
"assets/assets/images/logos/fundora_logo.psd": "73e3038369e10151fc3539ad5b6b918a",
"assets/assets/images/logos/healthy-living-academy.png": "83d90d2fac1953cd30890bab3fb9c333",
"assets/assets/images/logos/physical-fitness-academy.png": "9c36129a5b5d1a301642894e7db384f3",
"assets/assets/mock/courses.json": "ccdfa8b5a119df4ebc305f129874c4de",
"assets/assets/mock/crowdfundings.json": "e92101be487664fc976bda8f96decfa7",
"assets/assets/mock/users.json": "0f4f000c8473b828600f68824bb157de",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f595173ba901331b4c06765368c2e6e4",
"assets/NOTICES": "cb9cf6702c40e614f92f00a208c2da65",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "23baad6da6086d4e1c46469ead69fc5d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "acb8327713842196ccb0af4aa1abb22f",
"/": "acb8327713842196ccb0af4aa1abb22f",
"main.dart.js": "aea71020e65015209f8f95810152b96e",
"manifest.json": "9ffd677020af96ee8e0de69b2d2c2b00",
"version.json": "942d4b8c5f1e0f35c7b14e41ab3b9383"};
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
