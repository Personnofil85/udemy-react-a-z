import React from "react";
import CounterResult from "./CounterResult.jsx";
import CounterButton from "./CounterButton.jsx";

export default function Counter() {
  return (
    <div className="bg-slate-700 p-4">
      <CounterResult />
      <CounterButton />
    </div>
  );
}
