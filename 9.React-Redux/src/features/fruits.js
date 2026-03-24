import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      name: "Mango",
      url: "/images/mango.jpg",
      price: 1.5,
      id: 66555665,
    },
    {
      name: "Watermelon",
      url: "/images/watermelon.jpg",
      price: 7,
      id: 555445665,
    },
  ],
};

export const fruits = createSlice({
  name: "fruits",
  initialState,
});

export default fruits.reducer;
