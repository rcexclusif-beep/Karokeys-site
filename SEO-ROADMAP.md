# SEO Roadmap — Château Puygrenier

Audit réalisé le 2026-05-14. Traiter dans l'ordre ci-dessous.
Fichiers concernés : tous les `.html` + à créer : `sitemap.xml`, `robots.txt`.

---

## 1. ✅ Schema.org JSON-LD — FAIT (2026-05-14)
**Impact : très fort — rich results Google, visibilité locale**

Bloc JSON-LD de type `BedAndBreakfast` injecté dans le `<head>` de `index.html`.
Contient : nom, adresse, coordonnées GPS, téléphone, email, équipements, check-in/out, rating TripAdvisor, priceRange.

**Schéma complet — tous les champs renseignés :**
- `url` → `https://chateaupuygrenier.fr`
- `streetAddress` → `2028 Avenue du Docteur Deseymeris, 24610 Villefranche-de-Lonchat`
- `image` → `https://chateaupuygrenier.fr/assets/images/Photo%20principale.jpg` ✅
- `ratingValue` → `4.8` / 48 avis
- `priceRange` → `"À partir de 80 € / nuit"`

---

## 2. Open Graph + Twitter Card
**Impact : fort — partages sociaux (Instagram, Facebook, WhatsApp, LinkedIn)**

Ajouter dans le `<head>` de **chaque page HTML** :

```html
<!-- Open Graph -->
<meta property="og:type"        content="website">
<meta property="og:site_name"   content="Château Puygrenier">
<meta property="og:title"       content="[titre de la page]">
<meta property="og:description" content="[meta description de la page]">
<meta property="og:image"       content="[URL absolue d'une photo du château]">
<meta property="og:url"         content="[URL absolue de la page]">
<meta property="og:locale"      content="fr_FR">

<!-- Twitter Card -->
<meta name="twitter:card"        content="summary_large_image">
<meta name="twitter:title"       content="[titre de la page]">
<meta name="twitter:description" content="[meta description]">
<meta name="twitter:image"       content="[URL absolue d'une photo]">
```

Chaque page a son propre og:title / og:url / og:description.
L'image og:image doit être en URL absolue (https://...), idéalement 1200×630 px.

**Fichiers à modifier :** index.html, hebergements.html, experiences.html, destination.html, contact.html

---

## 3. Sitemap.xml + Robots.txt
**Impact : fort — indexation et crawl Google**

### robots.txt (à créer à la racine)
```
User-agent: *
Allow: /
Sitemap: https://[DOMAINE]/sitemap.xml
```

### sitemap.xml (à créer à la racine)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://[DOMAINE]/</loc><priority>1.0</priority><changefreq>monthly</changefreq></url>
  <url><loc>https://[DOMAINE]/hebergements.html</loc><priority>0.9</priority></url>
  <url><loc>https://[DOMAINE]/experiences.html</loc><priority>0.8</priority></url>
  <url><loc>https://[DOMAINE]/destination.html</loc><priority>0.7</priority></url>
  <url><loc>https://[DOMAINE]/contact.html</loc><priority>0.7</priority></url>
  <url><loc>https://[DOMAINE]/mentions-legales.html</loc><priority>0.2</priority></url>
  <url><loc>https://[DOMAINE]/politique-confidentialite.html</loc><priority>0.2</priority></url>
</urlset>
```

---

## 4. Balises canonical
**Impact : modéré — évite la pénalité contenu dupliqué**

Ajouter dans le `<head>` de **chaque page** :
```html
<link rel="canonical" href="https://[DOMAINE]/[nom-de-la-page].html">
```

- index.html → `https://[DOMAINE]/`
- hebergements.html → `https://[DOMAINE]/hebergements.html`
- etc.

---

## 5. Formulaire index.html non fonctionnel
**Impact : modéré — conversion**

Le formulaire de contact sur `index.html` a `action="#"` — les messages ne partent nulle part.
**Option A :** Connecter à formsubmit.co comme `contact.html` (même configuration).
**Option B :** Supprimer la section formulaire de index.html et rediriger vers contact.html.

---

## 6. Adresse complète dans le footer et le contenu
**Impact : modéré — SEO local**

Actuellement "Dordogne / Gironde, France" — trop vague pour Google Maps et le référencement local.
Remplacer par l'adresse complète : `[Numéro] [Rue], 24610 Villefranche-de-Lonchat, Dordogne`.
À mettre dans : footer de toutes les pages, section contact de index.html, page contact.html.

---

## 7. Dimensions width/height sur les images
**Impact : modéré — Core Web Vitals (CLS)**

La majorité des `<img loading="lazy">` n'ont pas de `width` et `height` déclarés.
Google PageSpeed pénalise le Cumulative Layout Shift (la page "saute" quand les images chargent).
Ajouter les dimensions réelles à chaque balise image.

---

## 8. Noms de fichiers images à améliorer
**Impact : faible — Google Images**

À renommer lors de l'upload des nouvelles photos :
- `Photo principale.jpg` → `chateau-puygrenier-facade.jpg`
- `photo principale 2.jpg` → `chateau-puygrenier-parc.jpg`
- `piscine jolie.jpg` → `piscine-chateau-puygrenier.jpg`
- `nourriture.jpg` → `table-dhotes-chateau-puygrenier.jpg`
- `cheval.jpg` → `cheval-domaine-puygrenier.jpg`
- `terrasse tonneau.jpg` → `terrasse-chateau-puygrenier.jpg`

---

## 9. Avis avec nom et date
**Impact : faible — confiance + potentiel Schema Review**

Les 3 témoignages sur index.html sont anonymes.
Ajouter prénom + mois/année de séjour pour chaque avis. Permet d'y injecter un schema `Review` si souhaité.

---

## 10. Réduction des scripts TripAdvisor
**Impact : faible — performance**

index.html charge 3 widgets TripAdvisor distincts (rated674, selfserveprop53, cdsratingsonlynarrow251), chacun avec un script externe qui bloque légèrement le rendu.
Conserver le plus utile (selfserveprop53 qui affiche la note + avis), supprimer les deux autres.

---

## 11. Multilingue et hreflang (chantier long terme)
**Impact : fort si marché anglophone visé — complexité élevée**

Le système i18n actuel est 100% JavaScript côté client : Google n'indexe que le HTML FR brut.
Pour capter les anglophones via Google, il faudrait :
- Générer des pages HTML séparées `/en/index.html`, `/en/hebergements.html`, etc.
- Ajouter des balises `<link rel="alternate" hreflang="en" href="...">` et `hreflang="fr"`
- Ou passer à un générateur de site statique (Eleventy, Astro) qui gère le multilingue à la compilation

Ce chantier est à planifier séparément — ne pas aborder dans la même itération.
