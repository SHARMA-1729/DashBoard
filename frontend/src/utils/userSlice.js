// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // user: null,
    user: JSON.parse(localStorage.getItem('user')) || null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.data;
            localStorage.setItem('user', JSON.stringify(action.payload.data));
        },
        clearUser: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
