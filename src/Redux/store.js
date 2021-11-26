import { configureStore } from "@reduxjs/toolkit";
import  itemsSlice  from "./itemsAddedSlice";

export default configureStore({
  reducer: {
    itemCounter: itemsSlice,
  },
});