const staticCacheName = 'static-app - v1'
const dynamicCacheName = 'dynamic - v2'
const staticUrl = [
    'index.html',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/vendors~main.chunk.js'
]

self.addEventListener('install', async event => {
    const cache = await caches.open(staticCacheName)
    await cache.addAll(staticUrl)

})

self.addEventListener('activate', async event => {
    const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames
            .filter(name => name !== staticCacheName)
            .filter(name => name !== dynamicCacheName)
            .map(name => caches.delete(name))
    )
})

self.addEventListener('fetch', event => {

    const {request} = event
    const url = new URL(request.url)
    if (url.origin === location.origin && url.pathname !== '/api/fetch') {
        event.respondWith(cacheFirst(request))
    } else {
        event.respondWith(networkFirst(request))
    }


})

async function cacheFirst(req) {
    const cached = await caches.match(req)
    return cached ?? await fetch(req)
}

async function networkFirst(req) {
    const cache = await caches.open(dynamicCacheName)
    try {
        const response = await fetch(req)
        console.log(response)
        await cache.put(req, response.clone())
        console.log(response)
        return response
    } catch (e) {
            // TODO прроверить этот блок
        const cachedRes = await cache.match(req)
        return cachedRes

    }
}