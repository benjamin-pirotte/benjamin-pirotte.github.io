---
title: "Building a Data Quality Culture: Lessons from Scaling Soda"
date: "2026-02-10"
excerpt: "Data quality isn't a technical problem — it's an organizational one. Here's what I learned helping teams go from reactive firefighting to proactive data ownership."
readTime: "6 min read"
---

## The real problem isn't the data

After four years at Soda, I've had hundreds of conversations about data quality. The most common pattern: a data team gets paged because a downstream dashboard shows nonsensical numbers, an ML model starts behaving oddly, or a business stakeholder loses trust in a report.

The instinct is always to reach for a tool. Set up some monitors, write some checks, call it done. But the data quality problem keeps coming back.

The reason is simple: **data quality is a people and process problem first, a technology problem second.**

## What actually works

### 1. Make ownership explicit

Data quality issues surface late because nobody owns the pipeline end-to-end. When something breaks, it's unclear who's responsible.

The fix is boring but effective: create a data contract for every critical dataset. Define who produces it, who consumes it, what schema changes require coordination, and who's on the hook when it breaks.

### 2. Shift quality left

Most data teams catch issues when something explodes in production. By then, the blast radius is large — reports are wrong, decisions have been made on bad data.

Moving checks closer to the source — in the ingestion layer, in the transformation job — means catching problems when they're cheap to fix. This is exactly what drove our product direction at Soda: giving data engineers the same "shift left" capabilities that software engineers take for granted in CI/CD.

### 3. Business context matters

A null in a column might be fine in one dataset and catastrophic in another. Automated checks without business context generate noise. The highest-leverage thing a data team can do is involve the business stakeholder in defining what "good" looks like.

This is harder than it sounds. It requires building a shared language between technical and non-technical people — which is ultimately a product problem, and one I found endlessly interesting to work on.

## The takeaway

Tools are enablers, not solutions. If your organization doesn't have clear data ownership, a culture of quality, and shared definitions of what "good" means — no tool will save you.

Start with the people and process. The technology will be much more effective once those are in place.
