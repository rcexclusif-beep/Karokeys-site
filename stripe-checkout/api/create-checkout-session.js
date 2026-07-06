const Stripe = require('stripe');
const catalog = require('../catalog');

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const SITE_URL = 'https://www.chateaupuygrenier.fr';
const ALLOWED_ORIGINS = new Set([
  'https://www.chateaupuygrenier.fr',
  'https://chateaupuygrenier.fr',
]);

module.exports = async (req, res) => {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.has(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Méthode non autorisée' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const items = Array.isArray(body && body.items) ? body.items : [];

    if (items.length === 0) {
      res.status(400).json({ error: 'Panier vide' });
      return;
    }

    const line_items = [];
    for (const entry of items) {
      const product = catalog[entry && entry.id];
      if (!product) {
        res.status(400).json({ error: 'Article inconnu : ' + (entry && entry.id) });
        return;
      }
      const qty = Math.max(1, Math.min(50, parseInt(entry.qty, 10) || 1));
      line_items.push({
        price_data: {
          currency: 'eur',
          product_data: { name: product.name },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: qty,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      success_url: SITE_URL + '/merci-commande.html?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: SITE_URL + '/carte.html',
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur lors de la création du paiement' });
  }
};
