import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  loading: false,
  error: null,
};

const CategorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.value.push(action.payload); 
    },
    deleteCategory: (state, action) => {
      state.value = state.value.filter(category => category.id !== action.payload); 
    },
    loadCategories: (state, action) => {
      state.value = action.payload; // Lưu danh mục vào state
    },
    setLoading: (state, action) => {
      state.loading = action.payload; // Cập nhật trạng thái loading
    },
    setError: (state, action) => {
      state.error = action.payload; // Cập nhật lỗi
    }
  },
});

export const { addCategory, deleteCategory, loadCategories, setLoading, setError } = CategorySlice.actions;
export default CategorySlice.reducer;