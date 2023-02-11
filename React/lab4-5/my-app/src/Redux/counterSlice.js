import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { counter: 0 },
    reducers: {
        incCounter: (state) => {
            ++state.counter;
        },
        decCounter: (state) => {
            --state.counter;
        },
    },
});

export const { incCounter, decCounter } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
