---
title: How to Prototype a Feature in a Couple of Days Before Writing a Single Spec
date: 2026-03-16
excerpt: Before writing a single spec, I prototype. Here's how modern tools have made that accessible to PMs and why it changes the quality of everything that follows.
readTime: 7 min
---

There's a habit I picked up early as a PM that I haven't been able to shake: I prototype before I spec.

Not always a polished prototype; rough edges are fine, the point is having something real. And almost always code: I find it easier to spin up something working than to wrestle with design tools. Sometimes it's a clickable UI flow, sometimes it's a working CLI script, sometimes it's a rough integration built over a focused few hours. But the principle is the same: before I write a requirements doc, before I start having conversations with the team (designers, engineers), sometimes even before something makes it onto the roadmap at all, I try to build something I can put in front of a real user.

This wasn't always easy. A couple of years ago, it required a fairly rare combination of product instincts and engineering or design skills. And even for designers, building a prototype with tools like Figma that felt realistic and interactive enough to get genuine reactions from customers was time-consuming work. 

Today, the tooling has changed the game entirely. LLMs, AI coding tools, and platforms like Vercel and Supabase have collapsed the time and skill floor for prototyping to the point where "I built something working this weekend" is a realistic thing for even a not-so-technical PM to say. That said, it still requires certain foundational notions, which is a topic for another post. I'll be upfront: I consider myself fairly technical, having spent a few years as a software engineer before moving into product. But the gap between what was possible then and what's possible now is significant.

Here's how I've done it, and why I think prototype-first is one of the most important shifts a PM can make right now.

---

## Why Specs Lie (and Prototypes Don't)

Writing a spec feels productive. You're documenting the flow, listing the edge cases, drawing the happy path. But there's a category of problem that specs are terrible at surfacing: the things you only discover when you actually see it working.

The interaction that feels obvious in prose but is confusing in practice. The step that requires data you don't have yet. The user expectation that your mental model just didn't capture. You can't find these things in a document. You find them by watching someone use something real.

And it happens in two stages. The first is just you, using the thing yourself. That alone surfaces gaps you'd never catch in a spec review: missing states, awkward flows, assumptions that seemed reasonable until you hit them for real. Depending on the nature of what you're building, it might be the right moment to loop in a designer too, especially if the flow is complex or visual polish matters for the validation to land. You then arrive at your first customer conversation already having pressure-tested the obvious failure modes.

The second stage is putting it in front of customers, and this is where the real leverage kicks in. Just you, a couple of hours of work, and you're already validating the overall flow without having pulled a single engineer into it yet. And when you do eventually go to your team, you're not walking in with a hypothesis. You're walking in saying: here's how it should work, some customers have already tried it, and it holds up. Or if it didn't, you know exactly what broke and you can walk in with that too, which is just as valuable. Either way, you're bringing the designer something concrete to react to rather than an abstract brief. That's a completely different conversation. It compresses alignment, it raises the quality of feedback you get, and it means the team spends their time refining something validated rather than debating something theoretical.

That's the core value of prototyping first. Not the artifact. The learning, earned before the real work even starts.

---

## Starting With UI: v0 as a Design Collaborator

My first serious foray into AI-assisted prototyping wasn't about AI features at all. It was about a much more mundane problem: our UX designer was stretched thin across other priorities, and I needed to validate a few new flows with customers without pulling them off their current work.

I had a few options. I could mock things up in Figma, but I'm not particularly fluent there. I could try to work in our actual frontend stack, but it was too complex to ramp up on the structure quickly, and even if I did, publishing a standalone prototype in isolation wouldn't have been straightforward. Or I could find another way.

I started using v0 (Vercel's AI-powered UI generation tool), and it changed how I think about early-stage design work.

The pitch is simple: you describe what you want, and it generates working components and flows you can interact with in the browser. The reality matched the pitch pretty well. Within a few hours, I had full clickable flows that I could share with customers directly, with no setup on their end and no risk of exposing any real data.

The key benefits were immediate:

**Validation got faster.** Something demoable and clickable in minutes means you can get real feedback in days instead of weeks. Customers don't have to imagine the experience from a wireframe or a description. They can click through it and tell you where it breaks down.

**Handover got more complete.** This one surprised me. When you actually build something end-to-end, even in prototype form, you discover things you simply wouldn't if you just wrote about it. Missing states. Ambiguous interactions. Data you assumed would exist that doesn't. By the time I handed flows over to our engineers, they were substantially more complete than anything I would have produced from a purely document-based process.

**Working with designers got better too.** Even when I was collaborating with a designer, I started bringing a prototype to those conversations rather than a blank page. It gave us a concrete starting point to react to instead of building from nothing. You can critique something that exists; it's much harder to critique an abstract idea.

The one real downside: it doesn't know your design system. The prototypes look generic, not like your product. That's a real gap, and you have to be upfront about it with customers ("this is rough, ignore the visual style"). In my experience, most customers are fine with it once you set expectations. What they care about is whether the flow makes sense, not whether the button colors match.

---

## Bringing It to AI Features: A CLI Built in Two Evenings

Fast forward a few months or so. For context, I was working at Soda, a data quality platform that helps data teams define and enforce the quality of their data. Concretely, users define what "good data" looks like for their datasets by writing YAML configuration (as code or through a UI editor).

Two problems were converging at the same time. The first: LLMs were gaining serious traction internally at many of our customers, and that created top-down pressure to adopt them. A handful of our most critical accounts were asking pointed questions: what is Soda doing with AI? What does your roadmap look like here? 

The second was a problem we already knew about. Soda's configuration process had a real learning curve, and even after you'd climbed it, defining quality rules across many datasets and columns just took time. The more rules you needed, the more you felt it.

Two problems, one solution?

The issue is that we were in the middle of a major release. There was no world in which I could redirect engineering bandwidth to answer this question with a proper feature. But there was a second problem beyond the bandwidth: I genuinely didn't know what was possible. LLMs were moving fast, and I didn't have the engineering capacity to run a proper technical investigation either. So I decided to answer both questions at once, by building something myself.

I sat down and built a small CLI using Cursor. The goal was straightforward: let users define Soda data quality contracts by describing them in plain text instead of writing YAML or clicking through the UI.

The CLI I built sat on top of an LLM, took plain-text instructions ("flag any order where the shipping date is before the order date"), and generated the corresponding Soda check. The user could review it, tweak it in natural language, and accept it.

I could have built a full UI around it, but that felt like the wrong first step. The goal was to validate two things: whether the technology could actually do this reliably, and see how the users would respond to the idea. The interface itself was secondary. And a CLI kept the scope tight while leaving the door open, since the same logic could eventually be embedded in the existing UI or kept as a standalone tool for more technical users.

I sent it to a handful of customers. The response was immediate and concrete. They could see what we were thinking, they could try it themselves, and it sparked real interest and conversations about the direction.

From there, I handed the small project to our data science team so they could validate it further with proper experimentation. A couple of months later, it shipped as a real product feature, fully embedded in the UI.

The impact was visible quickly. For existing customers who were already writing checks, the pace of creating rules increased noticeably. For new prospects, the adoption barrier dropped in ways that showed up directly in demos and onboarding sessions. The thing that used to require learning a syntax or navigating a complex UI became: write your requirement, review what came back, accept or adjust.

---

## Going Further: MCP for Smoother Demos

As a PM, I was doing demos fairly often to customers and prospects. One of the underrated friction points in selling a technical product is the demo itself. You want to show something powerful and smooth, but you're working with a CLI, which means you have to remember the exact commands, spell things correctly under pressure, and context-switch between explaining and typing.

After shipping the CLI feature, I ran into this enough times that I decided to do something about it. I built a small local MCP (Model Context Protocol) server on top of the CLI. The idea was simple: instead of typing CLI commands during a customer demo, I could just tell Cursor what I wanted to do in plain language, and it would handle the command. The demo became more of a conversation and less of a typing exercise.

Later I extended it to connect to our public API as well, so it could perform analysis across data quality results at the organization level and handle configuration, not just local CLI operations. It made for a substantially more compelling live demonstration.

The tooling for this kind of thing has moved fast. What I built with Cursor and a local MCP setup is probably achievable today as a simple skill on top of Claude. The pattern is the same: take a tool your users already rely on, wrap a natural language interface around it, and see what opens up.

What started as a personal demo hack ended up on Soda's roadmap as a feature to productize for customers, driven by interest from the sales team, customer engineers, and customers themselves, all of whom were running into the same friction. Not a bad outcome for something that didn't exist in any spec.

---

## What's Actually Changed: The New Baseline for Prototyping

A few years ago, building a working prototype as a PM required either strong engineering skills or a willing engineer with spare time. Neither was reliably available.

What's changed is the floor. You no longer need to be fluent in a frontend framework to build something a customer can click through. You no longer need weeks of backend work to demonstrate an AI-powered feature. The combination of LLMs, AI coding tools like Cursor and v0, and backend platforms like Supabase means a PM with some technical curiosity and a free weekend can produce something that was genuinely out of reach before.

The tools aren't magic. You still need good taste, the ability to evaluate what comes out, and enough understanding to guide them in the right direction. And as soon as you go beyond a simple frontend prototype, say a UI that talks to an LLM, or anything that involves a backend, a database, or an API, you need enough technical literacy to reason about the system: what belongs where, how the pieces communicate, how to get it deployed. You don't need to implement it, but you need a mental model of it. Without that, you'll struggle to ask the right questions or know what's actually hard. The bottleneck has shifted though. The question is no longer "do I have the engineering skills to build this?" It's closer to "do I understand the system well enough to describe what I want?"

For PMs, that's a different kind of skill than writing a spec. It's closer to pair programming than documentation. And the output is something tangible, something testable, something that generates real feedback instead of theoretical approval.

---

## A Framework for Prototype-First Product Work

Based on the way I've come to work, here's the rough approach:

**Start with a question, not a feature.** The prototype should answer something specific. Is this interaction intuitive? Will customers use this? Does this technical approach actually work? If you don't know what question you're trying to answer, you'll build the wrong thing.

**Pick the right tool for the prototype.** UI validation work? v0 or Lovable or similar. Backend logic or AI feature exploration? Prefer Claude Code or Cursor. Data analysis or quick integrations? A Python script or a Supabase project. The goal is the fastest path to something real, not the most impressive stack.

**Share it before it's ready.** The prototype is a conversation starter, not a finished product. The earlier you share it, the more useful the feedback. Waiting until it's polished defeats the point.

**Build the full path, not just the happy path.** The value of building something real is that it forces you to think through what happens when things go wrong. Empty states, error conditions, missing data. These are the things that make a spec incomplete and a prototype genuinely useful.

**Hand it over as an artifact, not just a demo.** If you've built something working, give it to the engineers or the data science team to work from. A functioning prototype with rough edges is a better starting point than a comprehensive spec with no implementation reality behind it.

---

## What Comes Next

I've been moving more of this work onto Claude Code recently, and the workflow keeps evolving. In fact, this website was built with Claude Code. Which, if you think about it, is its own kind of proof of concept: a PM, no active frontend project on the side, shipping a working website by describing what he wants and iterating on what comes back.

The tools will keep changing. What won't change is the underlying principle: the fastest way to know if something is worth building is to build a version of it first.

Prototype before you spec. Ship the learning before you ship the feature.
