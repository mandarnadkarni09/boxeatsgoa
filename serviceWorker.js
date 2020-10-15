const theHubGoa = "the-hub-goa-v1"
const assets = [
  "/",
  "/index.html",
  "/assets/icons/*.*",
  "/app*.js",
  "/polyfills*.js",
  "/runtime*.js"
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
