import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getInvoices = createAsyncThunk("products/fetchProductsState", async () => {
  const resp = await Axios.get(
    `http://localhost:5000/api/invoices`
  ).then((resp) => (
    
    resp.data.products
    ));
  // The value we return becomes the `fulfilled` action payload
  
  return resp;
});