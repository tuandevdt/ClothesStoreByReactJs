import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { todoApi } from "./createAPI";  // Import createApi
import authReducer from "./slice/authSlice";  // Chỉ cần persist auth nếu cần
import cartReducer from "./slice/cartSlice";  // Import cartReducer

// Persist config cho auth
const authPersistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,  // Dùng todoApi reducer
    auth: persistedAuthReducer,  // Persist chỉ auth
    cart: cartReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(todoApi.middleware),  // Thêm todoApi middleware
});

export const persistor = persistStore(store);
export default store;
