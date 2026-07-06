# Paiement carte — API Stripe

Petite fonction serverless (déployée sur Vercel) qui crée une session de paiement
Stripe Checkout pour le panier de `carte.html`. Le site principal reste sur
Hostinger — seule cette API est sur Vercel.

## Déploiement sur Vercel

1. Aller sur https://vercel.com et se connecter avec le compte GitHub qui a accès à ce repo.
2. « Add New… » → « Project » → importer le repo `Karokeys-site`.
3. Dans les réglages du projet avant de déployer :
   - **Root Directory** → `stripe-checkout`
   - **Framework Preset** → `Other`
4. Dans « Environment Variables », ajouter :
   - `STRIPE_SECRET_KEY` = la clé secrète Stripe (Dashboard Stripe → Developers → API keys).
     Commencer avec la clé **test** (`sk_test_...`) tant que le paiement n'est pas vérifié.
5. Déployer. Vercel donne une URL du type `https://xxxx.vercel.app`.
6. Copier cette URL et mettre à jour la constante `CHECKOUT_API_URL` en haut du
   script panier dans `carte.html` (recherche `CHECKOUT_API_URL`).
7. Commit + push + `git pull` sur le VPS Hostinger pour publier le changement de `carte.html`.

## Côté Stripe

- Pour recevoir un e-mail sur rcexclusif@gmail.com à chaque paiement réussi :
  Dashboard Stripe → Réglages → Notifications → activer les e-mails de paiement
  réussi pour l'adresse du compte.
- Le client reçoit son reçu automatiquement s'il renseigne son e-mail sur la
  page Stripe Checkout (Réglages → Emails clients → activer les reçus de paiement).
- Tester d'abord en mode **test** avec la carte `4242 4242 4242 4242`, n'importe
  quelle date future, n'importe quel CVC.
- Une fois les tests validés, remplacer `STRIPE_SECRET_KEY` par la clé **live**
  (`sk_live_...`) dans les variables d'environnement Vercel, puis redéployer.

## Sécurité

Les prix ne sont jamais envoyés par le navigateur : `catalog.js` est la seule
source de vérité côté serveur. Le front n'envoie que l'identifiant de l'article
et la quantité — toute tentative de modifier un prix depuis la console du
navigateur est ignorée.

Si la carte des boissons change, mettre à jour `catalog.js` **et** les
`data-cart-id` / `data-name` / `data-price` correspondants dans `carte.html`.
