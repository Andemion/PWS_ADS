const APP_SHELL_CACHE = "app-shell";

const APP_SHELL_FILES = [
    "/",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    "/favicon.ico",
    "front-twit/build/static/css/main.e6c13ad2.css",
    "front-twit/build/static/css/main.e6c13ad2.css.map",
    "front-twit/build/static/js/main.353be60f.js",
    "front-twit/build/static/js/main.353be60f.js.map",
    "manifest.json",
];

self.addEventListener('install',function(event){
    console.log("Installation ...");
    event.waitUntil(
            caches.open(APP_SHELL_CACHE).then(function(cache){
                cache.addAll(APP_SHELL_FILES);
            })
        );
});

self.addEventListener('activate',function(event){
    console.log("Activation ...");
});