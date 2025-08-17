# Hacker Dark Jekyll Theme (বাংলা)

GitHub Pages–compatible, সম্পূর্ণ রেসপন্সিভ, হেডার-ফুটারসহ।

## দ্রুত ডিপ্লয়
1) এই ফোল্ডারের সব ফাইল নতুন **Public** GitHub রিপোতে আপলোড করুন।
2) Settings → **Pages** → Source: **Deploy from a branch** → Branch: **main**, Folder: **/**.
3) সাইট লাইভ: `https://<username>.github.io/<repo>/`

## পোস্ট করা
- `_posts/YYYY-MM-DD-title.md` নামে Markdown ফাইল যোগ করুন।
- Front matter উদাহরণ:
```
---
layout: post
title: "পোস্টের শিরোনাম"
date: 2025-08-17 10:00:00 +0600
categories: [cat1, cat2]
tags: [tag1, tag2]
---
এখানে কন্টেন্ট।
```

## কাস্টমাইজ
- `_config.yml` এ `title`, `description`, `url`, `baseurl` বদলান।
- `_includes/header.html` এ মেনু/লিংক এডিট করুন।
- `assets/css/style.css` এ রঙ/টাইপোগ্রাফি টিউন করুন।
