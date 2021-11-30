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
        cleanCounter:
        (state) => {
            state.itemsAdded = 0;
            
        }
    },
});

export const { itemsAddedCounter, cleanCounter } = itemsSlice.actions;

export default itemsSlice.reducer;