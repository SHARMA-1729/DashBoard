// StripeContext.js
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your Stripe publishable key

export const StripeContext = ({ children }) => (
  <Elements stripe={stripePromise}>
    {children}
  </Elements>
);
