# PROJET — Château Puygrenier

Référence technique, infrastructure et règles de build.

---

## ÉTAT ACTUEL — Mai 2026

**Phase 1 — Site vitrine statique** — 🔧 EN FINALISATION (photos restantes)

| Page | État |
|------|------|
| `index.html` | ✅ Structure, boutons, liens Lodgify, GTM — photos OK |
| `hebergements.html` | ✅ 7 unités, galeries, lightbox, hero carousel — toutes photos OK |
| `experiences.html` | ⚠️ Structure complète — 2 photos manquantes (`Salle-reception - soiree.jpg`, `Animaux - chevres-naines.jpg`) |
| `destination.html` | ⚠️ Structure complète — 4 photos manquantes (voir ci-dessous) |
| `contact.html` | ✅ Complet — formulaire FormSubmit + FAQ 9 questions accordéon |
| `mentions-legales.html` | ✅ Complet — Karokeys SAS, SIRET 938959996 00019 |
| `politique-confidentialite.html` | ✅ Complet — RGPD, cookies Google Fonts, droits CNIL |

### PHOTOS — État au 2026-05-14

**Fichiers absents mais référencés dans le HTML (à corriger) :**

| Fichier manquant | Page(s) | Solution possible |
|------------------|---------|-------------------|
| `Animaux - cheval-prairie.jpg` | destination, experiences | Substituer par `cheval.jpg` (existe) |
| `Animaux - chevres-naines.jpg` | destination, experiences | Photo à fournir |
| `Ext Facade - IMG_20251120_173051.jpg` | destination | Substituer par `Ext Facade - IMG_20260228_132639.jpg` (existe) |
| `Pique-nique - produits-locaux.jpg` | destination, experiences | Photo à fournir |
| `Potager - recolte.jpg` | destination, experiences | Photo à fournir |
| `Salle-reception - soiree.jpg` | experiences | Substituer par `Salle-reception - salle.jpg` (doublon) ou photo à fournir |

**Images dans `assets/images/` non encore utilisées :**
- `Restaurant - IMG_20260228_115837.jpg` — table d'hôtes, non référencé
- `Privé RDC - IMG_20260228_113204.jpg` — espace privé, non référencé
- `Piscine - IMG_20260228_133543.jpg` — piscine, non référencé
- `Ext Facade - IMG_20260228_132639.jpg` / `132708.jpg` — façade, non référencés
- `Ext Parc - IMG_20260228_132713.jpg` — parc, non référencé
- `palier étage 2.jpg` — couloir, usage à définir
- `chateau-puygrenier-gite-pecharment-6/7/9.jpg` — photos gîte Pécharmant supplémentaires

**Stack** : HTML / CSS / JavaScript — aucun framework  
**JS** : `script.js` — menu burger + hero carousel + lightbox + moteur i18n FR/EN  
**JS traductions** : `translations.js` — toutes les chaînes FR/EN, 57KB minifiable  
**CSS** : `style.css` — fichier unique, ~1500 lignes, sections séparées par `/* ═══ */`  
**Favicon** : `assets/images/favicon.svg` — monogramme "P" crème sur fond #3A4A35

---

## INFRASTRUCTURE

| Élément | Valeur |
|---------|--------|
| VPS | Hostinger — IP `82.25.112.137` |
| OS | Ubuntu 24.04.4 LTS |
| Serveur web | Nginx |
| Runtime | Node.js + PM2 (installés, Phase 3+) |
| BDD | PostgreSQL (installé, Phase 3+) |
| Dossier site | `/var/www/puygrenier` |
| Dev | `karokeys.fr` |
| Production | `chateaupuygrenier.fr` (lancement mai 2026) |
| DNS | A records uniquement — pas d'AAAA (IPv6 désactivé) |
| Git remote | GitHub → `git pull origin main` depuis `/var/www/puygrenier` pour déployer |

## ENTITÉ LÉGALE

| Élément | Valeur |
|---------|--------|
| Raison sociale | Karokeys |
| Forme juridique | SAS au capital de 1 000 € |
| SIREN | 938 959 996 |
| SIRET | 938 959 996 00019 |
| Gérant / Directeur de publication | Fornaciari Romain |
| Adresse | 2026 Avenue du Docteur Deseymeris, Puygrenier, 24610 Villefranche-de-Lonchat |
| Téléphone | 06 69 23 15 55 |
| Email | contact@chateaupuygrenier.fr |
| Hébergeur | Hostinger, UAB Hostinger, 61 Lordou Vironos, 6023 Larnaca, Chypre |

---

## PHASES

1. **Phase 1 (maintenant)** — Site vitrine statique. OTA gère les réservations.
2. **Phase 2** — App services clients (options, commandes)
3. **Phase 3** — App complète Next.js (réservations, paiements, dashboard admin)
4. **Phase 4** — Automatisation (n8n, agents IA)

---

## RÈGLES DE BUILD

- **Simple first** — solution la plus simple qui fonctionne
- **Pas d'over-engineering** — construire le besoin actuel, pas des besoins hypothétiques
- Pas de logique métier dans le site statique — séparation claire site / app
- URLs relatives uniquement — jamais `https://karokeys.fr/…`, toujours `/assets/…`
- Code lisible, nommage explicite, pas d'abstraction inutile
- `main` = branche production. Commits clairs après chaque feature complète.

---

## DÉPLOIEMENT

```
1. Tester avec Live Server (local)
2. git push (branche main)
3. Déployer sur karokeys.fr (test)
4. Vérifier tout
5. Basculer sur chateaupuygrenier.fr
```

Vérifier la config Nginx avant tout restart. PM2 pour les process Node (Phase 3+).

---

## ROADMAP PHASE 1

- [x] `destination.html` — distances réelles depuis coord. GPS (44.9492, 0.0423), carte OSM
- [x] `mentions-legales.html` + `politique-confidentialite.html`
- [x] `contact.html` — formulaire FormSubmit + FAQ 9 questions
- [x] Système i18n FR/EN — `translations.js` + attributs `data-i18n` sur 7 pages
- [x] Favicon SVG monogramme "P"
- [x] `robots.txt` + `sitemap.xml` créés
- [x] Déploiement VPS — `git pull origin main` depuis `/var/www/puygrenier`
- [x] Google Tag Manager (GTM-TTZZLQVM) — toutes les pages
- [x] Liens Lodgify — boutons Réserver connectés
- [x] SEO : Schema.org JSON-LD (`BedAndBreakfast`), Open Graph, Twitter Card, canonical tags
- [ ] **Photos manquantes** — 6 fichiers absents à corriger/fournir (voir tableau ci-dessus)
- [ ] Optimisation images (AVIF/WebP conversion) — à faire après finalisation photos
- [ ] Soumission Google Search Console + sitemap
- [ ] Tests finaux et déploiement prod (`chateaupuygrenier.fr`)

## SEO — ÉTAT

- [x] `sitemap.xml` créé à la racine
- [x] `robots.txt` créé — `Allow: /` + lien sitemap
- [x] Schema.org `BedAndBreakfast` JSON-LD dans `index.html`
- [x] Open Graph + Twitter Card sur toutes les pages
- [x] Balises canonical sur toutes les pages
- [x] Adresse complète dans footer et contact
- [ ] Soumettre à Google Search Console sur `chateaupuygrenier.fr` (après lancement)

---

*Design → `DESIGN_SYSTEM.md` | Hébergements & expériences → `UNITS.md`*
