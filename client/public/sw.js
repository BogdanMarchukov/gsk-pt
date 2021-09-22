const staticCacheName = 'static-app - v8'
const dynamicCacheName = 'dynamic - v4'
const staticUrl = [
    'index.html',
    '/static/js/bundle.js',
    '/static/js/main.chunk.js',
    '/static/js/vendors~main.chunk.js',
    'manifest.json',
    '/icons/icon-48-48.png',
    '/icons/icon-72-72.png',
    '/icons/icon-96-96.png',
    '/icons/icon-144-144.png',
    '/icons/icon-192-192.png',
    '/icons/icon-512-512.png',
    'favicon.ico',
    'static/css/2.0f7ccd32.chunk.css',
    'static/css/main.07ad4a85.chunk.css',
    'static/js/main.c5782629.chunk.js',
    'static/js/2.5b71ad1d.chunk.js'

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

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request))
    } if (url.pathname ==='/api/fetch') {
        networkFirst(request)
    }


})

async function cacheFirst(req) {
    const url = new URL(req.url)
    if (url.pathname === '/') {
        const cached = await caches.match(`${url.origin}/index.html`)
        return cached ??  await fetch(req)
    }

    const cached = await caches.match(req.url)

    return cached ?? await fetch(req)



}

async function networkFirst(req) {
    const cache = await caches.open(dynamicCacheName)
    try {
        const response = await fetch(req)

        await cache.put(req, response.clone())

        return response
    } catch (e) {

        return await cache.match(req)

    }
}