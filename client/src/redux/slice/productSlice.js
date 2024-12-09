import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Thunk để lấy danh sách sản phẩm từ API
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async () => {
      const { data } = await axios.get("http://localhost:3000/v1/api/user/products");
      return data; // Trả về dữ liệu từ API
    }
  );  

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: "idle", 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload; 
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
