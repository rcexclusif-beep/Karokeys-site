# PROJET — Château Puygrenier

Référence technique, infrastructure et règles de build.

---

## ÉTAT ACTUEL — Mars 2026

**Phase 1 — Site vitrine statique** — en cours

| Page | État |
|------|------|
| `index.html` | ✅ Complet — hero carousel, hébergements, expériences, destination, contact |
| `hebergements.html` | ✅ Complet — 7 unités, galeries, lightbox |
| `experiences.html` | ✅ Complet — 7 expériences, galeries, lightbox |
| `destination.html` | 🔲 Fichier vide — à construire |

**Stack** : HTML / CSS / JavaScript — aucun framework  
**JS** : `script.js` — menu burger + hero carousel + lightbox (guards sur pages sans carousel)  
**CSS** : `style.css` — fichier unique, ~1300 lignes, sections séparées par `/* ═══ */`

---

## INFRASTRUCTURE

| Élément | Valeur |
|---------|--------|
| VPS | Hostinger — IP `82.25.112.137` |
| OS | Ubuntu |
| Serveur web | Nginx |
| Runtime | Node.js + PM2 (installés, Phase 3+) |
| BDD | PostgreSQL (installé, Phase 3+) |
| Dossier site | `/var/www/puygrenier` |
| Dev | `karokeys.fr` |
| Production | `chateaupuygrenier.fr` (lancement mai 2026) |
| DNS | A records uniquement — pas d'AAAA (IPv6 désactivé) |

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

- [ ] `destination.html` — page à construire (photos : Ext Parc, Ext Pré, Ext Arrière, Ext Facade)
- [ ] Mentions légales + Politique de confidentialité
- [ ] Optimisation images (AVIF/WebP conversion)
- [ ] Tests finaux et déploiement prod (mai 2026)

---

*Design → `DESIGN_SYSTEM.md` | Hébergements & expériences → `UNITS.md`*
