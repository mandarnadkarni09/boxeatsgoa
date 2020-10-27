const theHubGoa = "the-hub-goa-v4";


const assets = [
  "/",
  "/index.html",
  "/assets/icons/*.*",
  "/assets/images/*.*",
  "/assets/hub-data.json",
  "/main.*.js",
  "/polyfills.*.js",
  "/runtime*.js",
  "/styles.*.css"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(theHubGoa).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
