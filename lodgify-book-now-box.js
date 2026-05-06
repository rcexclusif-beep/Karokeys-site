// Script de génération des widgets Book Now Box Lodgify
// Usage: ajoute data-lodgify-rental-id="797562" sur un <div> et le widget se générera automatiquement
//
// PROBLÈME RÉSOLU : Le script renderBookNowBox.js de Lodgify cible un seul élément
// par id="lodgify-book-now-box". Pour avoir PLUSIEURS widgets sur la même page,
// on utilise des iframes isolés — chaque widget a son propre contexte DOM.

(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLodgifyWidgets);
  } else {
    initLodgifyWidgets();
  }

  function initLodgifyWidgets() {
    const containers = document.querySelectorAll('[data-lodgify-rental-id]');
    
    if (containers.length === 0) return;

    containers.forEach(container => {
      const rentalId = container.getAttribute('data-lodgify-rental-id');
      const rentalData = LODGIFY_RENTALS.find(r => r.id === rentalId);
      
      if (!rentalData) {
        console.warn(`Lodgify: propriété introuvable pour ID ${rentalId}`);
        return;
      }

      // Créer un iframe pour isoler chaque widget (Lodgify ne supporte qu'un seul
      // élément id="lodgify-book-now-box" par document)
      const iframe = document.createElement('iframe');
      iframe.className = 'lodgify-widget-frame';
      iframe.setAttribute('title', `Réservation ${rentalData.name}`);
      iframe.setAttribute('loading', 'lazy');
      iframe.style.cssText = 'width:60%;border:none;min-height:130px;overflow:hidden;border-radius:8px;max-width:420px;margin:0 auto;display:block;';
      iframe.setAttribute('scrolling', 'no');

      container.innerHTML = '';
      container.appendChild(iframe);

      // Écrire le contenu de l'iframe une fois qu'il est dans le DOM
      iframe.addEventListener('load', function onFirstLoad() {
        iframe.removeEventListener('load', onFirstLoad);
        writeWidgetContent(iframe, rentalId, rentalData);
      });

      // Déclencher le load pour les iframes srcdoc/about:blank
      // (certains navigateurs ne déclenchent pas load pour about:blank)
      writeWidgetContent(iframe, rentalId, rentalData);
    });
  }

  function writeWidgetContent(iframe, rentalId, rentalData) {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    
    const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font-family: "Segoe UI", "Trebuchet MS", system-ui, sans-serif; background: transparent; }
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
  #lodgify-book-now-box { width: 100%; }
</style>
</head>
<body>
<div
  id="lodgify-book-now-box"
  data-rental-id="${rentalId}"
  data-website-id="${LODGIFY_WEBSITE_ID}"
  data-slug="${rentalData.slug}"
  data-language-code="${LODGIFY_LANGUAGE_CODE}"
  data-new-tab="true"
  data-version="stable"
  data-has-guests-breakdown
  data-check-in-label="Arrivée"
  data-check-out-label="Départ"
  data-guests-label="Invités"
  data-guests-singular-label="{{NumberOfGuests}} invité"
  data-guests-plural-label="{{NumberOfGuests}} invités"
  data-location-input-label="Emplacement"
  data-total-price-label="Prix total :"
  data-select-dates-to-see-price-label="Sélectionnez les dates pour voir le prix total"
  data-minimum-price-per-night-first-label="À partir de"
  data-minimum-price-per-night-second-label="par nuit"
  data-book-button-label="Réservez maintenant"
  data-guests-breakdown-label="Invités"
  data-adults-label='{"one":"adulte","other":"adultes"}'
  data-adults-description="Âges {minAge} ou plus"
  data-children-label='{"one":"enfant","other":"enfants"}'
  data-children-description="Âges {minAge} - {maxAge}"
  data-children-not-allowed-label="Non adapté aux enfants"
  data-infants-label='{"one":"bébé","other":"bébés"}'
  data-infants-description="Moins de {maxAge}"
  data-infants-not-allowed-label="Non adapté aux bébés"
  data-pets-label='{"one":"animal de compagnie","other":"animaux de compagnie"}'
  data-pets-not-allowed-label="Non autorisé"
  data-done-label="Terminé"
></div>
<script src="https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js"></script>
<script>
  // Auto-resize iframe pour s'adapter au contenu
  function resizeFrame() {
    var h = document.body.scrollHeight;
    if (h > 0) {
      window.frameElement.style.height = h + 'px';
    }
  }
  // Observer les changements de taille du contenu
  var observer = new MutationObserver(resizeFrame);
  observer.observe(document.body, { childList: true, subtree: true, attributes: true });
  window.addEventListener('resize', resizeFrame);
  setTimeout(resizeFrame, 1000);
  setTimeout(resizeFrame, 3000);
  setTimeout(resizeFrame, 5000);
</script>
</body>
</html>`;

    doc.open();
    doc.write(html);
    doc.close();
  }
})();
