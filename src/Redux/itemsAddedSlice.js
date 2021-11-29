import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsAdded: 0,
};

export const itemsSlice = createSlice({

    name: "itemsAdded",
    initialState,
    reducers: {
        itemsAddedCounter: (state, action) => {
            state.itemsAdded += 1;
            const item = [{product: action.payload.name, quantity: action.payload.id, price: action.payload.price}];
        },
        updateCart: (state, action) => {
            state.cart[action.payload.index].id = action.payload.quantity
        },
    },
});

export const { itemsAddedCounter, updateCart } = itemsSlice.actions;

export default itemsSlice.reducer;