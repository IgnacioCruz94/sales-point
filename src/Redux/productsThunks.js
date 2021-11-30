import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getProducts = createAsyncThunk("products/fetchProductsState", async () => {
  const resp = await Axios.get(
    `http://localhost:5000/api/products`
  ).then((resp) => (
    resp.data.ProductsList
    ));
  return resp;
});
