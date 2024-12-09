// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.carts = action.payload;
    },
    updateCart: (state, action) => {
      const { cartId, newQuantity } = action.payload;
      const cart = state.carts.find(cart => cart.id === cartId);
      if (cart) {
        cart.quantity = newQuantity;
      }
    },
    addCartItem: (state, action) => {
      state.carts.push(action.payload);  // Thêm sản phẩm vào giỏ hàng
    },
    removeCartItem: (state, action) => {
      state.carts = state.carts.filter(cart => cart.id !== action.payload); // Xóa sản phẩm khỏi giỏ
    },
  },
});

export const { setCarts, updateCart, addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
