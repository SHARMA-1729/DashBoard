import {configureStore} from "@reduxjs/toolkit";
import userReducer from './userSlice';
import fooditemReducer from './fooditemSlice';

const  appStore=configureStore({
    reducer:{
        user: userReducer,
        food: fooditemReducer,
       
        
    }
})
 

export default appStore
