import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalQuantity: 0, // Quản lý tổng số lượng giỏ hàng
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCarts: (state, action) => {
      state.totalQuantity = action.payload; // Cập nhật tổng số lượng
    },
    addCartItem: (state, action) => {
      state.totalQuantity += action.payload.quantity; // Thêm số lượng khi thêm sản phẩm mới
    },
  },
});

export const { setCarts, addCartItem } = cartSlice.actions;
export default cartSlice.reducer;