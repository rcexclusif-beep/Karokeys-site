// Script de génération des widgets Book Now Box Lodgify
// Usage: ajoute data-lodgify-rental-id="797562" sur un <div> et le widget se générera automatiquement
//
// Approche : chaque conteneur reçoit directement le div Lodgify avec un id unique,
// puis le script renderBookNowBox.js est chargé une seule fois et initialise tous les widgets.
// Lodgify supporte en réalité l'attribut data-rental-id pour différencier les propriétés.

(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLodgifyWidgets);
  } else {
    initLodgifyWidgets();
  }

  function initLodgifyWidgets() {
    const containers = document.querySelectorAll('[data-lodgify-rental-id]');
    
    if (containers.length === 0) return;

    containers.forEach((container, index) => {
      const rentalId = container.getAttribute('data-lodgify-rental-id');
      const rentalData = LODGIFY_RENTALS.find(r => r.id === rentalId);
      
      if (!rentalData) {
        console.warn(`Lodgify: propriété introuvable pour ID ${rentalId}`);
        return;
      }

      // Créer le div widget directement dans la page (pas d'iframe)
      const widgetDiv = document.createElement('div');
      widgetDiv.id = 'lodgify-book-now-box';
      widgetDiv.className = 'lodgify-bnb-widget';
      widgetDiv.setAttribute('data-rental-id', rentalId);
      widgetDiv.setAttribute('data-website-id', LODGIFY_WEBSITE_ID);
      widgetDiv.setAttribute('data-slug', 'chateaupuygrenier');
      widgetDiv.setAttribute('data-language-code', LODGIFY_LANGUAGE_CODE);
      widgetDiv.setAttribute('data-new-tab', 'true');
      widgetDiv.setAttribute('data-version', 'stable');
      widgetDiv.setAttribute('data-has-guests-breakdown', '');
      widgetDiv.setAttribute('data-check-in-label', 'Arrivée');
      widgetDiv.setAttribute('data-check-out-label', 'Départ');
      widgetDiv.setAttribute('data-guests-label', 'Invités');
      widgetDiv.setAttribute('data-guests-singular-label', '{{NumberOfGuests}} invité');
      widgetDiv.setAttribute('data-guests-plural-label', '{{NumberOfGuests}} invités');
      widgetDiv.setAttribute('data-location-input-label', 'Emplacement');
      widgetDiv.setAttribute('data-total-price-label', 'Prix total :');
      widgetDiv.setAttribute('data-select-dates-to-see-price-label', 'Sélectionnez les dates pour voir le prix total');
      widgetDiv.setAttribute('data-minimum-price-per-night-first-label', 'À partir de');
      widgetDiv.setAttribute('data-minimum-price-per-night-second-label', 'par nuit');
      widgetDiv.setAttribute('data-book-button-label', 'Réservez maintenant');
      widgetDiv.setAttribute('data-guests-breakdown-label', 'Invités');
      widgetDiv.setAttribute('data-adults-label', '{"one":"adulte","other":"adultes"}');
      widgetDiv.setAttribute('data-adults-description', 'Âges {minAge} ou plus');
      widgetDiv.setAttribute('data-children-label', '{"one":"enfant","other":"enfants"}');
      widgetDiv.setAttribute('data-children-description', 'Âges {minAge} - {maxAge}');
      widgetDiv.setAttribute('data-children-not-allowed-label', 'Non adapté aux enfants');
      widgetDiv.setAttribute('data-infants-label', '{"one":"bébé","other":"bébés"}');
      widgetDiv.setAttribute('data-infants-description', 'Moins de {maxAge}');
      widgetDiv.setAttribute('data-infants-not-allowed-label', 'Non adapté aux bébés');
      widgetDiv.setAttribute('data-pets-label', '{"one":"animal de compagnie","other":"animaux de compagnie"}');
      widgetDiv.setAttribute('data-pets-not-allowed-label', 'Non autorisé');
      widgetDiv.setAttribute('data-done-label', 'Terminé');

      container.innerHTML = '';
      container.appendChild(widgetDiv);
    });

    // Charger le script Lodgify une seule fois après avoir créé tous les divs
    const script = document.createElement('script');
    script.src = 'https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js';
    document.body.appendChild(script);
  }
})();
