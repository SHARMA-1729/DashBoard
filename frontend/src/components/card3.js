

import React from 'react';
import './card.css';
// import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/fooditemSlice';

const FoodCard = ({ foodItem }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(foodItem)); // Dispatch addToCart action
  };
  
  const imageUrl = foodItem.images && foodItem.images.length > 0 ? foodItem.images[0].url : 'https://via.placeholder.com/150'; 

  return (
    <div className="food-card">
      <div className="food-image">
       
          <img src={imageUrl} alt={foodItem.name || 'Food Item'} />
       
      </div>
      <div className="food-details">
        <h4>{foodItem.name}</h4>
        <p>₹{foodItem.price}</p>
        <p>{foodItem.description}</p>
        <div className="rating-time">
          <span className="rating">⭐ {foodItem.ratings}</span>
          <span className="time">• {foodItem.numOfReviews} reviews</span>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
      </div>
      
    </div>
  );
};

export default FoodCard;
