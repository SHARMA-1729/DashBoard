


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import { removeFromCart } from '../utils/fooditemSlice';
import Header from './header1';
import { useNavigate} from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.food.cart); // Access cart items from Redux state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Local state to manage quantities
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item._id] = 1; // Initialize each item with a quantity of 1
      return acc;
    }, {})
  );

  // Function to handle increment and decrement of quantity
  const handleQuantityChange = (itemId, increment) => {
   
    setQuantities((prevQuantities) => {
      const newQuantities = { ...prevQuantities };
      const newQuantity = newQuantities[itemId] + (increment ? 1 : -1);

      // Update only if the new quantity is at least 1
      if (newQuantity > 0) {
        newQuantities[itemId] = newQuantity;
      }
      return newQuantities;
    });
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * quantities[item._id],
    0
  ).toFixed(2);

  return (
    <div>
      <Header/>
     
    <div className="cart-container">
      
      <h2>Shopping Cart</h2>
      <div className="cart-info">
        <span>You have {cartItems.length} items in your order.</span>
      </div>
      <hr/>
      <table className="cart-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>PRICE</th>
            <th>QTY.</th>
            <th>TOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="cart-item-details">
                  <img src={item.images[0].url} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </td>
              <td>₹{item.price.toFixed(2)}</td>
              <td>
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(item._id, false)}>-</button>
                <span>{quantities[item._id]}</span>
                <button onClick={() => handleQuantityChange(item._id, true)}>+</button>
                </div>
              </td>
              <td>₹{(item.price * quantities[item._id]).toFixed(2)}</td>
              <td>
                <button className="remove-button" onClick={() => handleRemoveItem(item._id)}>✕</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-footer">
        <button  onClick={() => navigate('/browse')}  className="continue-button">Continue Shopping</button>
        <div className="subtotal">
          <span>Subtotal - ₹{subtotal}</span>
          <button 
              className="checkout-button" 
              onClick={() => navigate('/payment', { state: { subtotal } })}
            >
              Checkout
            </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;




