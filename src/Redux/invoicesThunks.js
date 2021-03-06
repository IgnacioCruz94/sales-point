import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getInvoices = createAsyncThunk("invoices/fetchProductsState", async () => {
  const resp = await Axios.get(
    `http://localhost:5000/api/invoices`
  ).then((resp) => (
    
    resp.data
    ));
  
  return resp;
});