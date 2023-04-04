import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlices";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
