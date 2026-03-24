import React from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  divide,
} from "../../features/counter.js";

const CounterButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p className="text-slate-50 mb-2">Modify the counter value</p>
      <button
        className="w-10 h-10 text-lg bg-slate-100 rounded mr-2"
        onClick={() => dispatch(increment(75))}
      >
        +1
      </button>
      <button
        className="w-10 h-10 text-lg bg-slate-100 rounded mr-2"
        onClick={() => dispatch(decrement(75))}
      >
        -1
      </button>
      <button
        className="w-10 h-10 text-lg bg-slate-100 rounded mr-2"
        onClick={() => dispatch(multiply(2))}
      >
        x10
      </button>
      <button
        className="w-10 h-10 text-lg bg-slate-100 rounded mr-2"
        onClick={() => dispatch(divide(2))}
      >
        /10
      </button>
    </div>
  );
};

export default CounterButton;
