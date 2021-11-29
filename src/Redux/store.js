import { configureStore } from "@reduxjs/toolkit";
import cartProductsSlice from "./cartProductsSlice";
import  itemsSlice  from "./itemsAddedSlice";
import productsSlice from "./productsSlice";

export default configureStore({
  reducer: {
    itemCounter: itemsSlice,
    products: productsSlice,
    cart: cartProductsSlice,
  },
});