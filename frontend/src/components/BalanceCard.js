import React from "react";
import './BalanceCard.css'; // Import your custom CSS file

const BalanceCard = () => {
  return (
    <div className="balance-card">
      <h2>Balance Available</h2>
      <div className="balance-amount">$17.38</div>
      <hr/>
      

      <div className="transaction-details">
        <div className="transaction-item">
          <span>Deposit</span>
          <span>$0</span>
        </div>
        <div className="transaction-item">
          <span>Earning</span>
          <span>$0.41</span>
        </div>
        <div className="transaction-item">
          <span>Withdraw</span>
          <span>-$0</span>
        </div>
      </div>
      <hr/>

      <div className="links">
        <div className="link-item">
        All transactions
        </div>
        
        <hr/>
        <div className="link-item">
        Earning Reports
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
