// Catalogue serveur — source de verite pour les prix.
// Doit rester synchronise avec les data-cart-id / data-name / data-price de carte.html.
// Le client n'envoie que l'id + la quantite ; le prix vient toujours d'ici.
module.exports = {
  'spa-1h30': { name: 'Accès Spa 1h30', price: 35 },
  'planche-apero': { name: 'Planche apéro du jour', price: 15 },

  'abatilles-plate': { name: 'Abatilles Plate 75cl', price: 5.50 },
  'abatilles-gazeuse': { name: 'Abatilles Gazeuse 75cl', price: 5.50 },
  'coca-cola': { name: 'Coca-Cola 33cl', price: 3.50 },
  'coca-zero': { name: 'Coca-Cola Zéro 33cl', price: 3.50 },
  'orangina': { name: 'Orangina 33cl', price: 3.50 },
  'schweppes': { name: 'Schweppes Tonic 33cl', price: 3.50 },
  'perrier': { name: 'Perrier 33cl', price: 3.50 },
  'ice-tea': { name: 'Ice Tea Pêche 33cl', price: 3.50 },
  'limonade': { name: 'Limonade 33cl', price: 3.50 },

  'jus-pomme': { name: 'Jus Pomme Rauch 20cl', price: 4 },
  'jus-orange': { name: 'Jus Orange Rauch 20cl', price: 4 },
  'jus-fraise': { name: 'Jus Fraise Rauch 20cl', price: 4 },
  'jus-ananas': { name: 'Jus Ananas Rauch 20cl', price: 4 },
  'jus-ace': { name: 'Jus ACE Rauch 20cl', price: 4 },

  'brassee24-blonde': { name: 'Brassée 24 Blonde 33cl', price: 5 },
  'hoegaarden': { name: 'Hoegaarden Blanche 33cl', price: 5 },
  'brassee24-ipa': { name: 'Brassée 24 IPA 33cl', price: 5.50 },

  'rolly-blanc-verre': { name: 'Essentiel 2025 — Château le Rauly — verre 12cl', price: 6 },
  'raisin-colere-verre': { name: 'Les Raisins de la Colère 2022 — Château Aurore — verre 12cl', price: 7 },
  'rolly-blanc-50cl': { name: 'Essentiel 2025 — Château le Rauly 50cl', price: 14 },
  'rose-enfer-btl': { name: "Rosé d'Enfer 2025 — Producteurs Plaimont 75cl", price: 18 },
  'jolie-fille': { name: 'Jolies Filles 2025 — Château Yssole 75cl', price: 18 },
  'rolly-rouge': { name: 'Tradition 2018 — Château le Rauly 37,5cl', price: 12 },
  'raisin-colere': { name: 'Les Raisins de la Colère 2022 — Château Aurore 75cl', price: 22 },
  'pecharmant': { name: 'La Cuisse de Pécharmille 2023 75cl', price: 24 },
  'clos-apogee': { name: "Clos l'Apogée 2023 75cl", price: 35 },
  'pipeau-gc': { name: 'Château Pipeau 2020 75cl', price: 45 },
  'monbazillac': { name: 'Château La Rayre 75cl', price: 32 },

  'champagne-paul-romain': { name: 'Champagne Paul Romain Blanc de Blancs 75cl', price: 65 },

  'aperol-spritz': { name: 'Aperol Spritz', price: 9 },
  'gin-tonic': { name: 'Gin Tonic', price: 9 },
  'tequila-sunrise': { name: 'Tequila Sunrise', price: 9 },
  'moscow-mule': { name: 'Moscow Mule', price: 8 },
  'whisky-ginger': { name: 'Whisky Ginger', price: 8 },
  'ricard': { name: 'Ricard', price: 4 },
  'martini': { name: 'Martini 6cl', price: 5 },
  'kir': { name: 'Kir', price: 5 },

  'get27': { name: 'Get 27 4cl', price: 7 },
  'jack-daniels': { name: "Jack Daniel's 4cl", price: 8 },
  'chivas': { name: 'Chivas Regal 15 ans 4cl', price: 12 },
};
