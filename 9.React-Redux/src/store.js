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
  // Middlewares = mécanisme qui permet d'intercepter les actions et qui va permettre d'effectuer certaines actions secondaires.
  // Attention next() va vraiment bloquer les autres actions et effectuer l'action du middleware.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware),
});

function customMiddleware(store) {
  return function (next) {
    return function (action) {
      // console.log("Middleware", store.getState());
      // console.log("Middleware", store.dispatch());
      // retourne l'action vers le store. Sinon le middleware stoppe l'action.
      next({
        type: "fruitsCart/add",
        payload: {
          name: "Mango",
          url: "/images/mango.jpg",
          price: 999,
          id: 66555665,
        },
      });
    };
  };
}
