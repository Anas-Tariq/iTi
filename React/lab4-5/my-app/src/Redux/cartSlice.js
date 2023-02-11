import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] },
    reducers: {
        addItem: (state, action) => {
            state.cart.push(action.payload);
        },
        removeItem: (state, action) => {
            console.log("Removed");
        },
        incQuantity: (state, action) => {
            state.cart[action.payload].quantity = state.cart[action.payload].quantity + 1;
        },
        decQuantity: (state, action) => {
            state.cart[action.payload].quantity = state.cart[action.payload].quantity - 1;
        },
    },
});

export const { addItem, removeItem, incQuantity, decQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
