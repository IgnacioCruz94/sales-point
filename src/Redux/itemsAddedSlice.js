import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemsAdded: 0,
};

export const itemsSlice = createSlice({
    name: "itemsAdded",
    initialState,
    reducers: {
        itemsAddedCounter: (state) => {
            state.itemsAdded += 1;
            
        },
    },
});

export const { itemsAddedCounter } = itemsSlice.actions;

export default itemsSlice.reducer;