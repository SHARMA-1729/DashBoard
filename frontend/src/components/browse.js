




import React, { useState, useEffect } from 'react';
import Header from './header1';
import FoodCard from './card'; // Update to match the component name
import './Browse.css';
import Sort from './sort.js';

function Browse() {
  const [restaurant, setrestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/resto/restaurant');
        const data = await response.json();

        if (data.success) {
          setrestaurant(data.data); // Store fetched data
          setFilteredRestaurants(data.data); // Initialize filtered data
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Handle Sorting by Veg
  const sortVeg = () => {
    const sorted = restaurant.filter((r) => r.isVeg);
    setFilteredRestaurants(sorted);
  };

  // Handle Sorting by Reviews
  const sortByReviews = () => {
    const sorted = [...restaurant].sort((a, b) => b.numOfReviews - a.numOfReviews);
    setFilteredRestaurants(sorted);
  };

  // Handle Sorting by Ratings
  const sortByRatings = () => {
    const sorted = [...restaurant].sort((a, b) => b.ratings - a.ratings);
    setFilteredRestaurants(sorted);
  };

  return (
    <div>
      <Header />
      <Sort 
        sortVeg={sortVeg}
        sortByReviews={sortByReviews}
        sortByRatings={sortByRatings}
        restaurantCount={filteredRestaurants.length} 
      />
      <hr/>
      <div className="food-items-container">
        {filteredRestaurants.map((item) => (
          <FoodCard key={item._id} restaurant={item} /> // Pass each item as a prop
        ))}
      </div>
    </div>
  );
}

export default Browse;

