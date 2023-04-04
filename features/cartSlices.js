import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItem: [],
  cartItemCount: 1,
  cartTotalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItem.find((p) => p.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.attributes.price = item.oneQuantityPrice * item.quantity;
        toast.success(" Item increased by 1");
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });

        toast.success(`Added to Cart`);
      }
    },
    updateCart: (state, action) => {
      state.cartItem = state.cartItem.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.attributes.price = p.oneQuantityPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter((p) => p.id !== action.payload.id);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
