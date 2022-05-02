import { createSelector } from "@reduxjs/toolkit";

const cartItemsSelector = (state) => state.cart.cartItems; // state ~~ rootReducer
// Count number of product

// Using createSelector with 2 parameters :
// Params 1: state phu thuoc => List cart
// Params 2:functions(callback Params 1) => {}
export const cartItemsCountSelector = createSelector(
  cartItemsSelector,
  (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
);

// Total Cost
export const cartTotalSelector = createSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0)
);
