import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCheckbox } from "../../features/shadows.js";

export default function ShadowCheckbox({ name, shadowID }) {
  const checkboxShadow = useSelector((state) =>
    state.shadows.find((shadow) => shadow.id === shadowID),
  );
  const dispatch = useDispatch();

  console.log("checkboxShadow[name] ", name, " ", checkboxShadow[name]);

  return (
    <>
      <input
        onChange={() => dispatch(updateCheckbox({ shadowID, name }))}
        type="checkbox"
        checked={checkboxShadow[name]}
        id={`checkbox-${name}-${shadowID}`}
        className="h-4 w-4 border-gray-300 rounded mr-2"
      />
      <label
        className="leading-4 mr-5 cursor-pointer"
        htmlFor={`checkbox-${name}-${shadowID}`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </>
  );
}
