import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: [], // =>  {id, product,quantity}
  },
  reducers: {
    showMiniCart: (state) => {
      state.showMiniCart = true;
    },
    hideMiniCart: (state) => {
      state.showMiniCart = false;
    },
    addToCart: (state, action) => {
      // newItem = {id, product,quantity}
      const newItem = action.payload;
      // check id is available in the cart
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        // increase quantity
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        // add new item to cart
        state.cartItems.push(newItem);
      }
    },
    setQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      // check id is available in the cart
      const index = state.cartItems.findIndex((x) => x.id === productId);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== productId
      );
    },
  },
});
const { reducer, actions } = cartSlice;

export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions;
export default reducer;
