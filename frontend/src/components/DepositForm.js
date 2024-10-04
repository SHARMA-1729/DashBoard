import React, { useState } from 'react';
import './DepositForm.css';

export default function DepositForm() {
  const [amount, setAmount] = useState(1000);  // Default value $1000
  const fee = 20;
  const taxRate = 0.0036;  // 0.36% tax

  const calculateCharges = (amount) => {
    const tax = (amount * taxRate).toFixed(2);
    const totalCharges = (parseFloat(tax) + fee).toFixed(2);
    const totalAmount = (amount - totalCharges).toFixed(2);
    return { tax, totalCharges, totalAmount };
  };

  const handleAmountChange = (value) => {
    setAmount(parseFloat(amount) + value);
  };

  const { tax, totalCharges, totalAmount } = calculateCharges(amount);

  return (
    <div className="deposit-container">
      <div className="deposit-box">
        <div className="tabs">
          <button className="active-tab">DEPOSIT</button>
          <button>WITHDRAW</button>
        </div>

        <div className="form">
          <label htmlFor="depositAmount">Enter Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            id="depositAmount"
          />

          <div className="quick-add-buttons">
            <button onClick={() => handleAmountChange(1000)}>+ $1,000</button>
            <button onClick={() => handleAmountChange(5000)}>+ $5,000</button>
          </div>

          <div className="charges">
            <div className="charge-item">
              <span>Charges</span>
              <span className="charges-red">${totalCharges}</span>
            </div>
            <div className="charge-item">
              <span>Tax</span>
              <span>${tax}</span>
            </div>
            <div className="charge-item">
              <span>Fee</span>
              <span>${fee}</span>
            </div>
            <hr />
            <div className="total-amount">
              <span>Total</span>
              <span>${totalAmount}</span>
            </div>
          </div>

          <button className="deposit-button">DEPOSIT MONEY</button>
        </div>
      </div>
    </div>
  );
}
