import Head from 'next/head';

import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PostLayout = ({ children }) => {
  return (
    <>
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  )
}

export default PostLayout;