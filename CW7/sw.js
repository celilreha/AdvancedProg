const CACHE ='JS'
const FILES = ['/https://celilreha.github.io/AdvancedProg/', '/https://celilreha.github.io/AdvancedProg/CW7','https://celilreha.github.io/AdvancedProg/CW2/CW_Array.html','https://celilreha.github.io/AdvancedProg/CW3/inspector.html','https://celilreha.github.io/AdvancedProg/CW5','https://celilreha.github.io/AdvancedProg/CW6','https://celilreha.github.io/AdvancedProg/CW7','https://celilreha.github.io/AdvancedProg/HW1/HW_Array.html','https://celilreha.github.io/AdvancedProg/HW2/Database.html']
function installCB(e) {
  e.waitUntil(
    caches.open(CACHE)
    .then(cache => cache.addAll(FILES))
    .catch(console.log)
  )
}
self.addEventListener('install', installCB)
self.addEventListener('install', installCB)
function cacheCB(e) { //cache first
  let req = e.request
  e.respondWith(
    caches.match(req)
    .then(r1 => r1 || fetch(req))
    .catch(console.log)
  )
}
self.addEventListener('fetch', cacheCB)
function save(req, resp) {
  return caches.open(CACHE)
  .then(cache => {
    cache.put(req, resp.clone());
    return resp;
  }) 
  .catch(console.log)
}
function fetchCB(e) { //fetch first
  let req = e.request
  e.respondWith(
    fetch(req).then(r2 => save(req, r2))
    .catch(() => { return caches.match(req).then(r1 => r1) })
  )
}
self.addEventListener('fetch', fetchCB)
//navigator.serviceWorker.register('https://celilreha.github.io/AdvancedProg/CW7/sw.js')
