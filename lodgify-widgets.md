# Lodgify Widgets — Château Puygrenier

Ce fichier contient les configurations de style et les blocs HTML pour les widgets Lodgify.
Il sert de référence pour intégrer le Book Now Box et le Search Bar sur le site.

---

## 1. Widget "Encadré de réservation" (Book Now Box)

### Code CSS / variables personnalisées
```css
:root {
  --ldg-bnb-background: #ffffff;
  --ldg-bnb-border-radius: 0.42em;
  --ldg-bnb-box-shadow: 0px 24px 54px 0px rgba(0, 0, 0, 0.1);
  --ldg-bnb-padding: 14px;
  --ldg-bnb-input-background: #ffffff;
  --ldg-bnb-button-border-radius: 3.58em;

  --ldg-bnb-color-primary: #b68a52;
  --ldg-bnb-color-primary-lighter: #dbc5a9;
  --ldg-bnb-color-primary-darker: #5b4529;
  --ldg-bnb-color-primary-contrast: #333333;
  --ldg-component-calendar-cell-selection-bg-color: #b68a52;
  --ldg-component-calendar-cell-selection-color: #333333;
  --ldg-component-calendar-cell-selected-bg-color: #dbc5a9;
  --ldg-component-calendar-cell-selected-color: #333333;
  --ldg-bnb-font-family: inherit;
}

#lodgify-book-now-box {
  width: 100%;
}
```

### Bloc HTML du widget
```html
<div
  id="lodgify-book-now-box"
  data-rental-id="797562"
  data-website-id="651415"
  data-slug="chateaupuygrenier"
  data-language-code="fr"
  data-new-tab="true"
  data-version="stable"
  data-has-guests-breakdown
  data-check-in-label='Arrivée'
  data-check-out-label='Départ'
  data-guests-label='Invités'
  data-guests-singular-label='{{NumberOfGuests}} invité'
  data-guests-plural-label='{{NumberOfGuests}} invités'
  data-location-input-label='Emplacement'
  data-total-price-label='Prix total :'
  data-select-dates-to-see-price-label='Sélectionnez les dates pour voir le prix total'
  data-minimum-price-per-night-first-label='À partir de'
  data-minimum-price-per-night-second-label='par nuit'
  data-book-button-label='Réservez maintenant'
  data-guests-breakdown-label='Invités'
  data-adults-label='{"one":"adulte","other":"adultes"}'
  data-adults-description='Âges {minAge} ou plus'
  data-children-label='{"one":"enfant","other":"enfants"}'
  data-children-description='Âges {minAge} - {maxAge}'
  data-children-not-allowed-label='Non adapté aux enfants'
  data-infants-label='{"one":"bébé","other":"bébés"}'
  data-infants-description='Moins de {maxAge}'
  data-infants-not-allowed-label='Non adapté aux bébés'
  data-pets-label='{"one":"animal de compagnie","other":"animaux de compagnie"}'
  data-pets-not-allowed-label='Non autorisé'
  data-done-label='Terminé'
></div>

<script src="https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js" defer></script>
```

---

## 2. Widget "Encadré de recherche" (Search Bar)

### Code CSS / variables personnalisées
```css
:root {
  --ldg-psb-background: #ffffff;
  --ldg-psb-border-radius: 0.42em;
  --ldg-psb-box-shadow: 0px 24px 54px 0px rgba(0, 0, 0, 0.1);
  --ldg-psb-padding: 14px;
  --ldg-psb-input-background: #ffffff;
  --ldg-psb-button-border-radius: 3.58em;
  --ldg-psb-color-primary: #b68a52;
  --ldg-psb-color-primary-lighter: #dbc5a9;
  --ldg-psb-color-primary-darker: #5b4529;
  --ldg-psb-color-primary-contrast: #333333;
  --ldg-semantic-color-primary: #b68a52;
  --ldg-semantic-color-primary-lighter: #dbc5a9;
  --ldg-semantic-color-primary-darker: #5b4529;
  --ldg-semantic-color-primary-contrast: #333333;
  --ldg-component-modal-z-index: 999;
}

#lodgify-search-bar {
  width: 100%;
}
```

### Bloc HTML du widget
```html
<div
  id="lodgify-search-bar"
  data-website-id="651415"
  data-language-code="fr"
  data-search-page-url='https://chateaupuygrenier.lodgify.com/fr/toutes-les-proprietes'
  data-dates-check-in-label='Arrivée'
  data-dates-check-out-label='Départ'
  data-guests-counter-label='Invités'
  data-guests-input-singular-label='{{NumberOfGuests}} invité'
  data-guests-input-plural-label='{{NumberOfGuests}} invités'
  data-location-input-label='Emplacement'
  data-search-button-label='Rechercher'
  data-dates-input-min-stay-tooltip-text='{"one":"Minimum {minStay} nuit","other":"Minimum de {minStay} nuits"}'
  data-guests-breakdown-label='Invités'
  data-adults-label='{"one":"adulte","other":"adultes"}'
  data-adults-description='Âges {minAge} ou plus'
  data-children-label='{"one":"enfant","other":"enfants"}'
  data-children-description='Âges {minAge} - {maxAge}'
  data-children-not-allowed-label='Non adapté aux enfants'
  data-infants-label='{"one":"bébé","other":"bébés"}'
  data-infants-description='Moins de {maxAge}'
  data-infants-not-allowed-label='Non adapté aux bébés'
  data-pets-label='{"one":"animal de compagnie","other":"animaux de compagnie"}'
  data-pets-not-allowed-label='Non autorisé'
  data-done-label='Terminé'
  data-new-tab="true"
  data-version="stable"
  data-has-guests-breakdown
></div>

<script src="https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js" defer></script>
```

---

## 3. Comment utiliser ce code sur le site

### Où placer le CSS
- Tu peux mettre les variables dans le `<head>` de la page HTML qui recevra le widget.
- Si tu veux que les deux widgets utilisent les mêmes couleurs, ajoute seulement les variables communes dans ton `style.css` ou dans un `<style>` global.
- Exemple :
  - `<!-- dans <head> -->`
  - `<style> :root { --ldg-bnb-color-primary: #b68a52; ... } </style>`

### Où placer le HTML du widget
- Place le `<div id="lodgify-book-now-box">...</div>` ou le `<div id="lodgify-search-bar">...</div>` dans le `<body>` à l’endroit où tu veux que le widget apparaisse.
- Pour un `Book Now Box`, un bon emplacement est :
  - page `destination.html` ou page d’accueil `index.html` dans une section de réservation
- Pour un `Search Bar`, un bon emplacement est :
  - page principale, juste après le hero, ou dans une section dédiée à la réservation

### Où placer le script Lodgify
- Le `<script src="https://app.lodgify.com/..." defer></script>` doit être placé juste après le bloc `div` du widget, ou dans le `<head>` si tu utilises `defer`.
- `defer` garantit que le script se charge après le HTML, donc le widget est initialisé proprement.

### Bon ordre recommandé dans une page
1. `<head>` : CSS global + variables Lodgify
2. `<body>` : section / container du widget
3. `div` du widget
4. `script src="...renderBookNowBox.js" defer></script>` ou `renderPortableSearchBar.js`

### Exemple d’intégration simple
```html
<head>
  <style>
    :root {
      --ldg-bnb-color-primary: #b68a52;
      --ldg-bnb-color-primary-lighter: #dbc5a9;
      --ldg-bnb-color-primary-darker: #5b4529;
      --ldg-psb-color-primary: #b68a52;
      --ldg-psb-color-primary-lighter: #dbc5a9;
      --ldg-psb-color-primary-darker: #5b4529;
    }
  </style>
</head>
<body>
  <section class="reservation-widget">
    <!-- Widget encadré de réservation -->
    <div id="lodgify-book-now-box" ...></div>
    <script src="https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js" defer></script>
  </section>

  <section class="search-widget">
    <!-- Widget encadré de recherche -->
    <div id="lodgify-search-bar" ...></div>
    <script src="https://app.lodgify.com/portable-search-bar/stable/renderPortableSearchBar.js" defer></script>
  </section>
</body>
```

---

## 4. Recommandations d’intégration

- Si ton site est principalement statique, conserve la configuration Lodgify séparée dans une section claire.
- Garde le style proche de ton design existant : `#b68a52` pour les boutons / accents, `#dbc5a9` pour les fonds clairs, `#5b4529` pour les états foncés.
- Ne laisse pas deux widgets se charger s’ils se superposent visuellement sur la même page.
- Si tu veux un rendu très naturel, place le widget dans une section avec un fond clair proche de `#f7f4ee` et des marges généreuses.

---

## 5. Notes utiles

- `data-new-tab="true"` ouvre la réservation dans un nouvel onglet.
- `data-language-code="fr"` force l’interface en français.
- `data-search-page-url` doit pointer vers la page Lodgify de recherche de ton site.
- Les labels `data-...-label` permettent de personnaliser les textes du widget en français.
