import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startChrono, reset } from "../../features/chrono.js";

export default function Chrono() {
  const dispatch = useDispatch();
  const chrono = useSelector((state) => state.chrono);

  return (
    <div className="bg-lime-600 p-4">
      <h1 className="text-4xl font-semibold text-center text-lime-100 pt-10 mb-6">
        Chrono : {chrono.value}
      </h1>
      <div className="flex justify-center">
        <button
          className="p-2 min-w-[125px] bg-lime-300 text-lime-950 hover:bg-lime-200 rounded-3xl"
          onClick={() => dispatch(startChrono())}
        >
          Start
        </button>
        <button
          className="p-2 min-w-[125px] bg-lime-300 text-lime-950 hover:bg-lime-200 rounded-3xl ml-3"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
