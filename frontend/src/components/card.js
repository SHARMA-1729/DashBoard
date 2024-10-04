// import React from 'react';
// import './card.css';
// import { Link } from 'react-router-dom';
// const FoodCard = ({ restaurant }) => {
  
//   const imageUrl = restaurant.images && restaurant.images.length > 0 ? restaurant.images[0].url : 'https://via.placeholder.com/150'; 

//   return (
//     <div className="food-card">
//       {console.log(imageUrl)}
//       <div className="food-image">
//         <Link>
//         <img
//           src={imageUrl}
//           alt={restaurant.name || 'Food Item'} 
//         />
//         </Link>
       
//       </div>
//       <div className="food-details">
//       <br/>
//         <h4>{restaurant.name}</h4>
//         <p >{restaurant.address}</p>
//         <div className="rating-time">
//           <span className="rating">⭐ {restaurant.ratings}</span>
//           <span className="time">• {restaurant.numOfReviews} reviews</span>
//         </div>
       
       
//       </div>
//     </div>
//   );
// };

// export default FoodCard;




import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const FoodCard = ({ restaurant }) => {
  
  const imageUrl = restaurant.images && restaurant.images.length > 0 ? restaurant.images[0].url : 'https://via.placeholder.com/150'; 

  return (
    <div className="food-card">
      <div className="food-image">
        <Link to={`/restaurant/${restaurant._id}/menu`}>
          <img src={imageUrl} alt={restaurant.name || 'Food Item'} />
        </Link>
      </div>
      <div className="food-details">
        <h4>{restaurant.name}</h4>
        <p>{restaurant.address}</p>
        <div className="rating-time">
          <span className="rating">⭐ {restaurant.ratings}</span>
          <span className="time">• {restaurant.numOfReviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
