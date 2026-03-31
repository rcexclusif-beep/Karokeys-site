# DESIGN SYSTEM — Château Puygrenier

Living design guide. Update as we make design decisions together.

---

## COLOR PALETTE

### Primary Colors
```
Primary Color:      #3A4A35 (Used for: headlines, text forts, navigation — vert sauge, plus doux)
Accent Color:       #B68A52 (Used for: buttons, highlights, CTAs — or chaud, noble)
Background:         #F7F4EE (Used for: page background — légèrement plus lumineux)
Text Color:         #2B2620 (Used for: body text)
```

### Secondary Colors
```
Secondary Text:     #6F665B (Used for: descriptions, meta text)
Borders:            #D9CFBE (Used for: dividers, subtle lines)
Terracotta:         #8B6F5E (Used for: section labels, accents de détail — pierre du Périgord)
Success/Error:      #2F6B4F / #A1462E (If needed for forms)
```

**Design Philosophy for Colors:**
- Nature + confort + authenticité — pas un hôtel générique
- Vert sauge (#3A4A35) : plus sage et sage que l'ancien vert forêt
- Terracotta (#8B6F5E) : ancre visuellement dans la pierre et la terre du Périgord
- Or chaud (#B68A52) : noblesse sans ostentation
- Contrast first: body text must stay highly readable on light backgrounds

---

## TYPOGRAPHY

### Font Stack
```
Headings:  "Palatino Linotype", "Book Antiqua", Palatino, "Times New Roman", serif
Body Text: "Segoe UI", "Trebuchet MS", system-ui, sans-serif
```

### Sizes (Mobile-first)
```
H1:   36px (mobile) → 64px (desktop)
H2:   28px (mobile) → 44px (desktop)
H3:   22px (mobile) → 30px (desktop)
Body: 16px (minimum)
```

### Line Heights
```
Headings: 1.2
Body:     1.65
```

### Font Weights
```
Normal:    400
Semibold:  600
Bold:      700
```

---

## SPACING & LAYOUT

### Base Unit
8px (all spacing uses multiples of this)

### Spacing Scale
```
Small:     8px
Standard:  16px
Medium:    24px
Large:     40px
XLarge:    64px
```

### Breakpoints
```
Mobile:    < 768px
Tablet:    768px - 1023px
Desktop:   > 1024px
```

### Component Spacing
```
Button padding:      12px vertical, 24px horizontal
Card padding:        24px
Section padding:     64px (mobile), 112px (desktop)
Form input margin:   16px bottom
```

---

## BUTTONS

### Primary Button (CTA)
```
Background: #B68A52
Color:      #1F1A14
Padding:    12px 24px
Border:     1px solid #B68A52
Hover:      Background #9F7542, slight lift (-1px), duration 180ms
```

### Secondary Button
```
Background: transparent
Color:      #2F3A2F
Border:     1px solid #2F3A2F
Hover:      Background #ECE5D8, no aggressive animation
```

---

## DESIGN TOKENS (CSS VARIABLES)

Use these tokens in `:root` to keep future updates fast and safe.

```css
:root {
	--color-primary: #3A4A35;
	--color-accent: #B68A52;
	--color-bg: #F7F4EE;
	--color-surface: #FBF8F2;
	--color-text: #2B2620;
	--color-text-muted: #6F665B;
	--color-terracotta: #8B6F5E;
	--color-border: #D9CFBE;
	--color-success: #2F6B4F;
	--color-error: #A1462E;

	--radius-sm: 8px;
	--radius-md: 12px;
	--radius-lg: 16px;

	--space-1: 8px;
	--space-2: 16px;
	--space-3: 24px;
	--space-4: 40px;
	--space-5: 64px;

	--shadow-soft: 0 8px 22px rgba(47, 58, 47, 0.08);
	--container-max: 1200px;
}
```

---

## PAGE SECTIONS

### Planned Sections
1. Navigation Bar
2. Hero Section
3. About Section
4. Rooms Preview (Gallery)
5. Amenities Section
6. Contact Form
7. Footer

### Navigation Behavior
- Sticky header after first scroll interaction
- Height: 72px desktop, 64px mobile
- Background: light, slightly opaque (`rgba(245, 241, 232, 0.9)`) with subtle blur
- Mobile menu: slide-down panel, full-width, clear close button, no complex multi-level menu
- Maximum 5 main links + 1 CTA button

### Hero Section Details
- Height target: min 85vh mobile, 92vh desktop
- Background image: `cover`, focus center-right (around 55% horizontal)
- Overlay: warm gradient for text readability
- Content width: text block max 680px
- Include 1 primary CTA + 1 secondary CTA

### Card/Component Style
- Rounded corners: 16px
- Borders: 1px solid `#D9CFBE`
- Shadow: soft and subtle only (`var(--shadow-soft)`)
- No glassmorphism, no heavy blur, no flashy effects

---

## IMAGES & MEDIA

### Image Optimization
```
Format:         AVIF first, WebP fallback, JPEG fallback
Quality:        72-80%
Max width:      1920px
Aspect ratios:  16:9 (hero), 4:3 (rooms), 3:2 (gallery alternates)
```

### Performance Goals
```
Load time target:      <= 2.5 seconds on 4G mid-range mobile
Largest image size:    <= 350KB
Total page size:       <= 1700KB
```

---

## ACCESSIBILITY

### Contrast Ratios
- Text: WCAG AA minimum (4.5:1 contrast)
- Interactive: 44px minimum touch target
- Focus style: visible ring with strong contrast on all interactive items

### Keyboard Navigation
- All interactive elements must be keyboard-accessible
- Tab order logical
- Mobile menu trap focus until closed
- Skip link visible on focus (`Aller au contenu`)

---

## CONTENT GUIDELINES

1. Un message clair par section
2. Paragraphes courts (2–4 lignes max sur desktop)
3. Un seul CTA principal par zone écran
4. Pas de texte décoratif sans valeur réservation/contact
5. FR en priorité, EN plus tard si besoin

---

## DECISIONS TRACKER

- [x] Philosophie projet (minimaliste, premium, nature)
- [x] Palette de couleurs finalisée
- [x] Typographie choisie
- [x] Échelle d'espacement définie
- [x] Styles boutons finalisés
- [x] Breakpoints responsives confirmés
- [x] Objectifs optimisation images définis
- [x] Comportement navigation défini
- [x] Toutes les sections designées (V1 livrée)
