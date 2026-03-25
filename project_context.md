# PROJECT CONTEXT — CHÂTEAU PUYGRENIER

## OVERVIEW

Château Puygrenier is a premium guesthouse located in Dordogne / Gironde, France.

The goal is to build a complete digital ecosystem:
- marketing website (vitrine)
- booking system
- guest service app
- automation (later)

---

## CURRENT STATUS

- **Phase**: 1 (Static website)
- **Location**: `/var/www/puygrenier` on VPS
- **Currently serving**: karokeys.fr (dev domain)
- **Next step**: Complete design/content → deploy to main domain

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