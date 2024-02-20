import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const addStore = configureStore({
   reducer:{
    cart : cartReducer
   },
})

export default addStore;