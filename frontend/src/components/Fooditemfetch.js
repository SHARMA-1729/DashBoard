// import React, { useState, useEffect } from 'react';
// import Header from './header1';
// import FoodCard from './card2'; // Ensure that this matches the component name in the 'card2' file
// import './Browse.css'; // Ensure styles are being applied correctly

// function Menu() {  // Component name starts with an uppercase letter, as required
//   const [foodItems, setFoodItems] = useState([]);  // Correct variable naming to follow camelCase

//   // Fetch data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`http://localhost:4000/api/v1/foods/fooditems/${id}`);
//         const data = await response.json();

//         if (data.success) {
//           setFoodItems(data.data); // Store fetched data in state
//         } else {
//           console.error('Failed to fetch food items');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="food-items-container">
//         {foodItems.map((item) => (
//           <FoodCard key={item._id} foodItems={item} /> 
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Menu;