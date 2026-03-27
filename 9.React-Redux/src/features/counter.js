import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      console.log(action);
      // state.value += state.value + action.payload;
      state.value++;
    },
    decrement: (state, action) => {
      console.log(action);

      state.value = state.value - action.payload;
    },
    multiply: (state, action) => {
      console.log(action);

      state.value *= 10;
    },
    divide: (state, action) => {
      console.log(action);

      state.value /= 10;
    },
  },
});

export const { increment, decrement, multiply, divide } = counter.actions;
export default counter.reducer;
