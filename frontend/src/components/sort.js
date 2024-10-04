import React from 'react';
import './sort.css'
const Sort = ({ sortVeg, sortByReviews, sortByRatings, restaurantCount }) => {
  return (
    <div className='box'>
      <div id="restaurant-count">{restaurantCount} restaurants</div>
      <div id="sort-options">
        <button onClick={sortVeg} className='linkButton'>Pure Veg</button>
        <button onClick={sortByReviews} className='linkButton'>Sort By Reviews</button>
        <button onClick={sortByRatings} className='linkButton'>Sort By Ratings</button>
      </div>
    </div>
  );
};

export default Sort;
