import React from 'react';
import { StripeContext } from './StripeContext';
import PaymentForm from './paymentform.js';
import './payment.css';
import { useLocation } from 'react-router-dom';


const PaymentPage = () => {
  // Use the useLocation hook to access state passed from Cart.js
  const location = useLocation();
  const subtotal = location.state?.subtotal || 0;
   // Fallback to 0 if subtotal is not provided
   
   
  
  return (
    <div className="payment-container">
      <div className="payment-details">
        <h2>Order Summary</h2>
        <p>Subtotal:  ₹{subtotal}</p>
        <p>Shipping: ₹55.00</p>
        <p><strong>Total: ₹{(parseFloat(subtotal) + 55).toFixed(2)}</strong></p>
      </div>

      <div >
        <StripeContext>
          <PaymentForm />
        </StripeContext>
      </div>
    </div>
  );
};

export default PaymentPage;
