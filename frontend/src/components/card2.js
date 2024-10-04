import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
const FoodCard = ({ foodItems }) => {  
  // Check if the image exists, otherwise use a placeholder
  const imageUrl = foodItems.images && foodItems.images.length > 0 
    ? foodItems.images[0].url 
    : 'https://via.placeholder.com/150'; 

  return (
    <div className="food-card">
      <div className="food-image">
       <Link to={`/fooditems/${foodItems._id}`}>
        <img src={imageUrl} alt={foodItems.name || 'Food Item'} />
        </Link>
      </div>
      <div className="food-details">
        <h4>{foodItems.name}</h4>
        <p>{foodItems.description}</p>
        <div className="rating-time">
          <span className="rating">⭐ {foodItems.ratings}</span>
          <span className="time">• {foodItems.numOfReviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
