import React from "react";
import FruityCart from "./FruityCart.jsx";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../features/fruitsCart.js";

export default function Fruity() {
  const fruitsList = useSelector((state) => state.fruits.list);

  console.log("fruitsList", fruitsList);

  const dispatch = useDispatch();

  return (
    <div className="bg-emerald-600 p-4">
      <h1 className="text-4xl text-slate-100 font-bold">Fruity</h1>
      <p className="text-xl text-slate-200 mb-10">
        Pick your fruits and get delivered the next day. 🍍
      </p>
      <ul className="flex gap-4 mb-4">
        {fruitsList.map((fruit) => (
          <li key={fruit.id} className="bg-slate-100 p-4 w-full rounded">
            <img
              src={fruit.url}
              alt={`Image of ${fruit.name}`}
              className="w-full h-[250px] object-cover mb-3"
            />
            <div className="flex justify-between items-baseline mb-4">
              <h2 className="text-2xl mb-2 font-semibold">{fruit.name}</h2>
              <p className="text-lg font-semibold">Per unit : {fruit.price}$</p>
            </div>
            <div className="flex gap-2 text-slate-100">
              <button
                onClick={() => dispatch(add(fruit))}
                className="w-full bg-green-600 hover:bg-green-500 rounded text-lg border-green-900"
              >
                Add one
              </button>
              <button
                onClick={() => dispatch(remove(fruit))}
                className="w-full bg-red-600 hover:bg-red-500 rounded text-lg border-red-900"
              >
                Remove one
              </button>
            </div>
          </li>
        ))}
      </ul>

      <FruityCart />
    </div>
  );
}
