const APP_SHELL_CACHE = "app-shell";

const APP_SHELL_FILES = [
    "/",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    "/favicon.ico",
    "/static/css/main.e6c13ad2.css",
    "/static/css/main.e6c13ad2.css.map",
    "/static/js/main.c78e8564.js",
    "/static/js/main.c78e8564.js.map",
    "/manifest.json",
];

const ROOT_URL = "http://127.0.0.1:3000";
const TWEET_DATA_CACHE = "tweet-data";

self.addEventListener('install',function(event){
    event.waitUntil(
            caches.open(APP_SHELL_CACHE).then(function(cache){
                cache.addAll(APP_SHELL_FILES);
            })
        );
});

self.addEventListener('activate',function(event){
    console.log("Activation ...");
});

self.addEventListener('fetch',function(event){
    if(event.request.method !== 'GET'){
        return;
    }
    if(APP_SHELL_FILES.includes(event.request.url.replace(ROOT_URL,""))){
        event.respondWith(getFromCache(APP_SHELL_CACHE, event.request));
    }else if(event.request.url.startsWith('http://localhost:9000/api')){   
        event.respondWith(getFromCacheOrNetwork(TWEET_DATA_CACHE, event.request));
    }
});

function getFromCache(cacheName, request){
    console.log("get cache "+request.url)
    return caches.open(cacheName).then(function(cache){
        return cache.match(request).then(function(cachedResult){
            if(cachedResult){
                // recupère depuis le cache
                console.log("Fetch form cache " + request.url)
                return cachedResult;
            }else{
                console.error("Couldn't fetch" + request.url + "from network")
            }
        })

    });
}

function getFromCacheOrNetwork(cacheName, request){
    
    return caches.open(cacheName).then(function(cache){       
        return fetch(request).then(function(networkResult){
            // recupère depuis le network
            cache.put(request.url, networkResult.clone());
            return networkResult;
        }).catch(function(error){
            return cache.match(request).then(function(cachedResult){
                if(cachedResult){
                    // recupère depuis le cache
                    console.error("Fetch form cache " + request.url)
                    return cachedResult;
                }else{
                    console.log("Error fetching" + request.url, error);
                }
            });
        });
    });
}