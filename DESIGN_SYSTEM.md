# DESIGN SYSTEM — Château Puygrenier

Reference guide for consistent visual design. Update as we evolve the design.

---

## COLOR PALETTE

### Primary Colors
```
Primary Dark:    #2C3E50    Used for: body text, headings, nav, backgrounds
Accent Warm:     #E8B4A1    Used for: buttons, highlights, CTAs, hover states
Background:      #F9F7F5    Used for: page bg, card backgrounds
White:           #FFFFFF    Used for: text on dark, card whites
```

### Secondary Colors
```
Gray (text):     #666666    Used for: secondary text, descriptions
Gray (borders):  #E0E0E0    Used for: dividers, subtle borders
Dark Gray:       #999999    Used for: disabled states, fine text
```

### Usage Rules
- ✅ Primary color for main text and headings
- ✅ Accent color for buttons and CTAs (not overused)
- ✅ White spacious backgrounds (premium feeling)
- ❌ No bright colors (not premium)
- ❌ No multiple accent colors (confusing)
- ❌ Avoid pure black (#000000) — use #2C3E50 instead

---

## TYPOGRAPHY

### Font Stack
```
Headings:  Georgia, serif
Body:      -apple-system, system-ui, -webkit-system-font, BlinkMacSystemFont, "Segoe UI", sans-serif
```

### Text Sizes (Mobile-first)
```
H1:  32px (mobile) → 48px (desktop)     Bold headings
H2:  24px (mobile) → 36px (desktop)     Section titles
H3:  18px (mobile) → 24px (desktop)     Subsections

Body:      16px (minimum, don't go smaller)
Small:     14px (only for captions, metadata)
Buttons:   16px (at least, easy to tap)
```

### Line Heights
```
Headings:  1.2 (tighter, looks elegant)
Body:      1.6 (generous, readable, premium)
Buttons:   1.4 (good tap target)
```

### Font Weights
```
Light:     300  (rarely used, fine print only)
Normal:    400  (body text, default)
Semibold:  600  (emphasis within text, button text)
Bold:      700  (headings, strong statements)
```

### Text Color Strategy
```
Headings:         #2C3E50 (dark, elegant)
Body text:        #2C3E50 or #333333 (readable, not pure black)
Secondary text:   #666666 (lighter gray for descriptions)
Disabled text:    #999999 (lighter, inactive feel)
CTA text:         #FFFFFF + #E8B4A1 background
```

---

## SPACING & LAYOUT

### Base Unit: 16px
All spacing uses multiples of 16px for consistency.

### Spacing Scale
```
4px    = 0.25 × base (micro-spacing)
8px    = 0.5 × base (small gaps)
16px   = 1 × base (standard)
24px   = 1.5 × base (comfortable)
32px   = 2 × base (generous)
48px   = 3 × base (large sections)
64px   = 4 × base (major sections)
```

### Component Spacing
```
Buttons:           12px vertical, 24px horizontal padding
Card padding:      24px (inside)
Section padding:   48px top/bottom (mobile), 64px (desktop)
Text blocks:       32px bottom margin between sections
Lists:             16px vertical gap between items
Form inputs:       24px bottom margin
```

### Width Constraints
```
Max content width:     1200px (desktop, prevents too-wide text)
Breakpoint mobile:     < 768px
Breakpoint tablet:     768px - 1024px
Breakpoint desktop:    > 1024px

Text readability:      max 600px width (long text blocks, easier to read)
```

---

## BUTTONS & INTERACTIONS

### Button Style
```css
Primary Button (CTA):
- Background: #E8B4A1 (accent)
- Color: #FFFFFF (white text)
- Padding: 12px 32px
- Font: 16px, semibold
- Border radius: 4px
- Hover: darken background slightly
- No shadow (minimal)

Secondary Button:
- Background: transparent
- Color: #2C3E50
- Border: 2px solid #2C3E50
- Padding: 12px 32px
- Hover: background #F9F7F5
```

### Hover States
```
Links:     Underline or change color (subtle)
Buttons:   Slight darkening or opacity change
Cards:     Very subtle shadow or scale (minimal animation)
```

### No Heavy Animations
- Keep animations subtle (<300ms)
- Smooth scrolling only
- Avoid bounce effects or spinning (not premium)

---

## COMPONENTS

### Navigation Bar
```
Height: 64px
Background: #FFFFFF
Text color: #2C3E50
Padding: 0 24px
Position: sticky (stays at top on scroll)
Logo: text-based, 18px bold
Links: 16px, normal weight
Gap between links: 32px
Mobile: hamburger icon at 768px breakpoint
```

### Hero Section
```
Height: 60vh (viewport-based, full on mobile)
Background: full-width image
Overlay: optional dark overlay for text readability
Content positioning: center or bottom-left (design choice)
Headline: H1, white or dark text (depends on image)
CTA button: prominent, centered
```

### Cards (Room Preview)
```
Width: 3 columns on desktop, 1 on mobile, 2 on tablet
Border radius: 4px
Padding: 24px
Background: #FFFFFF
Shadow: subtle (0 2px 8px rgba(0, 0, 0, 0.08))
Gap: 32px between cards
Image height: 240px (or maintain aspect ratio)
```

### Form Inputs
```
Width: 100% of container (max 600px)
Padding: 12px 16px
Border: 1px solid #E0E0E0
Border radius: 4px
Font size: 16px (prevents zoom on iOS)
Focus: border color changes to #E8B4A1
Placeholder: #999999 color
```

### Footer
```
Background: #2C3E50
Color: #FFFFFF or lighter gray
Padding: 48px 24px
Text: 14px, light
Links: underlined, hover to #E8B4A1
Copyright: small, centered
```

---

## IMAGES

### Image Optimization Rules
```
Format: JPEG for photos, WebP with JPEG fallback (if possible)
Quality: 85-90% (high quality, smaller file size)
Mobile: max 1000px width
Desktop: max 1400px width
Aspect ratios:
  - Hero: 16:9 (wide)
  - Room cards: 4:3 or 3:2 (landscape)
  - About: flexible (match layout)
  - All images must have alt text
```

### Performance Target
- Hero image: <300KB
- Room images: <150KB each
- Total above-the-fold: <400KB

---

## DARK MODE (Future)

Not implementing yet, but architecture should support:
- Use CSS variables for colors (already planned)
- Can swap variables in `prefers-color-scheme: dark` media query
- No hardcoded colors in class names

---

## ACCESSIBILITY

- All buttons: minimum 44px touch target (mobile)
- All text: WCAG AA contrast ratio (4.5:1 minimum)
- Images: always include alt text
- Form labels: always associated with inputs
- Keyboard navigation: all interactive elements must be keyboard-accessible
- No color-only information: icons or text too

---

## CONSISTENCY CHECKLIST

Before marking design complete, check:
- [ ] All headings use serif font
- [ ] All body text is 16px minimum
- [ ] All spacing uses 16px multiples
- [ ] No color outside palette
- [ ] All buttons have consistent padding
- [ ] All cards have consistent shadow
- [ ] Mobile breakpoint at 768px is consistent
- [ ] Images optimized (<150KB for photos)
- [ ] No hardcoded domain names
- [ ] Form inputs have 16px font size
