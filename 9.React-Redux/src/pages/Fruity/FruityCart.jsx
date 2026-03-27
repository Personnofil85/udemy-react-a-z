import React from "react";
import { useSelector } from "react-redux";

export default function FruityCart() {
  const fruityCart = useSelector((state) => state.fruitCart);
  console.log("fruityCart", fruityCart);

  return (
    <div className="bg-slate-100 rounded">
      <p className="text-2xl border-b border-slate-400 p-4">Your FruityCart</p>
      <ul>
        {fruityCart.cart.length > 0 &&
          fruityCart.cart.map((fruit) => (
            <li key={fruit.id} className="px-5 py-2 text-sm">
              <span className="font-semibold mr-2">{fruit.quantity}</span>
              <span>{fruit.name}</span>
            </li>
          ))}
        {fruityCart.cart.length === 0 && (
          <li className="px-5 py-2 text-sm font-semibold">
            Grab your fruit ! 🍉
          </li>
        )}
      </ul>
      <p className="text-xl p-5 border-t border-slate-400">
        Total prices :
        {fruityCart.cart.length > 0 && (
          <span className="ml-2 font-bold">
            {/* On démarre à 0 et on ajoute chaque fruit.price * fruit.quantity. Additionné à l'accumulateur à chaque fois */}
            {fruityCart.cart.reduce(
              (acc, fruit) => fruit.price * fruit.quantity + acc,
              0,
            )}
            $
          </span>
        )}
      </p>
    </div>
  );
}
