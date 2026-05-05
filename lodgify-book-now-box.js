// Script de génération des widgets Book Now Box Lodgify
// Usage: ajoute data-lodgify-rental-id="797562" sur un <div> et le widget se générera automatiquement

(function() {
  // Attendre que le DOM soit chargé
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLodgifyWidgets);
  } else {
    initLodgifyWidgets();
  }

  function initLodgifyWidgets() {
    // Trouver tous les conteneurs de widgets potentiels
    const containers = document.querySelectorAll('[data-lodgify-rental-id]');
    
    containers.forEach(container => {
      const rentalId = container.getAttribute('data-lodgify-rental-id');
      const rentalData = LODGIFY_RENTALS.find(r => r.id === rentalId);
      
      if (!rentalData) {
        console.warn(`Propriété Lodgify introuvable : ID ${rentalId}`);
        return;
      }
      
      // Créer l'élément du widget Book Now Box
      const widget = document.createElement('div');
      widget.id = `lodgify-book-now-box-${rentalId}`;
      widget.setAttribute('data-rental-id', rentalId);
      widget.setAttribute('data-website-id', LODGIFY_WEBSITE_ID);
      widget.setAttribute('data-slug', rentalData.slug);
      widget.setAttribute('data-language-code', LODGIFY_LANGUAGE_CODE);
      widget.setAttribute('data-new-tab', 'true');
      widget.setAttribute('data-version', 'stable');
      widget.setAttribute('data-has-guests-breakdown', '');
      
      // Labels français
      widget.setAttribute('data-check-in-label', 'Arrivée');
      widget.setAttribute('data-check-out-label', 'Départ');
      widget.setAttribute('data-guests-label', 'Invités');
      widget.setAttribute('data-guests-singular-label', '{{NumberOfGuests}} invité');
      widget.setAttribute('data-guests-plural-label', '{{NumberOfGuests}} invités');
      widget.setAttribute('data-location-input-label', 'Emplacement');
      widget.setAttribute('data-total-price-label', 'Prix total :');
      widget.setAttribute('data-select-dates-to-see-price-label', 'Sélectionnez les dates pour voir le prix total');
      widget.setAttribute('data-minimum-price-per-night-first-label', 'À partir de');
      widget.setAttribute('data-minimum-price-per-night-second-label', 'par nuit');
      widget.setAttribute('data-book-button-label', 'Réservez maintenant');
      widget.setAttribute('data-guests-breakdown-label', 'Invités');
      widget.setAttribute('data-adults-label', '{"one":"adulte","other":"adultes"}');
      widget.setAttribute('data-adults-description', 'Âges {minAge} ou plus');
      widget.setAttribute('data-children-label', '{"one":"enfant","other":"enfants"}');
      widget.setAttribute('data-children-description', 'Âges {minAge} - {maxAge}');
      widget.setAttribute('data-children-not-allowed-label', 'Non adapté aux enfants');
      widget.setAttribute('data-infants-label', '{"one":"bébé","other":"bébés"}');
      widget.setAttribute('data-infants-description', 'Moins de {maxAge}');
      widget.setAttribute('data-infants-not-allowed-label', 'Non adapté aux bébés');
      widget.setAttribute('data-pets-label', '{"one":"animal de compagnie","other":"animaux de compagnie"}');
      widget.setAttribute('data-pets-not-allowed-label', 'Non autorisé');
      widget.setAttribute('data-done-label', 'Terminé');
      
      // Ajouter au conteneur
      container.innerHTML = '';
      container.appendChild(widget);
    });
    
    // Charger le script Lodgify une seule fois (s'il n'est pas déjà chargé)
    if (!window.LodgifyBookNowBoxLoaded) {
      const script = document.createElement('script');
      script.src = 'https://app.lodgify.com/book-now-box/stable/renderBookNowBox.js';
      script.defer = true;
      document.body.appendChild(script);
      window.LodgifyBookNowBoxLoaded = true;
    }
  }
})();
