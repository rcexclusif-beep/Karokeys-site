/**
 * translations.js — Château Puygrenier
 * ─────────────────────────────────────────────────────────────────────────────
 * COMMENT AJOUTER / MODIFIER UNE TRADUCTION ?
 *
 *  1. Repérez la clé dans l'objet `fr` (ex : 'nav.home', 'index.hero.title'…).
 *  2. La même clé existe dans l'objet `en` — modifiez la valeur anglaise.
 *  3. Le site applique automatiquement la bonne langue selon le choix de l'utilisateur.
 *
 * TYPES DE VALEURS :
 *  - string simple  → remplace le textContent  (data-i18n="clé")
 *  - string HTML    → remplace l'innerHTML     (data-i18n-html="clé")
 *  - utilisé aussi sur les attributs placeholder via data-i18n-placeholder="clé"
 *
 * ORGANISATION :
 *  ── Partagé (nav, footer)
 *  ── index.html
 *  ── hebergements.html
 *  ── experiences.html
 *  ── destination.html
 *  ── contact.html
 * ─────────────────────────────────────────────────────────────────────────────
 */
window.TRANSLATIONS = {

  /* ══════════════════════════════════════════════════════════════════════════
     FRANÇAIS — version de référence
  ══════════════════════════════════════════════════════════════════════════ */
  fr: {

    // ── Navigation (toutes les pages) ────────────────────────────────────────
    'nav.skip':           'Aller au contenu',
    'nav.home':           'Accueil',
    'nav.lodging':        'Hébergements',
    'nav.experiences':    'Expériences',
    'nav.destination':    'Destination',
    'nav.events':         'Événements',
    'nav.book':           'Réserver',
    'nav.toggle.open':    'Ouvrir le menu',
    'nav.toggle.close':   'Fermer le menu',

    // ── Footer (toutes les pages) ─────────────────────────────────────────────
    'footer.copyright':   '© 2026 Château Puygrenier. Tous droits réservés.',
    'footer.legal':       'Mentions légales',
    'footer.privacy':     'Politique de confidentialité',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : index.html
    // ══════════════════════════════════════════════════════════════════════════

    // Hero carousel
    'index.hero.eyebrow':     'MAISON D\'HÔTES & GÎTES PRÈS DE SAINT-ÉMILION',
    'index.hero.title':       'Séjours de charme, spa & nature entre Dordogne et vignobles.',
    'index.hero.subtitle':    'Suites et gîtes dans un domaine paisible avec piscine, spa privatisable et expériences autour du terroir.',
    'index.hero.cta1':        'Découvrir les hébergements',
    'index.hero.cta2':        'Vérifier mes dates',

    // Section Le domaine
    'index.domaine.label':    'Le domaine',
    'index.domaine.title':    'Un lieu pensé pour se retrouver.',
    'index.domaine.text':     'Ici, on vient pour se reposer, profiter du parc, partager un petit-déjeuner maison, se détendre au bord de la piscine ou prolonger la journée au spa. Une maison d\'hôtes de caractère, vivante et sincère.',
    'index.domaine.stat1':    'hébergements uniques',
    'index.domaine.stat2':    'personnes maximum',
    'index.domaine.stat3':    'régions, une adresse',

    // Section Hébergements
    'index.lodging.label':    'Hébergements',
    'index.lodging.title':    'Choisissez votre façon de séjourner.',
    'index.lodging.intro':    'Des suites de maison d\'hôtes aux gîtes indépendants, chaque hébergement a son caractère, son espace, sa lumière.',
    'index.lodging.cta':      'Voir tous les hébergements en détail',
    'index.lodge.discover':   'Découvrir →',
    'index.margaux.badge':    'Double Suite · RDC',
    'index.margaux.desc':     'Deux suites communicantes avec accès extérieur privatif, pensées pour les séjours en famille ou entre amis dans une atmosphère calme et indépendante.',
    'index.sauternes.badge':  'Suite · 2e étage',
    'index.sauternes.desc':   'Sous les poutres apparentes du deuxième étage, une suite lumineuse et généreuse idéale pour ralentir après une journée dans les vignobles.',
    'index.puisseguin.badge': 'Suite · 2e étage',
    'index.puisseguin.desc':  'Une suite cosy sous les toits, au charme intime et chaleureux, parfaite pour un séjour à deux.',

    // Section Sur place
    'index.exp.label':        'Sur place',
    'index.exp.title':        'Le domaine se vit aussi en dehors des chambres.',
    'index.exp.intro':        'Piscine, spa avec vue, table d\'hôtes, vie du domaine et expériences simples qui prolongent naturellement le séjour.',
    'index.piscine.h3':       'Piscine',
    'index.piscine.desc':     'Accès libre pour tous les résidents. Un espace pensé pour ralentir entre deux découvertes de la région.',
    'index.piscine.badge':    'Inclus',
    'index.spa.h3':           'Spa & Sauna',
    'index.spa.desc':         'Un espace bien-être indépendant avec vue sur le domaine, à privatiser pour un moment plus calme.',
    'index.spa.badge':        'Sur réservation',
    'index.resto.h3':         'Table d\'hôtes',
    'index.resto.desc':       'Cuisine maison, produits du terroir et longues soirées d\'été autour de la table.',
    'index.resto.badge':      'À la carte',
    'index.ferme.h3':         'Vie de la ferme',
    'index.ferme.desc':       'Poules, potager, chèvres naines et cheval participent naturellement à la vie du domaine.',
    'index.ferme.badge':      'Inclus',
    'index.exp.cta':          'Découvrir l\'expérience complète',

    // Section Destination
    'index.dest.label':       'Destination',
    'index.dest.title':       'Deux régions.<br>Un point de chute idéal.',
    'index.dest.text':        'À la frontière du Périgord et des vignobles bordelais, Le Château Puygrenier permet de rayonner facilement entre nature, villages, gastronomie et grands vins.',
    'index.dest.d1.title':    'Vignobles de Bordeaux',
    'index.dest.d1.desc':     'Saint-Émilion, Pomerol, Bergerac et routes des vins à proximité du domaine.',
    'index.dest.d2.title':    'Dordogne & patrimoine',
    'index.dest.d2.desc':     'Bastides, marchés, villages de pierre et paysages typiques du Sud-Ouest.',
    'index.dest.d3.title':    'Terroir',
    'index.dest.d3.desc':     'Foie gras, truffe, vins, tables locales et produits de saison rythment les journées.',
    'index.dest.cta':         'Explorer la région',

    // Section Avis TripAdvisor
    'index.testim.label':     'Avis voyageurs',
    'index.testim.title':     'Ce que nos hôtes en disent.',
    'index.testim.intro':     '48 avis vérifiés sur TripAdvisor. Des séjours en famille, en couple, entre amis. Une seule constante : l\'envie de revenir.',
    'index.testim.cta':       'Lire tous les avis →',
    'index.testim1.text':     '« Des tapas maison, fromages du terroir et desserts généreux accompagnés des vins locaux. Un accueil chaleureux et sincère, une adresse que l\'on recommande sans hésiter. »',
    'index.testim2.text':     '« Une semaine en famille à neuf : des chambres spacieuses et bien décorées, une literie excellente. Les propriétaires sont aux petits soins. On s\'y sent vraiment chez soi. »',
    'index.testim3.text':     '« À deux pas de Saint-Émilion et Pomerol, la table d\'hôtes a des airs de restaurant gastronomique. La cuisine, le service, le cadre, tout concourt à rendre le séjour inoubliable. »',

    // Section Contact
    'index.contact.label':    'Contact & réservation',
    'index.contact.title':    'Une question\u00a0?',
    'index.contact.text':     'Nous répondons en moins de 24h. Pas de formulaire complexe, juste un message, et nous nous occupons du reste.',
    'index.contact.phone':    'Téléphone :',
    'index.contact.addr':     'Adresse : 2028 Avenue du Docteur Deseymeris, 24610 Villefranche-de-Lonchat',
    'form.name.label':        'Nom',
    'form.email.label':       'Email',
    'form.dates.label':       'Dates envisagées',
    'form.guests.label':      'Nombre de personnes',
    'form.msg.label':         'Message',
    'form.submit':            'Envoyer ma demande',
    'form.name.ph':           'Votre nom',
    'form.dates.ph':          'ex : 12 au 15 juillet',
    'form.msg.ph':            'Votre demande...',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : hebergements.html
    // ══════════════════════════════════════════════════════════════════════════

    'lodging.hero.eyebrow':   'Maison d\'hôtes & Gîtes',
    'lodging.hero.title':     'Nos hébergements',
    'lodging.hero.subtitle':  'Suites de charme et gîtes indépendants, pour un week-end à deux, un séjour en famille ou une escapade entre amis.',

    // Section suites
    'lodging.suites.label':   'Maison d\'hôtes',
    'lodging.suites.title':   '5 suites avec petit-déjeuner inclus',
    'lodging.suites.text':    'Chaque suite dispose de sa salle de bain privative et WC privatif. Le petit-déjeuner, préparé chaque matin avec des produits locaux, est inclus dans tous les séjours.',

    // Double Suite St-Émilion
    'lodging.margaux.tagline':       'Deux suites communicantes, une seule location. L\'espace idéal pour deux couples ou une famille qui veut de l\'intimité sans se séparer.',
    'lodging.margaux.badge.acces':   'Accès extérieur privatif',
    'lodging.margaux.amenities':     '<li>2 lits queen size</li><li>2 SDB privatives &amp; WC privatifs</li><li>2 télévisions</li><li>Sèche-cheveux</li><li>Shampoing, savon, serviettes</li><li>Petit-déjeuner inclus</li>',
    'lodging.cta.avail':             'Demander les disponibilités',

    // Suite Sauternes
    'lodging.sauternes.tagline':     'La plus spacieuse du deuxième étage. Un lit queen size, un lit d\'appoint, de la lumière naturelle et une climatisation réversible pour toutes les saisons.',
    'lodging.sauternes.amenities':   '<li>Lit queen size</li><li>Lit 1 place</li><li>SDB privative &amp; WC privatif</li><li>Télévision</li><li>Sèche-cheveux</li><li>Shampoing, savon, serviettes</li><li>Petit-déjeuner inclus</li>',

    // Suite Puygrenier
    'lodging.puygrenier.tagline':    'La suite signature du château. Lumineuse des deux côtés, avec lit double, lit simple et lit gigogne. Pensée pour les familles qui veulent de l\'espace.',
    'lodging.puygrenier.badge.view': 'Vue double exposition',
    'lodging.puygrenier.amenities':  '<li>Lit king size</li><li>2 lits simples</li><li>SDB privative &amp; WC privatif</li><li>Télévision</li><li>Sèche-cheveux</li><li>Shampoing, savon, serviettes</li><li>Petit-déjeuner inclus</li>',

    // Suite Pomerol
    'lodging.pomerol.tagline':       'Élégante et intimiste. Une suite à taille humaine pour un séjour à deux, dans un cadre soigné et calme.',
    'lodging.pomerol.amenities':     '<li>Lit queen size</li><li>SDB privative &amp; WC privatif</li><li>Télévision</li><li>Sèche-cheveux</li><li>Shampoing, savon, serviettes</li><li>Petit-déjeuner inclus</li>',

    // Suite Puisseguin
    'lodging.puisseguin.tagline':    'Cosy et lumineuse. Le format idéal pour un séjour à deux, avec tout ce qu\'il faut sans superflu.',
    'lodging.puisseguin.amenities':  '<li>Lit queen size</li><li>SDB privative &amp; WC privatif</li><li>Télévision</li><li>Sèche-cheveux</li><li>Shampoing, savon, serviettes</li><li>Petit-déjeuner inclus</li>',

    // Section gîtes
    'lodging.gites.label':           'Gîtes',
    'lodging.gites.title':           '2 gîtes indépendants avec cuisine équipée',
    'lodging.gites.text':            'Accès totalement indépendant, cuisine équipée, espace privatif. Le petit-déjeuner est disponible en option.',

    // Gîte Pécharmant
    'lodging.pecharment.tagline':    'Un gîte sur deux niveaux, entièrement indépendant. Cuisine, salon et chambres séparées. Les familles et groupes d\'amis s\'y posent à leur rythme.',
    'lodging.pecharment.amenities':  '<li>2 chambres (1 lit queen size + 1 lit simple)</li><li>Salon / séjour avec canapés</li><li>Cuisine entièrement équipée</li><li>Salle de bain privative</li><li>Télévision</li><li>Sèche-cheveux</li><li>Shampoing, savon, serviettes</li><li>Petit-déjeuner en option</li>',

    // Gîte Montravel
    'lodging.montravel.tagline':     'Une parenthèse à deux. Intimiste, entièrement indépendant, avec son lit en mezzanine, sa cuisine et son accès direct depuis l\'extérieur.',
    'lodging.montravel.amenities':   '<li>Lit en mezzanine</li><li>Salle de bain indépendante</li><li>Cuisine entièrement équipée</li><li>Télévision</li><li>Sèche-cheveux</li><li>Shampoing, savon, serviettes</li><li>Meubles de rangement</li><li>Petit-déjeuner en option</li>',

    // CTA final hébergements
    'lodging.cta.label':  'Réservation',
    'lodging.cta.title':  'Prêt à poser vos dates ?',
    'lodging.cta.text':   'Dites-nous quand, combien vous serez et quelle unité vous attire, nous revenons vers vous en moins de 24h.',
    'lodging.cta.btn1':   'Nous contacter',
    'lodging.cta.btn2':   'Retour à l\'accueil',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : experiences.html
    // ══════════════════════════════════════════════════════════════════════════

    'exp.hero.eyebrow':          'Sur place',
    'exp.hero.title':            'Le domaine se vit aussi en dehors des chambres.',
    'exp.hero.subtitle':         'Piscine, spa, table d\'hôtes, vie de la ferme, pique-nique terroir, sept façons de prolonger le plaisir sans quitter le domaine.',

    'exp.piscine.label':         'Inclus pour tous',
    'exp.piscine.tagline':       'Accès libre pour tous les hébergements, sans supplément. Se poser au bord de l\'eau, sans rien avoir à planifier.',
    'exp.piscine.amenities':     '<li>Accès sans réservation</li><li>Disponible pour les 7 hébergements</li><li>Cadre naturel préservé</li><li>Transats et espace détente</li>',
    'exp.piscine.cta':           'Réserver un séjour',

    'exp.spa.label':             'Sur réservation · service payant',
    'exp.spa.tagline':           'Un espace privatif avec jacuzzi et sauna, vue panoramique sur le domaine. Réservé exclusivement aux hébergements du château.',
    'exp.spa.amenities':         '<li>Jacuzzi privatif</li><li>Sauna finlandais</li><li>Vue panoramique sur le domaine</li><li>Accessible à tous les hébergements</li>',
    'exp.spa.cta':               'Réserver le spa',

    'exp.resto.label':           'À la carte · résidents et invités',
    'exp.resto.tagline':         'Chaque soir, une table partagée autour des saveurs du Périgord. Produits locaux, vins de la région, et l\'ambiance chaleureuse d\'un repas en famille.',
    'exp.resto.amenities':       '<li>Ouvert chaque soir sur réservation</li><li>Cuisine du terroir périgourdin</li><li>Produits locaux et de saison</li><li>Vins de la région</li>',
    'exp.resto.cta':             'Réserver une table',

    'exp.petitdej.label':        'Inclus dans les suites · option pour les gîtes',
    'exp.petitdej.tagline':      'Un buffet généreux dressé chaque matin dans le château. Produits locaux, confitures maison, viennoiseries fraîches. Parce qu\'un bon séjour commence au petit-déjeuner.',
    'exp.petitdej.badge1':       'Inclus (suites)',
    'exp.petitdej.badge2':       'Option (gîtes)',
    'exp.petitdej.amenities':    '<li>Produits locaux et de saison</li><li>Fait maison chaque matin</li><li>Formule premium sur demande</li>',
    'exp.petitdej.cta':          'Nous contacter',

    'exp.piquenique.label':      'Sur commande la veille · service payant',
    'exp.piquenique.tagline':    'Un panier en osier isotherme, garni de produits du terroir local, à emporter le matin pour déjeuner dans les vignes, au bord de la Dordogne ou à l\'ombre des platanes du domaine.',
    'exp.piquenique.amenities':  '<li>Pain artisanal et fruits de saison</li><li>Fromages et charcuteries régionaux</li><li>Sélection de produits du terroir périgourdin</li><li>Formule avec vin du château disponible</li>',
    'exp.piquenique.cta':        'Commander un panier',

    'exp.ferme.label':           'Inclus · familles bienvenues',
    'exp.ferme.tagline':         'Un parc verdoyant avec chevaux, chèvres naines et jeux pour enfants. Inclus dans tous les séjours, pour petits et grands.',
    'exp.ferme.amenities':       '<li>4 chèvres naines en liberté</li><li>Cheval dans la prairie</li><li>Jeux pour enfants</li><li>Accompagnement par les propriétaires sur demande</li>',
    'exp.ferme.cta':             'En savoir plus',

    'exp.reception.label':       'Sur réservation · espace privatisable',
    'exp.reception.tagline':     '80 m² pour réunir vos proches, organiser une soirée thématique, une projection de film ou une soirée jeux. Le château devient votre terrain de jeu.',
    'exp.reception.amenities':   '<li>Salle de 80 m²</li><li>Soirées à thème (libre ou organisées)</li><li>Jeux de société disponibles</li><li>Soirée cinéma / projection</li><li>Dégustation de vins du terroir sur demande</li><li>Animations sur mesure possibles</li><li>Idéal pour groupes et événements privés</li>',
    'exp.reception.cta':         'Organiser un événement',

    // Tableau récapitulatif
    'exp.recap.label':           'Récapitulatif',
    'exp.recap.title':           'Ce qui est inclus dans votre séjour',
    'exp.recap.intro':           'Un aperçu rapide de ce qui est compris selon votre hébergement.',
    'exp.table.th1':             'Service',
    'exp.table.th2':             'Suites (maison d\'hôtes)',
    'exp.table.th3':             'Gîtes',
    'exp.table.th4':             'Prix',
    'exp.table.pool':            'Piscine',
    'exp.table.breakfast':       'Petit-déjeuner',
    'exp.table.dinner':          'Table d\'hôtes (dîner)',
    'exp.table.spa':             'Spa & Sauna',
    'exp.table.picnic':          'Panier pique-nique terroir',
    'exp.table.farm':            'Vie de la ferme',
    'exp.table.hall':            'Salle de réception',
    'svc.yes':                   'Inclus',
    'svc.option':                'Option',
    'svc.alacarte':              'À la carte',
    'svc.onrequest':             'Sur réservation',
    'svc.onorder':               'Sur commande',

    // CTA final expériences
    'exp.cta.label':   'Réservation',
    'exp.cta.title':   'Prêt à vivre l\'expérience\u00a0?',
    'exp.cta.text':    'Parlez-nous de votre projet de séjour, nous nous occupons du reste.',
    'exp.cta.btn1':    'Nous contacter',
    'exp.cta.btn2':    'Voir les hébergements',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : destination.html
    // ══════════════════════════════════════════════════════════════════════════

    'dest.hero.eyebrow':      'Périgord & Bordelais',
    'dest.hero.title':        'Deux régions.<br>Un point de chute idéal.',
    'dest.hero.subtitle':     'Posés entre le Périgord Pourpre et les vignobles bordelais, vous êtes à portée de tout, sans jamais avoir à vous presser.',

    'dest.domaine.label':     'Le cadre',
    'dest.domaine.title':     'Un domaine de caractère, loin de l\'agitation.',
    'dest.domaine.tagline':   'Château Puygrenier s\'étend sur plusieurs hectares de nature préservée, parc arboré, prairies, potager, avec une vue dégagée des deux côtés du bâtiment.',
    'dest.domaine.amenities': '<li>Parc arboré et espaces verts</li><li>Prairies avec chevaux et chèvres naines</li><li>Potager du domaine</li><li>Piscine extérieure</li><li>Spa &amp; sauna avec vue panoramique</li><li>15 km de chemins et sentiers alentour</li>',
    'dest.domaine.cta':       'Réserver un séjour',

    'dest.perigord.label':    'La région',
    'dest.perigord.title':    'Périgord Pourpre : châteaux, falaises & marchés.',
    'dest.perigord.tagline':  'À quelques kilomètres, le Périgord déroule ses vallées, ses villages perchés et ses marchés paysans, un arrière-pays généreux, encore préservé.',
    'dest.sfg.desc':          'Port médiéval sur la Dordogne, marché du samedi, 25 km · 30 min',
    'dest.bergerac.desc':     'Cité du vin, vieille ville, marché du mercredi, 40 km · 55 min',
    'dest.eymet.desc':        'Bastide médiévale, marché du jeudi, foie gras, 55 km · 1h',
    'dest.issigeac.desc':     'Village médiéval classé, marché du dimanche, 67 km · 1h10',
    'dest.sarlat.desc':       'Excursion d\'une journée — vieille ville médiévale, marché du samedi — 2h',

    'dest.vignobles.label':   'Vignobles',
    'dest.vignobles.title':   'À 30 minutes des plus grands vignobles du monde.',
    'dest.vignobles.tagline': 'Saint-Émilion, Pomerol, Fronsac, Sauternes : le classement des vins de Bordeaux s\'invite dans votre séjour, à un coup de volant.',
    'dest.castillon.desc':    'Première appellation viticole en quittant le domaine, 16 km · 25 min',
    'dest.saintemilion.desc': 'Village classé UNESCO, dégustations en cave, 21 km · 30 min',
    'dest.pomerol.desc':      'Appellations d\'exception, paysages de vignes, 25 km · 35 min',
    'dest.sauternes.desc':    'Vignobles liquoreux, Château d\'Yquem — 69 km · 1h20',
    'dest.bordeaux.desc':     'Cité du Vin, quais de la Garonne, restaurants, 77 km · 1h10',

    'dest.gastro.label':      'Gastronomie & marchés',
    'dest.gastro.title':      'Truffes, foie gras, vins de terroir, à portée de table.',
    'dest.gastro.tagline':    'Le Périgord Pourpre est une des grandes tables de France. Marchés paysans, fermes en direct, producteurs de truffes et vignerons indépendants — tout se trouve à quelques kilomètres du château.',
    'dest.marches.title':     'Marchés paysans',
    'dest.marches.desc':      'Sainte-Foy (sam.), Bergerac (mer. & sam.), Eymet (jeu.), Issigeac (dim.) : foie gras, canard, produits du terroir',
    'dest.truffes.title':     'Truffes noires',
    'dest.truffes.desc':      'Périgord Noir en saison (jan.–mars) — comptez 1h30 de route, une excursion qui vaut le détour',
    'dest.surplace.title':    'Sur place',
    'dest.surplace.desc':     'Table d\'hôtes le soir, petit-déjeuner maison, panier terroir sur commande',
    'dest.restaurants.title': 'Restaurants alentour',
    'dest.restaurants.desc':  'Plusieurs adresses de terroir à 10–20 min, conseils sur demande',
    'dest.gastro.cta':        'Voir nos offres sur place',

    'dest.acces.label':       'Accès',
    'dest.acces.title':       'Facile depuis Bordeaux, Paris ou Londres.',
    'dest.acces.intro':       'En voiture depuis Bordeaux, en avion sur Bergerac ou Bordeaux-Mérignac, ou en TGV jusqu\'à Bordeaux puis une heure de route, l\'arrivée fait déjà partie du voyage.',
    'dest.acces.h3':          'Distances & temps de trajet',
    'dest.acces.note':        'L\'adresse GPS exacte vous est communiquée à la confirmation de réservation.',
    'dest.acces.cta':         'Contacter pour réserver',
    'dest.acces.maplink':     'Agrandir la carte',

    'dest.cta.label':         'Prêt à venir ?',
    'dest.cta.title':         'Réservez votre séjour.',
    'dest.cta.text':          'On répond en moins de 24h. Envoyez-nous vos dates et le nombre de personnes, on s\'occupe du reste.',
    'dest.cta.btn1':          'Vérifier mes dates',
    'dest.cta.btn2':          'Voir les hébergements',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : contact.html
    // ══════════════════════════════════════════════════════════════════════════

    'contact.hero.eyebrow':          'Contact & Réservation',
    'contact.hero.title':            'Une question\u00a0?<br>On répond en\u00a024h.',
    'contact.hero.subtitle':         'Pas de formulaire complexe, juste un message, et nous nous occupons du reste.',

    'contact.info.label':            'Nous contacter',
    'contact.info.title':            'Votre séjour commence ici',
    'contact.info.text':             'Disponibilités, demandes spéciales, privatisation du domaine. Écrivez-nous ou appelez, nous adaptons chaque séjour.',
    'contact.phone':                 'Téléphone :',
    'contact.address':               'Adresse : 2028 Avenue du Docteur Deseymeris, 24610 Villefranche-de-Lonchat',

    'contact.form.name':             'Nom',
    'contact.form.email':            'Email',
    'contact.form.dates':            'Dates envisagées',
    'contact.form.guests':           'Nombre de personnes',
    'contact.form.lodging':          'Hébergement souhaité',
    'contact.form.msg':              'Message',
    'contact.form.submit':           'Envoyer ma demande',
    'contact.form.name.ph':          'Votre nom',
    'contact.form.dates.ph':         'ex : 12 au 15 juillet',
    'contact.form.msg.ph':           'Votre demande, vos questions...',
    'contact.form.lodging.unknown':  'Je ne sais pas encore',
    'contact.form.lodging.both':     'Double Suite St-Émilion',
    'contact.form.lodging.domain':   'Domaine entier (privatisation)',

    'contact.faq.label':  'Questions fréquentes',
    'contact.faq.title':  'Tout ce que vous voulez savoir',

    'faq.q1': 'Quelles sont les heures d\'arrivée et de départ\u00a0?',
    'faq.a1': 'L\'arrivée se fait à partir de <strong>16h</strong> et le départ avant <strong>11h</strong>. En dehors de ces horaires, n\'hésitez pas à nous contacter, nous faisons notre possible pour accommoder des horaires différents selon les disponibilités.',
    'faq.q2': 'Le petit-déjeuner est-il inclus\u00a0?',
    'faq.a2': 'Le petit-déjeuner est inclus dans le tarif de toutes les <strong>suites de la maison d\'hôtes</strong>. Pour les <strong>gîtes Pécharmant et Montravel</strong>, la formule est en self-catering, cuisine entièrement équipée à disposition.',
    'faq.q3': 'La piscine et le spa sont-ils accessibles à tous\u00a0?',
    'faq.a3': 'Oui. La piscine extérieure et le spa (jacuzzi, sauna) sont inclus et accessibles à tous les hébergements. Des plages horaires peuvent être organisées en cas de forte occupation du domaine pour garantir la tranquillité de chacun.',
    'faq.q4': 'Y a-t-il une connexion WiFi\u00a0?',
    'faq.a4': 'Oui, le WiFi haut débit est inclus dans tous les hébergements, à l\'intérieur comme dans les espaces extérieurs du domaine.',
    'faq.q5': 'Les animaux de compagnie sont-ils acceptés\u00a0?',
    'faq.a5': 'Contactez-nous directement pour en discuter. L\'acceptation dépend de l\'hébergement choisi et des autres résidents présents pendant votre séjour.',
    'faq.q6': 'Quelle est la capacité totale du domaine\u00a0?',
    'faq.a6': 'Le domaine peut accueillir jusqu\'à <strong>20 personnes</strong> en combinant les 5 suites de la maison d\'hôtes et les 2 gîtes. Pour les événements privatisés (mariages, séminaires, week-ends en groupe), contactez-nous pour un devis personnalisé.',
    'faq.q7': 'Peut-on privatiser l\'intégralité du domaine\u00a0?',
    'faq.a7': 'Absolument. La privatisation complète est possible pour mariages, anniversaires, séminaires ou week-ends en famille ou entre amis. Contactez-nous pour que nous construisions ensemble la formule adaptée à votre projet.',
    'faq.q8': 'Quelles sont les conditions d\'annulation\u00a0?',
    'faq.a8': 'Les conditions d\'annulation varient selon le canal de réservation (Booking, Airbnb, réservation directe). Pour les réservations directes, les conditions vous sont communiquées lors de la confirmation. N\'hésitez pas à nous contacter pour plus de détails.',
    'faq.q9': 'La table d\'hôtes est-elle disponible tous les soirs\u00a0?',
    'faq.a9': 'La table d\'hôtes est proposée sur réservation, idéalement la veille au plus tard. Elle n\'est pas disponible tous les soirs, merci de préciser votre intérêt lors de votre demande de séjour.',
  },

  /* ══════════════════════════════════════════════════════════════════════════
     ENGLISH — add translations here
  ══════════════════════════════════════════════════════════════════════════ */
  en: {

    // ── Navigation ───────────────────────────────────────────────────────────
    'nav.skip':           'Skip to content',
    'nav.home':           'Home',
    'nav.lodging':        'Accommodations',
    'nav.experiences':    'Experiences',
    'nav.destination':    'Destination',
    'nav.events':         'Events',
    'nav.book':           'Book',
    'nav.toggle.open':    'Open menu',
    'nav.toggle.close':   'Close menu',

    // ── Footer ───────────────────────────────────────────────────────────────
    'footer.copyright':   '© 2026 Château Puygrenier. All rights reserved.',
    'footer.legal':       'Legal notice',
    'footer.privacy':     'Privacy policy',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : index.html
    // ══════════════════════════════════════════════════════════════════════════

    'index.hero.eyebrow':     'GUESTHOUSE & COTTAGES NEAR SAINT-ÉMILION',
    'index.hero.title':       'Charming stays, spa & nature between the Dordogne and the vineyards.',
    'index.hero.subtitle':    'Suites and cottages on a peaceful estate with pool, privatisable spa and local food experiences.',
    'index.hero.cta1':        'Discover the accommodations',
    'index.hero.cta2':        'Check availability',

    'index.domaine.label':    'The estate',
    'index.domaine.title':    'A place designed to reconnect.',
    'index.domaine.text':     'Come to rest, enjoy the grounds, share a homemade breakfast, linger by the pool or end the day at the spa. A characterful guesthouse, alive and genuine.',
    'index.domaine.stat1':    'unique accommodations',
    'index.domaine.stat2':    'guests maximum',
    'index.domaine.stat3':    'regions, one address',

    'index.lodging.label':    'Accommodations',
    'index.lodging.title':    'Choose your way to stay.',
    'index.lodging.intro':    'From guesthouse suites to independent cottages, each accommodation has its own character, space and light.',
    'index.lodging.cta':      'View all accommodations in detail',
    'index.lodge.discover':   'Discover →',
    'index.margaux.badge':    'Double Suite · Ground floor',
    'index.margaux.desc':     'Two connecting suites with private outdoor access, designed for family or group stays in a calm and independent setting.',
    'index.sauternes.badge':  'Suite · 2nd floor',
    'index.sauternes.desc':   'Beneath the exposed beams of the second floor, a bright and generous suite, ideal for unwinding after a day among the vineyards.',
    'index.puisseguin.badge': 'Suite · 2nd floor',
    'index.puisseguin.desc':  'A cosy suite under the eaves, with intimate and warm charm, perfect for a stay for two.',

    'index.exp.label':        'On site',
    'index.exp.title':        'The estate is lived in beyond the bedroom walls.',
    'index.exp.intro':        'Pool, spa with a view, dinner table, estate life: simple experiences that naturally extend your stay.',
    'index.piscine.h3':       'Pool',
    'index.piscine.desc':     'Free access for all guests. A space designed to slow down between regional discoveries.',
    'index.piscine.badge':    'Included',
    'index.spa.h3':           'Spa & Sauna',
    'index.spa.desc':         'An independent wellness space with views over the estate, bookable for a quieter moment.',
    'index.spa.badge':        'On request',
    'index.resto.h3':         'Dinner table',
    'index.resto.desc':       'Home cooking, local produce and long summer evenings around the table.',
    'index.resto.badge':      'À la carte',
    'index.ferme.h3':         'Farm life',
    'index.ferme.desc':       'Chickens, vegetable garden, dwarf goats and a horse are naturally part of daily life on the estate.',
    'index.ferme.badge':      'Included',
    'index.exp.cta':          'Discover the full experience',

    'index.dest.label':       'Destination',
    'index.dest.title':       'Two regions.<br>One perfect base.',
    'index.dest.text':        'On the border of the Périgord and the Bordeaux vineyards, Château Puygrenier is the perfect base to explore nature, villages, gastronomy and great wines.',
    'index.dest.d1.title':    'Bordeaux Vineyards',
    'index.dest.d1.desc':     'Saint-Émilion, Pomerol, Bergerac and the wine routes, close to the estate.',
    'index.dest.d2.title':    'Dordogne & heritage',
    'index.dest.d2.desc':     'Bastides, markets, stone villages and landscapes typical of the South-West.',
    'index.dest.d3.title':    'Terroir',
    'index.dest.d3.desc':     'Foie gras, truffles, wines, local tables and seasonal produce shape the days.',
    'index.dest.cta':         'Explore the region',

    'index.testim.label':     'Guest reviews',
    'index.testim.title':     'What our guests say.',
    'index.testim.intro':     '48 verified reviews on TripAdvisor. Stays with family, couples, friends. One constant: the wish to return.',
    'index.testim.cta':       'Read all reviews →',
    'index.testim1.text':     '« Homemade tapas, local cheeses and generous desserts, perfectly matched with regional wines. A warm and genuine welcome — a place we would recommend without hesitation. »',
    'index.testim2.text':     '« A week with nine of us: spacious, beautifully decorated rooms and excellent bedding. The owners take real care of you. It truly feels like home. »',
    'index.testim3.text':     '« Just a short drive from Saint-Émilion and Pomerol, the dinner table rivals a fine restaurant. The food, the service, the setting: everything makes for an unforgettable stay. »',

    'index.contact.label':    'Contact & reservation',
    'index.contact.title':    'A question ?',
    'index.contact.text':     'We reply within 24h. No complex form, just a message, and we\'ll take care of the rest.',
    'index.contact.phone':    'Phone:',
    'index.contact.addr':     'Address: 2028 Avenue du Docteur Deseymeris, 24610 Villefranche-de-Lonchat',
    'form.name.label':        'Name',
    'form.email.label':       'Email',
    'form.dates.label':       'Intended dates',
    'form.guests.label':      'Number of guests',
    'form.msg.label':         'Message',
    'form.submit':            'Send my request',
    'form.name.ph':           'Your name',
    'form.dates.ph':          'e.g. 12 to 15 July',
    'form.msg.ph':            'Your request...',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : hebergements.html
    // ══════════════════════════════════════════════════════════════════════════

    'lodging.hero.eyebrow':   'Guesthouse & Cottages',
    'lodging.hero.title':     'Our accommodations',
    'lodging.hero.subtitle':  'Charming suites and independent cottages, for a weekend away, a family stay or a getaway with friends.',

    'lodging.suites.label':   'Guesthouse',
    'lodging.suites.title':   '5 suites with breakfast included',
    'lodging.suites.text':    'Each suite has its own private bathroom and WC. Breakfast, prepared each morning with local products, is included in all stays.',

    'lodging.margaux.tagline':       'Two connecting suites, one rental. The ideal space for two couples or a family who want privacy without being apart.',
    'lodging.margaux.badge.acces':   'Private outdoor access',
    'lodging.margaux.amenities':     '<li>2 queen size beds</li><li>2 en-suite bathrooms &amp; WC</li><li>2 televisions</li><li>Hairdryer</li><li>Shampoo, soap, towels</li><li>Breakfast included</li>',
    'lodging.cta.avail':             'Check availability',

    'lodging.sauternes.tagline':     'The most spacious on the second floor. A queen size bed, an extra bed, natural light and reversible air conditioning for all seasons.',
    'lodging.sauternes.amenities':   '<li>Queen size bed</li><li>Single bed</li><li>En-suite bathroom &amp; WC</li><li>Television</li><li>Hairdryer</li><li>Shampoo, soap, towels</li><li>Breakfast included</li>',

    'lodging.puygrenier.tagline':    'The château\'s signature suite. Bright on both sides, with a double bed, a single bed and a trundle bed. Perfect for families who want room to breathe.',
    'lodging.puygrenier.badge.view': 'Dual aspect views',
    'lodging.puygrenier.amenities':  '<li>King size bed</li><li>2 single beds</li><li>En-suite bathroom &amp; WC</li><li>Television</li><li>Hairdryer</li><li>Shampoo, soap, towels</li><li>Breakfast included</li>',

    'lodging.pomerol.tagline':       'Elegant and intimate. A perfectly sized suite for two, in a refined and peaceful setting.',
    'lodging.pomerol.amenities':     '<li>Queen size bed</li><li>En-suite bathroom &amp; WC</li><li>Television</li><li>Hairdryer</li><li>Shampoo, soap, towels</li><li>Breakfast included</li>',

    'lodging.puisseguin.tagline':    'Cosy and bright. The ideal format for a couples\' stay, with everything you need and nothing superfluous.',
    'lodging.puisseguin.amenities':  '<li>Queen size bed</li><li>En-suite bathroom &amp; WC</li><li>Television</li><li>Hairdryer</li><li>Shampoo, soap, towels</li><li>Breakfast included</li>',

    'lodging.gites.label':           'Cottages',
    'lodging.gites.title':           '2 independent cottages with equipped kitchen',
    'lodging.gites.text':            'Fully independent access, equipped kitchen, private space. Breakfast is available as an option.',

    'lodging.pecharment.tagline':    'A fully independent cottage on two floors. Kitchen, living room and separate bedrooms. Families and groups settle in and make it their own.',
    'lodging.pecharment.amenities':  '<li>2 bedrooms (1 queen size bed + 1 single bed)</li><li>Lounge / living room with sofas</li><li>Fully equipped kitchen</li><li>Private bathroom</li><li>Television</li><li>Hairdryer</li><li>Shampoo, soap, towels</li><li>Breakfast on request</li>',

    'lodging.montravel.tagline':     'A romantic retreat for two. Intimate, fully independent, with its mezzanine bed, kitchen and direct access from outside.',
    'lodging.montravel.amenities':   '<li>Mezzanine bed</li><li>Independent bathroom</li><li>Fully equipped kitchen</li><li>Television</li><li>Hairdryer</li><li>Shampoo, soap, towels</li><li>Storage furniture</li><li>Breakfast on request</li>',

    'lodging.cta.label':  'Reservation',
    'lodging.cta.title':  'Ready to set your dates?',
    'lodging.cta.text':   'Tell us when, how many you\'ll be and which unit appeals, we\'ll get back to you within 24h.',
    'lodging.cta.btn1':   'Contact us',
    'lodging.cta.btn2':   'Back to home',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : experiences.html
    // ══════════════════════════════════════════════════════════════════════════

    'exp.hero.eyebrow':          'On site',
    'exp.hero.title':            'The estate is lived in beyond the bedroom walls.',
    'exp.hero.subtitle':         'Pool, spa, dinner table, farm life, local picnic, seven ways to extend the pleasure without leaving the estate.',

    'exp.piscine.label':         'Included for all',
    'exp.piscine.tagline':       'Free access for all accommodations, at no extra charge. Sitting by the water, nothing to plan.',
    'exp.piscine.amenities':     '<li>No reservation required</li><li>Available for all 7 accommodations</li><li>Preserved natural setting</li><li>Sun loungers and relaxation area</li>',
    'exp.piscine.cta':           'Book a stay',

    'exp.spa.label':             'On request · paid service',
    'exp.spa.tagline':           'A private space with jacuzzi and sauna, panoramic view over the estate. Reserved exclusively for château guests.',
    'exp.spa.amenities':         '<li>Private jacuzzi</li><li>Finnish sauna</li><li>Panoramic view over the estate</li><li>Accessible to all accommodations</li>',
    'exp.spa.cta':               'Book the spa',

    'exp.resto.label':           'À la carte · guests and visitors',
    'exp.resto.tagline':         'Every evening, a shared table celebrating the flavours of the Périgord. Local produce, regional wines, and the warm atmosphere of a family meal.',
    'exp.resto.amenities':       '<li>Open every evening, reservation required</li><li>Périgord local cuisine</li><li>Local and seasonal produce</li><li>Regional wines</li>',
    'exp.resto.cta':             'Reserve a table',

    'exp.petitdej.label':        'Included in suites · option for cottages',
    'exp.petitdej.tagline':      'A generous buffet laid out each morning in the château. Local produce, homemade jams, fresh pastries. Because a great stay begins at breakfast.',
    'exp.petitdej.badge1':       'Included (suites)',
    'exp.petitdej.badge2':       'Option (cottages)',
    'exp.petitdej.amenities':    '<li>Local and seasonal products</li><li>Homemade every morning</li><li>Premium formula on request</li>',
    'exp.petitdej.cta':          'Contact us',

    'exp.piquenique.label':      'Pre-ordered the day before · paid service',
    'exp.piquenique.tagline':    'An insulated wicker basket filled with local produce, to take out in the morning for lunch among the vines, by the Dordogne river or in the shade of the estate\'s plane trees.',
    'exp.piquenique.amenities':  '<li>Artisan bread and seasonal fruit</li><li>Regional cheeses and charcuterie</li><li>Selection of Périgord local produce</li><li>Formula with château wine available</li>',
    'exp.piquenique.cta':        'Order a basket',

    'exp.ferme.label':           'Included · families welcome',
    'exp.ferme.tagline':         'A lush park with horses, dwarf goats and children\'s play area. Included in all stays, for young and old alike.',
    'exp.ferme.amenities':       '<li>4 dwarf goats roaming freely</li><li>Horse in the meadow</li><li>Children\'s play area</li><li>Guided by the owners on request</li>',
    'exp.ferme.cta':             'Find out more',

    'exp.reception.label':       'On request · privatisable space',
    'exp.reception.tagline':     '80 m² to gather your loved ones, organise a themed evening, a film screening or a games night. The château becomes your playground.',
    'exp.reception.amenities':   '<li>80 m² event room</li><li>Themed evenings (free or organised)</li><li>Board games available</li><li>Cinema / projection evening</li><li>Local wine tasting on request</li><li>Custom entertainment possible</li><li>Ideal for groups and private events</li>',
    'exp.reception.cta':         'Organise an event',

    'exp.recap.label':           'Summary',
    'exp.recap.title':           'What\'s included in your stay',
    'exp.recap.intro':           'A quick overview of what is included depending on your accommodation.',
    'exp.table.th1':             'Service',
    'exp.table.th2':             'Suites (guesthouse)',
    'exp.table.th3':             'Cottages',
    'exp.table.th4':             'Price',
    'exp.table.pool':            'Pool',
    'exp.table.breakfast':       'Breakfast',
    'exp.table.dinner':          'Dinner table',
    'exp.table.spa':             'Spa & Sauna',
    'exp.table.picnic':          'Local picnic basket',
    'exp.table.farm':            'Farm life',
    'exp.table.hall':            'Event room',
    'svc.yes':                   'Included',
    'svc.option':                'Option',
    'svc.alacarte':              'À la carte',
    'svc.onrequest':             'On request',
    'svc.onorder':               'On order',

    'exp.cta.label':   'Reservation',
    'exp.cta.title':   'Ready to experience it\u00a0?',
    'exp.cta.text':    'Tell us about your stay project, we\'ll take care of the rest.',
    'exp.cta.btn1':    'Contact us',
    'exp.cta.btn2':    'View accommodations',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : destination.html
    // ══════════════════════════════════════════════════════════════════════════

    'dest.hero.eyebrow':      'Périgord & Bordeaux',
    'dest.hero.title':        'Two regions.<br>One perfect base.',
    'dest.hero.subtitle':     'Nestled between the Périgord Pourpre and the Bordeaux vineyards, you are within reach of everything, without ever having to rush.',

    'dest.domaine.label':     'The setting',
    'dest.domaine.title':     'A characterful estate, far from the crowds.',
    'dest.domaine.tagline':   'Château Puygrenier extends over several hectares of preserved nature, wooded park, meadows, kitchen garden, with open views on both sides of the building.',
    'dest.domaine.amenities': '<li>Wooded park and green spaces</li><li>Meadows with horses and dwarf goats</li><li>Estate kitchen garden</li><li>Outdoor pool</li><li>Spa &amp; sauna with panoramic view</li><li>15 km of trails and footpaths nearby</li>',
    'dest.domaine.cta':       'Book a stay',

    'dest.perigord.label':    'The region',
    'dest.perigord.title':    'Périgord Pourpre : châteaux, cliffs & markets.',
    'dest.perigord.tagline':  'A few kilometres away, the Périgord unfolds its valleys, hilltop villages and farmers\' markets, a generous hinterland, still unspoilt.',
    'dest.sfg.desc':          'Medieval port on the Dordogne, Saturday market, 25 km · 30 min',
    'dest.bergerac.desc':     'Wine city, old town, Wednesday market, 40 km · 55 min',
    'dest.eymet.desc':        'Medieval bastide, Thursday market, foie gras, 55 km · 1h',
    'dest.issigeac.desc':     'Listed medieval village, Sunday market, 67 km · 1h10',
    'dest.sarlat.desc':       'Day trip: medieval old town, Saturday market, 2h',

    'dest.vignobles.label':   'Vineyards',
    'dest.vignobles.title':   '30 minutes from the world\'s greatest vineyards.',
    'dest.vignobles.tagline': 'Saint-Émilion, Pomerol, Fronsac, Sauternes : the Bordeaux wine classification is just a short drive from the estate.',
    'dest.castillon.desc':    'First wine appellation leaving the estate, 16 km · 25 min',
    'dest.saintemilion.desc': 'UNESCO listed village, cellar tastings, 21 km · 30 min',
    'dest.pomerol.desc':      'Exceptional appellations, vineyard landscapes, 25 km · 35 min',
    'dest.sauternes.desc':    'Sweet wine vineyards, Château d\'Yquem — 69 km · 1h20',
    'dest.bordeaux.desc':     'Cité du Vin, Garonne quays, restaurants, 77 km · 1h10',

    'dest.gastro.label':      'Food & markets',
    'dest.gastro.title':      'Truffles, foie gras, local wines, within reach.',
    'dest.gastro.tagline':    'The Périgord Pourpre is one of France\'s great gastronomic regions. Farmers\' markets, farm shops, truffle producers and independent winemakers — all within a few kilometres of the château.',
    'dest.marches.title':     'Farmers\' markets',
    'dest.marches.desc':      'Sainte-Foy (Sat.), Bergerac (Wed. & Sat.), Eymet (Thu.), Issigeac (Sun.) : foie gras, duck, local produce',
    'dest.truffes.title':     'Black truffles',
    'dest.truffes.desc':      'Périgord Noir in season (Jan.–Mar.) — allow 1h30 by road, a detour well worth making',
    'dest.surplace.title':    'On site',
    'dest.surplace.desc':     'Dinner table in the evening, homemade breakfast, picnic basket on order',
    'dest.restaurants.title': 'Restaurants nearby',
    'dest.restaurants.desc':  'Several local restaurants within 10–20 min, recommendations on request',
    'dest.gastro.cta':        'View our on-site offerings',

    'dest.acces.label':       'Getting here',
    'dest.acces.title':       'Easy from Bordeaux, Paris or London.',
    'dest.acces.intro':       'By car from Bordeaux, by plane to Bergerac or Bordeaux-Mérignac, or by TGV to Bordeaux then an hour\'s drive, the journey is already part of the experience.',
    'dest.acces.h3':          'Distances & travel times',
    'dest.acces.note':        'The exact GPS address is shared upon reservation confirmation.',
    'dest.acces.cta':         'Contact to book',
    'dest.acces.maplink':     'Open full map',

    'dest.cta.label':         'Ready to visit?',
    'dest.cta.title':         'Book your stay.',
    'dest.cta.text':          'We reply within 24h. Send us your dates and the number of guests, we\'ll take care of the rest.',
    'dest.cta.btn1':          'Check availability',
    'dest.cta.btn2':          'View accommodations',

    // ══════════════════════════════════════════════════════════════════════════
    // PAGE : contact.html
    // ══════════════════════════════════════════════════════════════════════════

    'contact.hero.eyebrow':          'Contact & Reservation',
    'contact.hero.title':            'A question\u00a0?<br>We reply within\u00a024h.',
    'contact.hero.subtitle':         'No complex form, just a message, and we\'ll take care of the rest.',

    'contact.info.label':            'Contact us',
    'contact.info.title':            'Your stay begins here',
    'contact.info.text':             'Availability, special requests, full estate hire. Write or call us, we adapt every stay.',
    'contact.phone':                 'Phone:',
    'contact.address':               'Address: 2028 Avenue du Docteur Deseymeris, 24610 Villefranche-de-Lonchat',

    'contact.form.name':             'Name',
    'contact.form.email':            'Email',
    'contact.form.dates':            'Intended dates',
    'contact.form.guests':           'Number of guests',
    'contact.form.lodging':          'Preferred accommodation',
    'contact.form.msg':              'Message',
    'contact.form.submit':           'Send my request',
    'contact.form.name.ph':          'Your name',
    'contact.form.dates.ph':         'e.g. 12 to 15 July',
    'contact.form.msg.ph':           'Your request, your questions...',
    'contact.form.lodging.unknown':  'Not sure yet',
    'contact.form.lodging.both':     'Double Suite St-Émilion',
    'contact.form.lodging.domain':   'Full estate (private hire)',

    'contact.faq.label':  'Frequently asked questions',
    'contact.faq.title':  'Everything you want to know',

    'faq.q1': 'What are the check-in and check-out times?',
    'faq.a1': 'Check-in is from <strong>4 pm</strong> and check-out before <strong>11 am</strong>. Outside these times, feel free to contact us, we do our best to accommodate different schedules depending on availability.',
    'faq.q2': 'Is breakfast included?',
    'faq.a2': 'Breakfast is included in the rate for all <strong>guesthouse suites</strong>. For the <strong>Pécharmant and Montravel cottages</strong>, the arrangement is self-catering, with a fully equipped kitchen available.',
    'faq.q3': 'Are the pool and spa accessible to all?',
    'faq.a3': 'Yes. The outdoor pool and spa (jacuzzi, sauna) are included and accessible to all accommodations. Time slots may be arranged during busy periods to ensure everyone\'s peace and quiet.',
    'faq.q4': 'Is there WiFi?',
    'faq.a4': 'Yes, high-speed WiFi is included in all accommodations, both indoors and across the estate\'s outdoor areas.',
    'faq.q5': 'Are pets welcome?',
    'faq.a5': 'Please contact us directly to discuss this. Acceptance depends on the chosen accommodation and the other guests present during your stay.',
    'faq.q6': 'What is the total capacity of the estate?',
    'faq.a6': 'The estate can accommodate up to <strong>20 guests</strong> combining the 5 guesthouse suites and the 2 cottages. For private events (weddings, seminars, group weekends), contact us for a personalised quote.',
    'faq.q7': 'Can the entire estate be privately hired?',
    'faq.a7': 'Absolutely. Full privatisation is possible for weddings, milestone birthdays, seminars or family and friends weekends. Contact us so we can build the formula that fits your project.',
    'faq.q8': 'What are the cancellation conditions?',
    'faq.a8': 'Cancellation conditions vary by booking channel (Booking, Airbnb, direct reservation). For direct bookings, conditions are communicated at confirmation. Feel free to contact us for more details.',
    'faq.q9': 'Is the dinner table available every evening?',
    'faq.a9': 'The dinner table is offered on reservation, ideally the day before at the latest. It is not available every evening, please mention your interest when submitting your stay request.',
  }
};
