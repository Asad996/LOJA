import { configureStore } from "@reduxjs/toolkit";
import  CartSLice  from "../features/CartSlice";

export const store = configureStore({
  reducer: {

    cartslice :  CartSLice,  
  },
});