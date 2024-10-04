// PaymentForm.js
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useNavigate} from 'react-router-dom';
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Payment Method Created:', paymentMethod);
      // Handle the payment and server-side operations here
    }
  };
 const navigate = useNavigate();
  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h2>Pay with card</h2>
      <input type="email" placeholder="Email" className="input-field" required />

      <label>Card information</label>
      <CardElement className="card-element" />

      <input type="text" placeholder="Name on card" className="input-field" required />

      <select className="input-field" required>
        <option value="" disabled selected>
          Country or region
        </option>
        {/* Add options for countries */}
        <option value="US">United States</option>
        <option value="IN">India</option>
        {/* Add more countries as needed */}
      </select>

      <div className="save-info">
        <input type="checkbox" id="save-info" />
        <label htmlFor="save-info">Securely save my information for 1-click checkout</label>
      </div>

      <button  onClick={() => navigate('/order')} type="submit" className="pay-button" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default PaymentForm;
