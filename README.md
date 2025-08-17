# GitHub Pages Jekyll Starter (বাংলা)

এটা একটা মিনিমাল জেকিল ব্লগ স্টার্টার। GitHub Pages এ সরাসরি চালবে।

## কীভাবে পাবলিশ করবেন
1) এই ফোল্ডারের সব ফাইল আপনার নতুন GitHub রিপোতে আপলোড করুন (পাবলিক)।
2) Settings → Pages → Source: **Deploy from a branch**.
   - Branch: **main**, Folder: **/** (root)
3) কয়েক মিনিট পরে আপনার সাইট লাইভ হবে: `https://<username>.github.io/<repo>/`

## পোস্ট করার নিয়ম
- `_posts` ফোল্ডারে Markdown ফাইল যোগ করুন।
- ফাইলনেম ফরম্যাট: `YYYY-MM-DD-title.md`
- শুরুর দিকে **YAML front matter** দিন:
```
---
layout: post
title: "পোস্টের শিরোনাম"
date: 2025-08-17 10:00:00 +0600
categories: [cat1, cat2]
---
```
তারপর Markdown কন্টেন্ট লিখুন।
