// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";
import products from "../products/products";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      const product = products.find((p) => p.id === id);

      if (!product) {
        return;
      }

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }

      // Update total quantity and total price
      state.totalQuantity += 1;
      state.totalPrice += parseFloat(product.price.replace("Rs ", "")); // Assuming product price is in INR

      // Check if MRP is below 1000, apply GST tax
      const mrp = parseFloat(product.price.replace("Rs ", ""));
      if (mrp < 1000) {
        const gstTax = (mrp * 2.5) / 100;
        state.totalPrice += gstTax;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const removedItem = state.cartItems.find((item) => item.id === id);
      if (removedItem) {
        state.totalQuantity -= removedItem.quantity;
        state.totalPrice -= removedItem.price * removedItem.quantity;
      }

      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += parseFloat(item.price.replace("Rs ", ""));
      }
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= parseFloat(item.price.replace("Rs ", ""));
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
