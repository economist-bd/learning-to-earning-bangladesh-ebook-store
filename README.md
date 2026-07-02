# Learning to Earning Bangladesh — ইবুক স্টোর ল্যান্ডিং পেজ

## ফাইল গঠন

```
index.html            মূল ল্যান্ডিং পেজ (মোবাইল-ফার্স্ট, PWA)
admin.html             ফুল-পেজ অ্যাডমিন প্যানেল
site-data.js           সব কনটেন্ট এখান থেকে আসে (গাইড, ডেমো লিংক, মূল্য, ব্র্যান্ড)
firebase-config.js      Firebase বন্ধ আছে এখন — instructions সহ, পরে চালু করুন
manifest.json           PWA manifest
sw.js                    PWA service worker (অফলাইন ক্যাশ)
demo-carousel.html      আপনার আগের "Motivational Carousel" ডেমো
demo-guide.html          আপনার আগের "YouTube Guide" ডেমো
media/                    রিপোর ভিডিও, অডিও ও PDF ফাইল
  ├─ videos/               ১০টি ভিডিও (ইন্ট্রো, আউট্রো, AI অ্যাভাটার, পডকাস্ট ইত্যাদি)
  ├─ audio/                ভয়েসওভার নমুনা (audio.mp3)
  ├─ pdfs/                 planning.pdf ও preparetion.pdf
  └─ thumbs/                প্রতিটি ভিডিও/PDF-এর অটো-জেনারেটেড থাম্বনেইল
og-image.png             Facebook/WhatsApp/Twitter শেয়ার প্রিভিউ ছবি
icons/                   PWA আইকন (192, 512, apple-touch, favicon)
```

## এখন কীভাবে কাজ করছে

সাইট এখন **site-data.js** (রিপোর মূল ফোল্ডার) থেকে সব ডেটা পড়ছে — Firebase ছাড়াই সম্পূর্ণ কাজ করবে।
`admin.html`-এ যা কিছু এডিট করবেন তা ব্রাউজারে (`localStorage`) সেভ হয় এবং সাথে সাথে `index.html`-এ প্রতিফলিত হয়।

## Firebase পরে যেভাবে যুক্ত করবেন

1. `firebase-config.js` খুলুন — সেখানে বিস্তারিত ধাপ ও কোড কমেন্ট করা আছে।
2. আপনার Firebase প্রজেক্টের কনফিগ বসান, `FIREBASE_ENABLED = true` করুন।
3. Firebase SDK স্ক্রিপ্ট (উদাহরণ কোড কমেন্টে আছে) `index.html` ও `admin.html`-এ যোগ করুন।
4. `window.SITE_DATA` একই "shape" বজায় রেখে Firestore থেকে ওভাররাইড করুন — বাকি সব কোড এমনিতেই কাজ করবে, কারণ সব রেন্ডার ফাংশন `site-data-updated` ইভেন্ট শোনে।

এভাবে **repo ডেটা এবং Firebase একসাথে কাজ করবে**: Firebase ডেটা থাকলে সেটা প্রাধান্য পাবে, না থাকলে `site-data.js` ফলব্যাক হিসেবে কাজ করবে।

## নতুন ভিডিও/অডিও/PDF যোগ করা

`media/videos`, `media/audio`, বা `media/pdfs` ফোল্ডারে ফাইল রেখে `site-data.js`-এর `media` অবজেক্টে একটি নতুন এন্ট্রি যোগ করুন (ভিডিওর জন্য `poster` থাম্বনেইল, PDF-এর জন্য `thumb` কভার ছবি লাগবে)। ল্যান্ডিং পেজের "মিডিয়া লাইব্রেরি" সেকশনে সাথে সাথে দেখা যাবে।

## নতুন ডেমো পেজ যোগ করা

1. নতুন `.html` ফাইল বানিয়ে এই ফোল্ডারে রাখুন।
2. `admin.html` → "ডেমো লিংক" → "+ নতুন ডেমো" থেকে টাইটেল, বিবরণ ও লিংক (ফাইলের নাম) যোগ করুন।
3. সাথে সাথে `index.html`-এর টপ-নেভের ড্রপডাউন ও মোবাইল মেনুতে দেখা যাবে।

(`site-data.js`-এর `demos` অ্যারেতে সরাসরি এডিট করেও যোগ করা যায়।)

## Vercel-এ ডিপ্লয়

পুরো ফোল্ডারটি (icons সহ) আপনার Vercel প্রজেক্টে আপলোড/পুশ করলেই চলবে — কোনো বিল্ড স্টেপ লাগবে না, এটি static HTML/CSS/JS।

## মনে রাখুন — এডিট করতে হবে

- `site-data.js` → `brand.supportWhatsApp`, `brand.email`, `pricing.price` (আসল মূল্য)
- `index.html` → `og:url` মেটা ট্যাগে আপনার আসল ডোমেইন বসান
- `firebase-config.js` → Firebase চালু করার সময় আসল কনফিগ বসান
