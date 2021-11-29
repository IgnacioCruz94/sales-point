import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getProducts = createAsyncThunk("products/fetchProductsState", async () => {
  const resp = await Axios.get(
    `http://localhost:5000/api/products`
  ).then((resp) => (
    resp.data.ProductsList
    ));
  // The value we return becomes the `fulfilled` action payload
  return resp;
});

/* export const addProduct = createAsyncThunk("products/fetchProductsState", async (payload) => {
  await Axios.post(
    `http://localhost:5000/api/products`,
    payload
  ).then((resp) => (
    resp.data.ProductsList
    ));
  // The value we return becomes the `fulfilled` action payload
  //return resp;
}); */