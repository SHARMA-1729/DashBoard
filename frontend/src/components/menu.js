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
//         const response = await fetch('http://localhost:4000/api/v1/foods/fooditems');
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



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// // import MenuCard from './card3.js'; 
// // import FoodCard from './card2';
// // import './Browse.css';
// // import Header from './header1';

// const RestaurantMenu = () => {
//   const { id } = useParams(); // Get the restaurant ID from the URL
//   console.log(id);
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         const response = await axios.get(`http://localhost:4000/api/v1/menu/menuitems/${id}`);
//         console.log(response)
//         setMenuItems(response.data.data.menu);
//         console.log("saurav")
        
       
        
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching the menu:', error);
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="menu-page">
//       <h1>Menu</h1>
    
//       <div className="menu-items">
//         {menuItems.map((item) => (
//           <div className="menu-item" key={item._id}>
//             <img src={item.image} alt={item.name} />
//             <h2>{item.category}</h2>
//             <p>hello</p>
//             {/* <MenuCard  Item={item.items}/> */}
//             <span>₹</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const RestaurantMenu = () => {
//   const { id } = useParams(); // Get the restaurant ID from the URL
//   const [menuItems, setMenuItems] = useState([]);
//   const [foodItemsData, setFoodItemsData] = useState({}); // Object to store food items data by ID
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         console.log('Fetching menu for restaurant ID:', id); // Debugging log

//         // Fetch the menu using restaurant ID
//         const response = await axios.get(`http://localhost:4000/api/v1/menu/menuitems/${id}`);
//         const menuData = response.data.data.menu;
//         console.log('Menu data fetched:', menuData); // Debugging log

//         setMenuItems(menuData);

//         // Collect all unique food item IDs
//         const allFoodItemIds = menuData.flatMap(menuItem => menuItem.items);
//         console.log('All food item IDs:', allFoodItemIds); // Debugging log

//         // Fetch details for each food item ID
//         const fetchFoodItemDetails = async (foodItemId) => {
//           try {
//             console.log(`Fetching details for food item ID: ${foodItemId}`); // Debugging log
//             const itemResponse = await axios.get(`http://localhost:4000/api/v1/foods/fooditems/${foodItemId}`);
//             console.log(`Details fetched for food item ID: ${foodItemId}`, itemResponse.data.data); // Debugging log
//             return { id: foodItemId, data: itemResponse.data.data }; // Return item data with its ID
//           } catch (error) {
//             console.error(`Error fetching item ${foodItemId} details:`, error);
//             return null;
//           }
//         };

//         // Fetch all food items in parallel
//         const foodItemsData = await Promise.all(allFoodItemIds.map(fetchFoodItemDetails));
//         console.log('All fetched food item details:', foodItemsData); // Debugging log

//         // Create an object to store fetched data by food item ID
//         const foodItemsDataById = foodItemsData.reduce((acc, item) => {
//           if (item) {
//             acc[item.id] = item.data;
//           }
//           return acc;
//         }, {});
        
//         console.log('Food items data by ID:', foodItemsDataById); // Debugging log

//         setFoodItemsData(foodItemsDataById); // Update state with fetched data
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching the menu:', error);
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="menu-page">
//       <h1>Menu</h1>
//       <div className="menu-items">
//         {menuItems.map((menuItem) => (
//           <div className="menu-category" key={menuItem._id.$oid}>
//             <h2>{menuItem.category}</h2>
//             {menuItem.items.map((itemId) => {
//               const foodItem = foodItemsData[itemId]; // Retrieve food item data by ID
//               return foodItem ? (
//                 <div className="menu-item" key={itemId}>
//                   <img src={foodItem.images[0]?.url || 'https://via.placeholder.com/150'} alt={foodItem.name} />
//                   <h3>{foodItem.name}</h3>
//                   <p>Price: ₹{foodItem.price}</p>
//                   <p>{foodItem.description}</p>
//                 </div>
//               ) : (
//                 <p key={itemId}>Loading item data...</p> // Placeholder while fetching data
//               );
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;








// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import FoodItem from './card3.js'

// const RestaurantMenu = () => {
//   const { id } = useParams(); // Get the restaurant ID from the URL
//   const [menuItems, setMenuItems] = useState([]);
//   const [foodItemsData, setFoodItemsData] = useState({}); // Object to store food items data by ID
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       try {
//         console.log('Fetching menu for restaurant ID:', id);

//         // Fetch the menu using restaurant ID
//         const response = await axios.get(`http://localhost:4000/api/v1/menu/menuitems/${id}`);
//         const menuData = response.data.data.menu;
//         console.log('Menu data fetched:', menuData);

//         setMenuItems(menuData);

//         // Collect all unique food item IDs
//         const allFoodItemIds = menuData.flatMap(menuItem => menuItem.items || []);
//         console.log('All food item IDs:', allFoodItemIds);

//         if (allFoodItemIds.length === 0) {
//           console.warn('No items found for this menu.');
//           setLoading(false);
//           return;
//         }

//         // Fetch details for each food item ID
//         const fetchFoodItemDetails = async (foodItemId) => {
//           try {
//             console.log(`Fetching details for food item ID: ${foodItemId}`);
//             const itemResponse = await axios.get(`http://localhost:4000/api/v1/foods/fooditems/${foodItemId}`);
//             console.log(`Details fetched for food item ID: ${foodItemId}`, itemResponse.data.data);
//             return { id: foodItemId, data: itemResponse.data.data }; // Return item data with its ID
//           } catch (error) {
//             console.error(`Error fetching item ${foodItemId} details:`, error);
//             return null;
//           }
//         };

//         // Fetch all food items in parallel
//         const foodItemsData = await Promise.all(allFoodItemIds.map(fetchFoodItemDetails));
//         console.log('All fetched food item details:', foodItemsData);

//         // Create an object to store fetched data by food item ID
//         const foodItemsDataById = foodItemsData.reduce((acc, item) => {
//           if (item) {
//             acc[item.id] = item.data;
//           }
//           return acc;
//         }, {});
        
//         console.log('Food items data by ID:', foodItemsDataById);

//         setFoodItemsData(foodItemsDataById);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching the menu:', error);
//         setLoading(false);
//       }
//     };

//     fetchMenu();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="menu-page">
//       <h1>Menu</h1>
//       <div className="menu-items">
//         {menuItems.map((menuItem) => (
//           <div className="menu-category" key={menuItem._id}>
//             <h2>{menuItem.category}</h2>
//             {menuItem.items && menuItem.items.length > 0 ? (
//               menuItem.items.map((itemId) => {
//                 const foodItem = foodItemsData[itemId];
//                 return foodItem ? (
//                   // <div className="menu-item" key={itemId}>
//                   //   <img src={foodItem.images[0]?.url || 'https://via.placeholder.com/150'} alt={foodItem.name} />
//                   //   <h3>{foodItem.name}</h3>
//                   //   <p>Price: ₹{foodItem.price}</p>
//                   //   <p>{foodItem.description}</p>
//                   // </div>
//                   <FoodItem key={itemId} foodItem={foodItem} />
//                 ) : (
//                   <p key={itemId}>Loading item data...</p>
//                 );
//               })
//             ) : (
//               <p>No items available in this category.</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RestaurantMenu;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FoodCard from './card3.js'; 
// Ensure the correct component name
import './menu.css';
import Header from './header1';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [foodItemsData, setFoodItemsData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/v1/menu/menuitems/${id}`);
        const menuData = response.data.data.menu;
        setMenuItems(menuData);

        const allFoodItemIds = menuData.flatMap((menuItem) => menuItem.items || []);
        if (allFoodItemIds.length === 0) {
          setLoading(false);
          return;
        }

        const fetchFoodItemDetails = async (foodItemId) => {
          try {
            const itemResponse = await axios.get(`http://localhost:4000/api/v1/foods/fooditems/${foodItemId}`);
            return { id: foodItemId, data: itemResponse.data.data };
          } catch (error) {
            console.error(`Error fetching item ${foodItemId} details:`, error);
            return null;
          }
        };

        const foodItemsData = await Promise.all(allFoodItemIds.map(fetchFoodItemDetails));
        const foodItemsDataById = foodItemsData.reduce((acc, item) => {
          if (item) {
            acc[item.id] = item.data;
          }
          return acc;
        }, {});

        setFoodItemsData(foodItemsDataById);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the menu:', error);
        setLoading(false);
      }
    };

    fetchMenu();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header/>
   
    <div className="menu-page">
      <div className="menu-items">
        {menuItems.map((menuItem) => (
           <div className="cat">
           <h2>{menuItem.category}</h2>
           <hr/>
          
          <div className="food-items-container" key={menuItem._id}>
            {menuItem.items && menuItem.items.length > 0 ? (
              menuItem.items.map((itemId) => {
                const foodItem = foodItemsData[itemId];
                return foodItem ? (
                  <div >
                  <FoodCard key={itemId} foodItem={foodItem} />
                  </div>
                ) : (
                  <p key={itemId}>Loading item data...</p>
                );
              })
            ) : (
              <p>No items available in this category.</p>
            )}
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default RestaurantMenu;
