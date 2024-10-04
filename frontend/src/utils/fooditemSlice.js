

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [], // Load initial state from localStorage
};

const fooditemSlice = createSlice({
  name: 'fooditem',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.cart.push(item);
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Update localStorage
    },
    updateCartItem: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload.itemId);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state.cart)); // Update localStorage after modification
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload); 
      localStorage.setItem('cart', JSON.stringify(state.cart)); // Update localStorage after removal
    }
  },
});

export const { addToCart, updateCartItem, removeFromCart } = fooditemSlice.actions;
export default fooditemSlice.reducer;
