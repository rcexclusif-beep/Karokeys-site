# PROJET — Château Puygrenier

Référence technique, infrastructure et règles de build.

---

## ÉTAT ACTUEL — Avril 2026

**Phase 1 — Site vitrine statique** — ✅ COMPLET (prêt pour lancement mai 2026)

| Page | État |
|------|------|
| `index.html` | ✅ Complet — hero carousel, section domaine (22 pers), expériences, destination, contact |
| `hebergements.html` | ✅ Complet — 7 unités, galeries, lightbox, hero carousel 4 photos |
| `experiences.html` | ✅ Complet — 7 expériences, galeries, lightbox |
| `destination.html` | ✅ Complet — galerie domaine, Périgord, vignobles, gastronomie, carte OSM, distances réelles |
| `contact.html` | ✅ Complet — formulaire + FAQ 9 questions accordéon |
| `mentions-legales.html` | ✅ Complet — Karokeys SAS, SIRET 938959996 00019 |
| `politique-confidentialite.html` | ✅ Complet — RGPD, cookies Google Fonts, droits CNIL |

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
- [x] `contact.html` — formulaire + FAQ 9 questions
- [x] Système i18n FR/EN — `translations.js` + attributs `data-i18n` sur 7 pages
- [x] Favicon SVG monogramme "P"
- [x] `robots.txt` + `sitemap.xml` — à créer avant lancement (TODO)
- [x] Déploiement VPS — `git pull origin main` depuis `/var/www/puygrenier`
- [ ] Optimisation images (AVIF/WebP conversion)
- [ ] Soumission Google Search Console + sitemap
- [ ] Tests finaux et déploiement prod (mai 2026)

## SEO — À FAIRE AVANT LANCEMENT

1. Créer `sitemap.xml` à la racine (toutes les pages)
2. Créer `robots.txt` — `Allow: /` + pointer vers sitemap
3. Soumettre à Google Search Console sur `chateaupuygrenier.fr`
4. Ajouter schema.org `LodgingBusiness` dans les `<head>`

---

*Design → `DESIGN_SYSTEM.md` | Hébergements & expériences → `UNITS.md`*
