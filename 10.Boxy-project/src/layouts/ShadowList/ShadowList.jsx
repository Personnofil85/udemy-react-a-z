import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addShadow } from "../../features/shadows";
import Shadow from "./Shadow.jsx";

export default function ShadowList() {
  const shadows = useSelector((state) => state.shadows);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between p-6 border-b border-gray-300">
        <p className="font-bold text-lg">Customize Shadows</p>
        <button
          onClick={() => dispatch(addShadow())}
          className="py-1 px-3 text-sm rounded bg-blue-600 focus:outline-none focus:ring-4 focus:ring-offset-2 hover:bg-blue-700 text-white"
        >
          Add Shadow
        </button>
      </div>
      <ul>
        {shadows.map((shadow, index) => (
          <Shadow key={shadow.id} shadow={shadow} panelNumber={index + 1} />
        ))}
      </ul>
    </div>
  );
}
