import React from "react";
import FruityCart from "./FruityCart.jsx";

export default function Fruity() {
  return (
    <div className="bg-emerald-600 p-4">
      <h1 className="text-4xl text-slate-100 font-bold">Fruity</h1>
      <p className="text-xl text-slate-200 mb-10">
        Pick your fruits and get delivered the next day. 🍍
      </p>
      <ul className="flex gap-4 mb-4"></ul>

      <FruityCart />
    </div>
  );
}
