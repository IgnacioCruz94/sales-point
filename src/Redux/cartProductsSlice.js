import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: [],
};

export const cartProductsSlice = createSlice({
    name: "cartProducts",
    initialState,
    reducers: {
        cartProducts: (state, action) => {
            state.cartProducts = [...state.cartProducts,[action.payload]];            
        }
    },
});

export const { cartProducts } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;