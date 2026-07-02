/**
 * site-data.js
 * ------------------------------------------------------------------
 * এই মুহূর্তে পুরো সাইট (index.html + admin.html) এই ফাইল থেকেই
 * সব কনটেন্ট নেয় — রিপোর মূল ফোল্ডারের ডেটা হিসেবে কাজ করছে।
 *
 * পরে যখন Firebase যুক্ত হবে (দেখুন firebase-config.js), তখন
 * admin.html থেকে যা এডিট করবেন তা Firestore-এ সেভ হবে এবং সেই
 * ডেটা এই একই "shape" (গঠন) মেনে window.SITE_DATA কে override
 * করবে। অর্থাৎ এখন থেকেই এই ফাইলের কাঠামো অনুযায়ী কাজ করলে
 * ভবিষ্যতে Firebase যোগ করা সহজ হবে — কোনো রিরাইট লাগবে না।
 * ------------------------------------------------------------------
 */

window.SITE_DATA = {

  brand: {
    name: "Learning to Earning",
    nameBn: "লার্নিং টু আর্নিং",
    tagline: "শেখা থেকে আয়ের যাত্রা",
    shortDesc: "যেখানে শব্দ এবং ছবি শিল্প তৈরি করে।",
    supportWhatsApp: "8801715247588",   // TODO: আসল WhatsApp নাম্বার বসান
    email: "eco452@gmail.com"          // TODO: আসল ইমেইল বসান
  },

  hero: {
    eyebrow: "বাংলাদেশের প্রথম ফুল গাইডেড ইবুক স্টোর",
    title: "শেখা → তৈরি করা → আয় করা",
    subtitle:
      "শূন্য থেকে মিলিয়ন সাবস্ক্রাইবার পর্যন্ত — YouTube মোটিভেশন চ্যানেল তৈরির সম্পূর্ণ, ধাপে ধাপে গাইডবুক। AI টুলস, স্ক্রিপ্ট, ভয়েস, মিউজিক — সব একসাথে।",
    ctaPrimary: "সম্পূর্ণ গাইড দেখুন",
    ctaSecondary: "ডেমো দেখুন"
  },

  journey: [
    { step: 1, label: "শিখুন", desc: "নিশ, স্ট্র্যাটেজি ও টুলস বুঝুন", color: "violet" },
    { step: 2, label: "তৈরি করুন", desc: "AI দিয়ে ভিডিও, ছবি ও ভয়েস বানান", color: "teal" },
    { step: 3, label: "আয় করুন", desc: "সাবস্ক্রাইবার ও ইনকাম বাড়ান", color: "gold" }
  ],

  stats: [
    { value: "১২+", label: "বিস্তৃত গাইড অধ্যায়" },
    { value: "৪০+", label: "টুলস ও রিসোর্স তালিকা" },
    { value: "৩", label: "দেশের সফল উদাহরণ" },
    { value: "১০ লাখ+", label: "সম্ভাব্য ২-৩ বছরের গ্রোথ" }
  ],

  /* ১২টি গাইড অধ্যায় — repo-এর YouTube_Motivation_Empath_Guide.html থেকে সংকলিত */
  topics: [
    {
      id: "niche",
      order: 1,
      icon: "🎯",
      title: "নিশ বিশ্লেষণ",
      desc: "মোটিভেশন ও ইনটুইটিভ এমপ্যাথ নিশের গভীর বিশ্লেষণ, লক্ষ্য দর্শক ও সাফল্যের চাবিকাঠি।",
      tag: "শুরু করুন"
    },
    {
      id: "setup",
      order: 2,
      icon: "⚙️",
      title: "চ্যানেল সেটআপ",
      desc: "Google অ্যাকাউন্ট থেকে চ্যানেল আর্ট, প্লেলিস্ট ও সেটিংস — ধাপে ধাপে সম্পূর্ণ গাইড।",
      tag: "টেকনিক্যাল"
    },
    {
      id: "ai-video",
      order: 3,
      icon: "🤖",
      title: "AI ভিডিও তৈরি",
      desc: "AI দিয়ে পেশাদার ভিডিও তৈরির প্রক্রিয়া ও শক্তিশালী AI ভিডিও প্রম্পট।",
      tag: "AI"
    },
    {
      id: "video-tools",
      order: 4,
      icon: "🎬",
      title: "ভিডিও টুলস",
      desc: "২০টি বিনামূল্যে ও প্রিমিয়াম ভিডিও এডিটিং সফটওয়্যারের তুলনামূলক তালিকা।",
      tag: "রিসোর্স"
    },
    {
      id: "voiceover",
      order: 5,
      icon: "🎙️",
      title: "ভয়েস ওভার",
      desc: "২০টি ভয়েস ওভার টুলস ও সার্ভিস — ফ্রি থেকে প্রিমিয়াম AI ভয়েস পর্যন্ত।",
      tag: "রিসোর্স"
    },
    {
      id: "schedule",
      order: 6,
      icon: "📅",
      title: "আপলোড সময়সূচী",
      desc: "সর্বোত্তম সময়ে ভিডিও আপলোড ও সাপ্তাহিক প্রকাশনার কৌশল।",
      tag: "স্ট্র্যাটেজি"
    },
    {
      id: "examples",
      order: 7,
      icon: "🌍",
      title: "বিশ্ব নমুনা",
      desc: "বাংলাদেশ, ভারত ও আন্তর্জাতিক সফল চ্যানেলের বাস্তব উদাহরণ ও সংখ্যা।",
      tag: "কেস স্টাডি"
    },
    {
      id: "ai-image",
      order: 8,
      icon: "🖼️",
      title: "AI ছবি তৈরি",
      desc: "AI দিয়ে অসাধারণ ছবি তৈরির গাইড ও ভাইরাল ইমেজ প্রম্পট।",
      tag: "AI"
    },
    {
      id: "music",
      order: 9,
      icon: "🎵",
      title: "ফ্রি মিউজিক",
      desc: "৫টি জনপ্রিয় রয়্যালটি-ফ্রি মিউজিক জেনারেটর ও কীভাবে মিউজিক বাছাই করবেন।",
      tag: "রিসোর্স"
    },
    {
      id: "slide-video",
      order: 10,
      icon: "📹",
      title: "স্লাইড ভিডিও",
      desc: "মোটিভেশনাল স্লাইড ক্যারোজাল — সোশ্যাল মিডিয়ার জন্য রেডি টেমপ্লেট।",
      tag: "ডেমো আছে",
      demo: "demo-carousel.html"
    },
    {
      id: "monetize",
      order: 11,
      icon: "💰",
      title: "আয়ের কৌশল",
      desc: "কোর্স, বই, কোচিং ও পণ্য — একাধিক নগদীকরণের বাস্তব পথ।",
      tag: "আয়"
    },
    {
      id: "author",
      order: 12,
      icon: "👨‍💼",
      title: "আমার পরিচয়",
      desc: "Monjurul Haque — ডিজিটাল শিক্ষক ও কনটেন্ট ক্রিয়েটরের অভিজ্ঞতা থেকে শেখা।",
      tag: "লেখক"
    }
  ],

  /* Demo ড্রপডাউনের লিংক — নতুন পেজ বানালে এখানে যোগ করলেই মেনুতে দেখা যাবে */
  demos: [
    {
      id: "carousel",
      title: "মোটিভেশনাল স্লাইড ক্যারোজাল",
      desc: "৬টি স্লাইড, অটো-স্ক্রল, টাচ ও কীবোর্ড কন্ট্রোল",
      href: "demo-carousel.html",
      badge: "ভিডিও ডেমো"
    },
    {
      id: "guidebook",
      title: "সম্পূর্ণ গাইডবুক প্রিভিউ",
      desc: "১২ অধ্যায়ের পূর্ণাঙ্গ ইন্টারেক্টিভ প্রিভিউ",
      href: "demo-guide.html",
      badge: "গাইড ডেমো"
    },
    {
      id: "coming-soon",
      title: "নতুন ডেমো শীঘ্রই",
      desc: "আরও ডেমো পেজ যুক্ত হবে",
      href: "#",
      badge: "শীঘ্রই",
      comingSoon: true
    }
  ],

  /* রিপোর ভিডিও/অডিও/PDF ফাইল — মিডিয়া লাইব্রেরি সেকশনে দেখানো হয় */
  media: {
    videos: [
      {
        id: "intro",
        title: "চ্যানেল ইন্ট্রো",
        desc: "ভিডিওর শুরুতে ব্যবহারের জন্য ব্র্যান্ডেড ইন্ট্রো ক্লিপ।",
        category: "ইন্ট্রো/আউট্রো",
        src: "media/videos/intro.mp4",
        poster: "media/thumbs/2.jpg",
        duration: "0:10"
      },
      {
        id: "outro",
        title: "চ্যানেল আউট্রো",
        desc: "ভিডিওর শেষে সাবস্ক্রাইব কল-টু-অ্যাকশনসহ আউট্রো ক্লিপ।",
        category: "ইন্ট্রো/আউট্রো",
        src: "media/videos/outro.mp4",
        poster: "media/thumbs/1.jpg",
        duration: "0:10"
      },
      {
        id: "description",
        title: "প্রজেক্ট বিবরণ ভিডিও",
        desc: "সম্পূর্ণ গাইডবুক প্রজেক্টের একটি সংক্ষিপ্ত ভিজ্যুয়াল পরিচিতি।",
        category: "প্রিভিউ",
        src: "media/videos/description.mp4",
        poster: "media/thumbs/3.jpg",
        duration: "0:40"
      },
      {
        id: "podcast-1",
        title: "পডকাস্ট প্রিভিউ",
        desc: "পডকাস্ট ফরম্যাটে মোটিভেশনাল কথোপকথনের একটি ঝলক।",
        category: "পডকাস্ট",
        src: "media/videos/10.mp4",
        poster: "media/thumbs/4.jpg",
        duration: "0:10"
      },
      {
        id: "podcast-2",
        title: "পডকাস্ট এপিসোড",
        desc: "পূর্ণ দৈর্ঘ্যের পডকাস্ট এপিসোড রেকর্ডিং।",
        category: "পডকাস্ট",
        src: "media/videos/9.mp4",
        poster: "media/thumbs/5.jpg",
        duration: "0:44"
      },
      {
        id: "heygen-avatar",
        title: "HeyGen AI অ্যাভাটার ডেমো",
        desc: "HeyGen দিয়ে তৈরি AI অ্যাভাটার প্রেজেন্টেশনের নমুনা।",
        category: "AI অ্যাভাটার",
        src: "media/videos/8.webm",
        poster: "media/thumbs/6.jpg",
        duration: "0:12"
      },
      {
        id: "avatar-presenter",
        title: "AI অ্যাভাটার প্রেজেন্টার শট",
        desc: "প্রেজেন্টার স্টাইলে AI অ্যাভাটারের একটি শট।",
        category: "AI অ্যাভাটার",
        src: "media/videos/7.webm",
        poster: "media/thumbs/avatar-presenter.jpg",
        duration: "0:11"
      },
      {
        id: "avatar-home-demo",
        title: "AI অ্যাভাটার হোম ডেমো",
        desc: "হোম সেটআপে AI অ্যাভাটার ভিডিওর সম্পূর্ণ ডেমো।",
        category: "AI অ্যাভাটার",
        src: "media/videos/9.webm",
        poster: "media/thumbs/avatar-home-demo.jpg",
        duration: "0:24"
      },
      {
        id: "speech-cleanup",
        title: "স্পিচ ক্লিনআপ ডেমো",
        desc: "AI দিয়ে ভয়েস/স্পিচ পরিষ্কার করার আগে-পরের নমুনা।",
        category: "AI টুলস",
        src: "media/videos/speech-cleanup.webm",
        poster: "media/thumbs/speech-cleanup.jpg",
        duration: "0:10"
      },
      {
        id: "rendered-demo",
        title: "রেন্ডার করা ফাইনাল ভিডিও",
        desc: "সম্পূর্ণ এডিট শেষে রেন্ডার করা একটি ফাইনাল আউটপুট নমুনা।",
        category: "প্রিভিউ",
        src: "media/videos/7.webm",
        poster: "media/thumbs/rendered-demo.jpg",
        duration: "0:09"
      }
    ],
    audio: [
      {
        id: "audio-1",
        title: "মোটিভেশনাল ভয়েসওভার",
        desc: "AI ভয়েসওভার টুল দিয়ে তৈরি একটি নমুনা ন্যারেশন — গাইডবুকের \"ভয়েস ওভার\" অধ্যায়ের সাথে সম্পর্কিত।",
        src: "media/audio/audio.mp3",
        duration: "0:44"
      }
    ],
    pdfs: [
      {
        id: "planning",
        title: "প্ল্যানিং গাইড",
        desc: "চ্যানেল ও কনটেন্ট পরিকল্পনার সম্পূর্ণ রোডম্যাপ (PDF)।",
        src: "media/pdfs/planning.pdf",
        thumb: "media/thumbs/planning.jpg",
        pages: 48,
        size: "2.7 MB"
      },
      {
        id: "preparetion",
        title: "প্রিপারেশন গাইড",
        desc: "চ্যানেল শুরুর আগে প্রস্তুতির ধাপে ধাপে চেকলিস্ট (PDF)।",
        src: "media/pdfs/preparetion.pdf",
        thumb: "media/thumbs/preparetion.jpg",
        pages: 38,
        size: "2.5 MB"
      }
    ]
  },

  author: {
    name: "Monjurul Haque",
    role: "ডিজিটাল শিক্ষক ও কনটেন্ট ক্রিয়েটর",
    bio: "বাংলাভাষী দর্শকদের জন্য সহজ বাংলায় YouTube, AI টুলস ও অনলাইন আয়ের বাস্তব রোডম্যাপ তৈরি করেন।"
  },

  pricing: {
    title: "সম্পূর্ণ গাইডবুক প্যাকেজ",
    price: 499,          // TODO: আসল মূল্য বসান (৳)
    oldPrice: 999,        // TODO: চাইলে বাদ দিন বা আপডেট করুন
    currency: "৳",
    features: [
      "১২টি বিস্তৃত অধ্যায় (PDF)",
      "৪০+ টুলসের যাচাই করা তালিকা",
      "স্লাইড ক্যারোজাল টেমপ্লেট",
      "AI প্রম্পট লাইব্রেরি",
      "লাইফটাইম আপডেট"
    ],
    ctaLabel: "এখনই অর্ডার করুন"
  },

  faq: [
    {
      q: "এই গাইডবুক কাদের জন্য?",
      a: "যারা মোটিভেশন বা ইনটুইটিভ এমপ্যাথ নিশে নতুন YouTube চ্যানেল শুরু করতে চান, বা AI টুলস দিয়ে কনটেন্ট তৈরি শিখতে চান তাদের জন্য।"
    },
    {
      q: "আমার কি আগের অভিজ্ঞতা লাগবে?",
      a: "না। শূন্য থেকে শুরু করার মতো করে প্রতিটি ধাপ সহজ বাংলায় ব্যাখ্যা করা হয়েছে।"
    },
    {
      q: "পেমেন্টের পর কীভাবে পাব?",
      a: "অর্ডার কনফার্ম হলে আপনার ইমেইল/WhatsApp-এ ডাউনলোড লিংক পাঠানো হবে।"
    }
  ]
};
