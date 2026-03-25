# PROJECT RULES — Château Puygrenier

Build constraints, principles, and workflow.

---

## 🎯 CORE PRINCIPLES

- **Simple first** — When unsure, choose the simplest working solution
- **No over-engineering** — Build what's needed, not hypothetical future needs
- **Iterate progressively** — Go phase by phase, improve as you learn
- **Focus on real usage** — Think about how guests actually use the site

---

## 🏗️ ARCHITECTURE

- **Website** = static marketing site (HTML/CSS/JS) — PHASE 1
- **App** = dynamic Next.js app (later) — PHASE 3+
- **Rule**: Do not mix business logic into static site
- **Rule**: Keep clear separation between them
- **Rule**: No hardcoded domains — always use relative URLs `/assets/...`, not `https://karokeys.fr/...`

---

## 💻 CODE QUALITY

- Clean and readable
- No unnecessary abstraction
- Simple structure
- Explicit naming
- Fast page load

---

## 📝 GIT & WORKFLOW

- `main` branch = production ready (deploy only from main)
- Simple, clear commit messages
- Commit after each feature is complete
- No major refactors without planning first

---

## 🚀 DEPLOYMENT

- Test locally first (Live Server)
- Push to git
- Deploy to karokeys.fr (dev domain) for testing
- Verify everything works
- Then update to main domain (chateaupuygrenier.fr)
- Use PM2 for process management
- Always check Nginx config before restart

---

## ✅ WHEN UNSURE

→ **Ask yourself**: "What's the simplest way to solve this?"
→ **Then do that.**
