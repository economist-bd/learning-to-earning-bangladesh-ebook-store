/**
 * firebase-config.js
 * ------------------------------------------------------------------
 * এখন Firebase বন্ধ (FIREBASE_ENABLED = false) — সাইট এখন শুধু
 * site-data.js থেকে ডেটা পড়ছে (রিপোর মূল ফোল্ডার থেকে)।
 *
 * পরে Firebase যুক্ত করতে চাইলে:
 *   ১. নিচের firebaseConfig অবজেক্টে আপনার আসল কনফিগ বসান
 *   ২. FIREBASE_ENABLED = true করুন
 *   ৩. index.html ও admin.html-এ Firebase SDK script ট্যাগ
 *      আনকমেন্ট করুন (নিচে নির্দেশনা দেওয়া আছে)
 *
 * এই ফাইল window.SITE_DATA-কে ওভাররাইট করার জন্য ডিজাইন করা —
 * অর্থাৎ site-data.js এবং Firebase একসাথে কাজ করবে:
 * Firebase থেকে ডেটা এলে সেটা অগ্রাধিকার পাবে, না এলে
 * site-data.js এর স্ট্যাটিক ডেটা "ফলব্যাক" হিসেবে কাজ করবে।
 * ------------------------------------------------------------------
 */

const FIREBASE_ENABLED = false; // TODO: রেডি হলে true করুন

const firebaseConfig = {
  apiKey: "TODO",
  authDomain: "TODO.firebaseapp.com",
  projectId: "TODO",
  storageBucket: "TODO.appspot.com",
  messagingSenderId: "TODO",
  appId: "TODO"
};

/**
 * নিচের স্ক্রিপ্ট ট্যাগগুলো index.html / admin.html এর
 * </body>-এর ঠিক আগে যোগ করুন (এখন কমেন্ট করা আছে):
 *
 * <script type="module">
 *   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
 *   import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
 *   import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
 *
 *   const app = initializeApp(firebaseConfig);
 *   window.db = getFirestore(app);
 *   window.auth = getAuth(app);
 *
 *   // উদাহরণ: topics কালেকশন থেকে ডেটা টেনে SITE_DATA.topics ওভাররাইড করা
 *   const snap = await getDocs(collection(window.db, "topics"));
 *   if (!snap.empty) {
 *     window.SITE_DATA.topics = snap.docs.map(d => ({ id: d.id, ...d.data() }));
 *     document.dispatchEvent(new Event("site-data-updated"));
 *   }
 * </script>
 *
 * index.html / admin.html-এর রেন্ডার ফাংশনগুলো ইতিমধ্যে
 * "site-data-updated" ইভেন্ট শুনছে (দেখুন renderAll() কল),
 * তাই Firebase যোগ করার সময় বাড়তি কিছু রিরাইট করতে হবে না।
 */

window.FIREBASE_ENABLED = FIREBASE_ENABLED;
window.firebaseConfig = firebaseConfig;
