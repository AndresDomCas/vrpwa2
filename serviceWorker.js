const staticDevCoffee = "dev-vr-v1"

const assets = [
    "/",
    "/index.html",
    "/assets/js/play-on-click.js",
    "/assets/js/hide-on-click.js",
    "/assets/js/app.js"
]


self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});


