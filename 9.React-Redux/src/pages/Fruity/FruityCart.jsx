import React from "react";

export default function FruityCart() {
  return (
    <div className="bg-slate-100 rounded">
      <p className="text-xl border-b border-slate-400 p-4">Your FruityCart</p>
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
      </ul>
      <p className="text-lg p-5 border-t border-slate-400">Total prices :</p>
    </div>
  );
}
