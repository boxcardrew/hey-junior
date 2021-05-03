
import Stripe from 'stripe';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27'
})

const calculateOrderAmount = async priceId => {
  const price = await stripe.prices.retrieve(priceId);
  return price.unit_amount;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { priceId } = req.body;
    const { email } = req.body;
    const { metadata } = req.body;
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: await calculateOrderAmount(priceId),
        currency: "usd",
        receipt_email: email,
        metadata: metadata
      });

      res.status(200).json(paymentIntent)
      

    } catch (err) {
      res.status(500).json({ stausCode: 500, message: err.message })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}