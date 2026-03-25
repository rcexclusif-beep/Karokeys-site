# ARCHITECTURE — Château Puygrenier Website

## PROJECT OVERVIEW
Premium marketing website for a guesthouse in Dordogne/Gironde, France.
- Current Phase: 1 (Static website)
- Timeline: 2 months until acquisition & launch
- Tech: HTML / CSS / JavaScript (minimal)

---

## PAGE STRUCTURE

### Home Page (`index.html`)
Only one page for MVP, sections include:

1. **Navigation Bar** (sticky)
   - Logo (text-based, minimal)
   - Links: Home, About, Rooms, Contact, Link to OTA booking
   - Mobile hamburger menu
   - No hardcoded domain names

2. **Hero Section**
   - Full-width background image (château exterior)
   - Headline + subtitle
   - CTA button (to OTA booking)
   - Premium, minimalist design

3. **About Section**
   - 2-column layout: Text + Image
   - Story about the château
   - What makes it special
   - Values & philosophy

4. **Rooms Preview**
   - 3-4 room cards in grid
   - Image, name, description
   - "View on booking" CTA
   - Mobile responsive

5. **Amenities Section**
   - Icon + text list
   - What guests get (WiFi, pool, kitchen, etc.)
   - Generous whitespace

6. **Contact Section**
   - Simple contact form (name, email, message)
   - Email validation
   - Submit button
   - Minimal, clean design

7. **Footer**
   - Legal links (privacy, terms)
   - Social links (if any)
   - Copyright

---

## FILE STRUCTURE
```
/index.html              → Main page (all sections)
/style.css              → All styles (CSS variables, grids, responsive)
/script.js              → Minimal JS (nav toggle, form validation)
/assets/                → Images and media
  /hero-bg.jpg          → Hero background image
  /room-1.jpg, 2.jpg, 3.jpg, 4.jpg  → Room photos
  /about-image.jpg      → About section image
  /logo.svg             → Logo (if any)
```

---

## CSS STRUCTURE

### Variables (Mobile-first)
```css
/* Colors */
--primary: #2C3E50;      /* Dark, elegant */
--accent: #E8B4A1;       /* Warm, premium */
--light: #F9F7F5;        /* Off-white, calm */
--text: #333;
--border: #E0E0E0;

/* Typography */
--font-serif: Georgia, serif;       /* Headlines */
--font-sans: -apple-system, system-ui, sans-serif;  /* Body */
--size-base: 16px;                  /* Body text min */
--size-h1: 48px;                    /* Mobile, scales up */
--line-height: 1.6;

/* Spacing */
--space-base: 16px;
--space-double: 32px;
--space-triple: 48px;

/* Layout */
--max-width: 1200px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 1024px;
```

### CSS Approach
- **Mobile-first**: Design for mobile, then add `@media` for larger screens
- **CSS Grid**: Main layout sections use grid
- **Flexbox**: Components use flex
- **No frameworks**: Pure CSS, no Bootstrap or Tailwind
- **Performance**: Minimal animations, no heavy effects

### Breakpoints
- Mobile: default (up to 767px)
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## JAVASCRIPT (Minimal)

### Must-Have
1. **Mobile Navigation Toggle**
   - Hamburger menu shows/hides on mobile
   - Auto-close on link click
   - 50 lines max

2. **Contact Form Validation**
   - Check email is valid
   - Check message isn't empty
   - Show error/success
   - 50 lines max

### Nice-to-Have (NOT priority)
- Smooth scroll links
- Image lazy loading
- Analytics (later)

**Total JS:** <200 lines (keep it light)

---

## DESIGN SYSTEM

### Color Palette
- **Primary:** #2C3E50 (dark, sophisticated, body text, nav)
- **Accent:** #E8B4A1 (warm, used for buttons, highlights)
- **Background:** #F9F7F5 (off-white, calm, premium feel)
- **White:** #FFFFFF (cards, sections)
- **Gray:** #999999 (secondary text, borders)

### Typography
- **Headlines (H1-H3):** Georgia, serif, bold, dark color
- **Body Text:** -apple-system, system-ui, sans-serif, 16px minimum
- **Line Height:** 1.6 (generous, readable, premium)
- **Font Weight:** 400 (normal), 600 (emphasis), 700 (headings)

### Spacing
- Use increments of 16px (8px, 16px, 24px, 32px, 48px)
- Sections: 48px top/bottom padding (mobile), 64px+ (desktop)
- Cards: 24px padding inside
- Text blocks: max 600px width (readability)

### Design Principles Embedded
- ✨ **Minimalist:** Remove everything unnecessary
- 💎 **Premium:** Generous whitespace, high-quality images, elegant typography
- 🌿 **Nature-focused:** Warm colors, natural photography, earthy tones
- 😌 **Calm & Elegant:** No bright colors, no clutter, subtle animations only
- 📱 **Mobile-first:** Everything works perfectly on phone first

---

## HOSTING & DEPLOYMENT

### Current
- Location: `/var/www/puygrenier` on VPS (82.25.112.137)
- Dev domain: karokeys.fr
- Main domain: chateaupuygrenier.fr (after acquisition)

### Process
1. Build locally (test with Live Server)
2. Commit to git
3. Push to VPS
4. Test on karokeys.fr
5. Once perfect, switch to main domain

### No Hardcoded Domains
- Use relative paths: `/assets/image.jpg` not `http://karokeys.fr/assets/...`
- Forms post to: `/contact` or similar (no domain)
- This way, same code works on all domains

---

## PERFORMANCE GOALS
- Page load: <2 seconds
- Mobile: <3 seconds
- Lighthouse score: 80+
- Image optimization: <500KB per image

---

## FUTURE CONSIDERATIONS (NOT NOW)
- Phase 2: Services app (separate Next.js project)
- Phase 3: Booking integration
- Phase 4: Automation

**Keep website and app separate.** Don't mix logic.
