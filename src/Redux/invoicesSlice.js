import { createSlice } from "@reduxjs/toolkit";
import { getInvoices } from "./invoicesThunks";
import Axios from "axios";

const initialState = {
    invoices: []
};

export const invoicesSlice = createSlice({
    name: "Invoices",
    initialState,
    reducers: {
        AddInvoice: (state, action) => {
            Axios.post(
                'http://localhost:5000/api/invoices', 
                {
                    products: [action.payload],
                    status: true
                    
                }
            );
            state.invoices = [action.payload];
        }
    },
    extraReducers: (builder) =>
    builder
      .addCase(getInvoices.fulfilled, (state, action) => {
          state.invoices = [...state.invoices, action.payload];
      })

});

export const { AddInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;