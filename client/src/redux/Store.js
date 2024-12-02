import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoApi } from "./createAPI";
import todosReducer from './TodoSlice';
import categoriesReducer from "./admin/CategorySlice";
import authReducer from "./slice/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const authPersistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    categories: categoriesReducer,
    todos: todosReducer,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(todoApi.middleware),

});
setupListeners(store.dispatch);

export const persistor = persistStore(store);
export default store;
