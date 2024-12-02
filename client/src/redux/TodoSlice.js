import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [

      ]
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodo: (state, action) => {
      state.value = action.payload; //[{}]
    },
    error: (state, action) => {
      state.value = (action.payload);
    },
    addTodo: (state, action) => {
      state.value.push({ name: action.payload, id: state.value.length + 1 });
    },
    deleteTodo: (state) => {
      return []; 
    }
  }
});

export const { addTodo, deleteTodo, loadTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
