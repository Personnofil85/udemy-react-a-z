import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  1;
  const counter = useSelector((state) => state.counter);
  console.log("counter", counter);
  return (
    <div>
      <h1 className="text-4xl font-semibold text-center pt-10">Counter</h1>
      <p className="text-4xl font-semibold text-center pt-10">
        {counter.value}
      </p>
    </div>
  );
}
