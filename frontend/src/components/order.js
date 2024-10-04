// OrderConfirmation.js
import React from 'react';
import './OrderConfirmation.css'; // Import the CSS file
import { useNavigate} from 'react-router-dom';
const OrderConfirmation = () => {
    const navigate = useNavigate();
    return (
        <div className="order-confirmation">
            <div className="confirmation-content">
                <div className="checkmark-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="checkmark-icon"
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>
                <h1>Your Order has been placed successfully.</h1>
                {/* <a href="/orders" className="go-to-order">Go to Orders</a> */}
                <button className="go-to-order"  onClick={() => navigate('/browse')} type="submit">
        Go to Shoping
      </button>
            </div>
        </div>
    );
};

export default OrderConfirmation;
