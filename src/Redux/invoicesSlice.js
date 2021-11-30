import { createSlice } from "@reduxjs/toolkit";
//import { getProducts } from "./productsThunks";
import Axios from "axios";

const initialState = {
    invoices: [],
    newInvoice: [],
    isLoading: true,
    hasError: false,
};

export const invoicesSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        AddInvoice: (state, action) => {
            Axios.post(
                'http://localhost:5000/api/invoices', 
                {
                    name: action.payload.name, 
                    price: Number(action.payload.price) 
                }
            );
            state.newProduct = {name: action.payload.name, price: Number(action.payload.price) };
            state.products = [...state.products, state.newProduct];
        }
    },
    /* extraReducers: (builder) =>
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
      }) */
});

export const { AddInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;