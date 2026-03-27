import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

export const fruitsCart = createSlice({
  name: "fruitsCart",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log("add action", action);

      const fruitIndex = state.cart.findIndex(
        (obj) => obj.id === action.payload.id,
      );

      if (fruitIndex !== -1) {
        state.cart[fruitIndex].quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      console.log("remove action", action);

      const fruit = state.cart.find((obj) => obj.id === action.payload.id);

      if (fruit) {
        // Si je remove unn fruit qui existe déjà et qui n'a que 1 de quantité, ça veut dire l'enlever complètement du panier, du tableau.
        if (fruit.quantity === 1) {
          // Dès lors on utilise filter qui va retourner un nouveau tableau/objet et enlever le fruit qu'on ne veut pas.
          state.cart = state.cart.filter((obj) => obj.id !== action.payload.id);
        } else {
          fruit.quantity--;
        }
      }
    },
  },
});

export const { add, remove } = fruitsCart.actions;
export default fruitsCart.reducer;
