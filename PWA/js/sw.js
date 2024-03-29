let cahceName = "pwa_task";
let cachedFiles = [
    "index.html",
    "manifest.json",
    "page2.html",
    "sw.js",
    "css/style.css",
    "image/1.webp",
    "image/3.png",
];

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cahceName).then((res) => {
            return res.addAll(cachedFiles);
        })
    );
});

self.addEventListener("activate", (e) => {
    console.log(e);
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches
            .match(e.request)
            .then((res) => {
                return res || fetch(res.request);
            })
            .catch((err) => {
                return caches.match("image/3.png");
            })
    );
});
