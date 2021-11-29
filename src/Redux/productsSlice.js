import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productsThunks";
import Axios from "axios";

const initialState = {
    products: [],
    newProduct: [],
    isLoading: true,
    hasError: false,
};

export const productsSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        AddProduct: (state, action) => {
            Axios.post(
                'http://localhost:5000/api/products', 
                {
                    name: action.payload.name, 
                    price: Number(action.payload.price) 
                }
            );
            state.newProduct = {name: action.payload.name, price: Number(action.payload.price) };
            state.products = [...state.products, state.newProduct];
        }
    },
    extraReducers: (builder) =>
    builder
      .addCase(getProducts.pending, (state) => {
          state.isLoading = true;
          state.hasError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
          state.products = [...state.products, ...action.payload];
          state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
          state.isLoading = false;
          state.hasError = true;
      })
});

export const { AddProduct } = productsSlice.actions;

export default productsSlice.reducer;