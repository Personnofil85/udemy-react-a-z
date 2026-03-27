import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter";
import fruits from "./features/fruits.js";
import fruitsCACA from "./features/fruitsCart.js";
// Logger permet d'afficher des logs dans la console pour voir les actions et les states du store étape par étape.
// Très utile pour décortiquer le fonctionnement du store avec des middlewares.
import logger from "redux-logger";
// Le thunk de middleware permet d'exécuter des fonctions quand on les passe à des actions.
import users from "./features/users.js";

export const store = configureStore({
  reducer: {
    counter,
    fruits,
    fruitCart: fruitsCACA,
    users,
  },
  // Middlewares = mécanisme qui permet d'intercepter les actions et qui va permettre d'effectuer certaines actions secondaires.
  // Attention next() va vraiment bloquer les autres actions et effectuer l'action du middleware.
  middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(customMiddleware),
    getDefaultMiddleware().concat(logger),
});

// function customMiddleware(store) {
//   return function (next) {
//     return function (action) {
//       // console.log("Middleware", store.getState());
//       // console.log("Middleware", store.dispatch());
//       // retourne l'action vers le store. Sinon le middleware stoppe l'action.
//       next({
//         type: "fruitsCart/add",
//         payload: {
//           name: "Mango",
//           url: "/images/mango.jpg",
//           price: 999,
//           id: 66555665,
//         },
//       });
//     };
//   };
// }
