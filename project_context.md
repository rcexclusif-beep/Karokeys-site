# PROJECT CONTEXT — CHÂTEAU PUYGRENIER

Premium guesthouse in Dordogne/Gironde, France. Building a complete digital ecosystem in phases.

## TIMELINE
- **Launch**: May 2026 (2 months from now)
- **Current Phase**: 1 (Static website only)
- **Availability**: 10 hours/day, 7 days/week

## PHASES
1. **Phase 1 (NOW)** — Static marketing website (OTA handles bookings)
2. **Phase 2** — Add guest services app (after launch)
3. **Phase 3** — Full web app (Next.js, bookings, payments)
4. **Phase 4** — Automation & optimization

---

## CURRENT STATUS
- Location: `/var/www/puygrenier` on VPS
- Dev domain: karokeys.fr
- Main domain: chateaupuygrenier.fr (at launch)
- Next: Build & style homepage, then deploy

---

## INFRASTRUCTURE

### VPS (MAIN SERVER)
- Provider: Hostinger
- IP: 82.25.112.137
- OS: Ubuntu
- Stack:
  - Nginx
  - Node.js
  - PostgreSQL (installed)
  - PM2 (installed)

👉 This VPS is the CENTRAL SYSTEM and hosts everything.

---

## DOMAINS

### MAIN DOMAIN (FINAL)
- chateaupuygrenier.fr
- www.chateaupuygrenier.fr

👉 This is the PRIMARY BRAND DOMAIN

---

### TEMP DOMAIN (DEV / TRANSITION)
- karokeys.fr
- www.karokeys.fr

👉 Currently used for testing and development
👉 Will later redirect to main domain

---

## DNS CONFIGURATION

All domains point to:

82.25.112.137

Important:
- No AAAA (IPv6) must remain
- Only A records should be used for now

---

## SERVER ARCHITECTURE

### NGINX

Single server block currently handles:

- karokeys.fr
- chateaupuygrenier.fr

Serving:

/var/www/puygrenier

---

## PROJECT STRUCTURE (CURRENT)

/var/www/puygrenier
→ static website (HTML/CSS)

---

## STRATEGY

The project is built in phases:

### Phase 1 — NOW
- Build static website (vitrine)
- Clean design
- Clear messaging
- Simple deployment on VPS

### Phase 2
- Add booking logic (basic)
- Add forms / Stripe

### Phase 3
- Build Next.js app
- Add backend logic
- Connect PostgreSQL

### Phase 4
- Automation (n8n, AI agents, etc.)

---

## KEY PRINCIPLE

Website = marketing / inspiration
App = action / operations

---

## WHY THESE CHOICES

**Static website first:**
- Fast and SEO-friendly for marketing
- Simple deployment (no backend needed yet)
- Clear separation from future app
- Easy to iterate design without complexity

**Single VPS for everything:**
- Cost effective
- Full control over infrastructure
- Privacy for guest data (no third-party hosts)
- Simple to manage in early phases

**Next.js for the app (Phase 3):**
- Interactive features without static HTML complexity
- Keeps website and app cleanly separated
- Can handle bookings, payments, user accounts
- Room to grow into automation layers

**Postgres + Node.js + PM2:**
- Proven stack
- Mature ecosystem
- Easy scaling later
- Good learning investment

---

## FUTURE APP (NEXT.JS)

Will include:
- breakfast ordering
- dinner / services
- time slot booking
- payments (Stripe)
- guest interface
- admin dashboard

Hosted on same VPS: 82.25.112.137

---

## DESIGN DIRECTION

- premium
- minimalist
- nature-focused
- calm and elegant
- no clutter
- high-end but not flashy

---

## UX PRINCIPLES

- simple navigation
- clear call-to-action
- no friction
- immersive feeling
- mobile-first thinking

---

## DOMAIN STRATEGY

Current:
- karokeys.fr used for dev

Final:
- chateaupuygrenier.fr main domain

Later:
- karokeys.fr → redirect to main domain

---

## IMPORTANT CONSTRAINTS

- do NOT hardcode domain names
- keep architecture simple
- avoid over-engineering
- build progressively

---

## FINAL VISION

A complete digital ecosystem hosted on a single VPS:
- website
- app
- database
- automation

All centered on:
82.25.112.137