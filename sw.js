/**
 * sw.js — সাধারণ cache-first সার্ভিস ওয়ার্কার।
 * নতুন পেজ/ফাইল যোগ করলে CACHE_NAME ভার্সন বাড়িয়ে দিন,
 * তাহলে পুরনো ক্যাশ অটো-মুছে গিয়ে নতুন ফাইল লোড হবে।
 */
const CACHE_NAME = "l2e-cache-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./admin.html",
  "./site-data.js",
  "./firebase-config.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  // ভিডিও/অডিও/PDF ফাইল ক্যাশে না রেখে সরাসরি নেটওয়ার্ক থেকে লোড করা হয় (স্টোরেজ বাঁচাতে)
  if (url.pathname.includes("/media/")) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
          return response;
        })
        .catch(() => cached);
    })
  );
});
