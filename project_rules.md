# PROJECT RULES — Château Puygrenier

See `project_context.md` for infrastructure, domains, and setup details.

---

## 🎯 CORE PRINCIPLES

- **Simple first** — When unsure, choose the simplest working solution
- **No over-engineering** — Build what's needed, not hypothetical future needs
- **Iterate progressively** — Go phase by phase, improve as you learn
- **Focus on real usage** — Think about how guests actually use the site

---

## 🏗️ ARCHITECTURE

- **Website** = static marketing site (HTML/CSS/JS)
- **App** = dynamic next.js app (later, Phase 3)
- **Rule**: Do not mix business logic into static site
- **Rule**: Keep clear separation between them

---

## 💻 CODE QUALITY

- Clean and readable
- No unnecessary abstraction
- Simple structure
- Explicit naming
- No hardcoded domains — always use configurable URLs

---

## 🎨 DESIGN & UX

**Visual:**
- Minimalist design
- Premium feeling
- Generous whitespace
- No clutter
- Optimized images

**Interaction:**
- Clear actions (CTAs)
- Simple navigation
- No friction
- Mobile-first thinking

---

## ⚡ PERFORMANCE

- Lightweight pages
- Avoid heavy JS
- Fast load times

---

## 🔒 SECURITY

- Never expose credentials
- Use environment variables (Phase 2+)
- HTTPS ready

---

## 📝 GIT & WORKFLOW

- `main` branch = production ready
- Simple, clear commit messages
- No major refactors without planning first
- Deploy to karokeys.fr (dev) before main domain

---

## 🚀 DEPLOYMENT

- Test locally first
- Deploy to karokeys.fr (test domain)
- Verify everything works
- Then update main domain
- Use PM2 for process management
- Always check Nginx config before restart

---

## ✅ WHEN UNSURE

→ **Ask yourself**: "What's the simplest way to solve this?"
→ **Then do that.**