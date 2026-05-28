import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      name: "Mango",
      url: "./images/mango.jpg",
      price: 1.5,
      id: 66555665,
    },
    {
      name: "Watermelon",
      url: "./images/watermelon.jpg",
      price: 7,
      id: 555445665,
    },
  ],
};

export const fruits = createSlice({
  name: "fruits",
  initialState,
  reducers: {},
  // Cas de reducers qui correspond à une action qui n'existe pas dans le slice.
  // Une action qui va modifier un bout de state auquel il n'est pas lié. Exemple : 'RESET'
  // Permet de réagir à un changement de state auquel ce reducer (initialState avec Mango et WaterMelon) n'est pas lié.
  extraReducers: {
    ["fruitsCart/add"]: (state, action) => {
      console.log("extraReducers", action);
    },
  },
});

export default fruits.reducer;
