import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import productReducer from "./reducers/productSlice";
import cartReducer from "./reducers/cartSlice";
import searchReducer from "./reducers/searchSlice";
import authReducer from "./reducers/authSlice";

const persistConfig = {
  key: "root", 
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    products: productReducer,
    cart: cartReducer,
    search: searchReducer,
    auth: authReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
