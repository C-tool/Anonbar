---
layout: post
title: "হ্যালো, হ্যাকার ওয়ার্ল্ড"
date: 2025-08-17 10:00:00 +0600
categories: [ঘোষণা]
tags: [jekyll, github-pages, hacker-theme]
---

> ব্লগ সেটআপ হয়ে গেছে। এখন থেকে Markdown এ লিখুন, কমিট করুন, আর লাইভ দেখুন।

```bash
# নতুন পোস্ট ফাইল তৈরি (লোকাল মেশিনে)
echo "---
layout: post
title: 'নতুন পোস্ট'
date: $(date +%Y-%m-%d) 12:00:00 +0600
---
এখানে আপনার কনটেন্ট।" > _posts/$(date +%Y-%m-%d)-new-post.md
```
