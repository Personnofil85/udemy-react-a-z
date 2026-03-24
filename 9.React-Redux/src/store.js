import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter";
import fruits from "./features/fruits.js";
import fruitsCACA from "./features/fruitsCart.js";

export const store = configureStore({
  reducer: {
    counter,
    fruits,
    fruitCart: fruitsCACA,
  },
});
