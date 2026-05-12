import React from "react";
import { useDispatch } from "react-redux";
import { updateShadowValue } from "../../features/shadows.js";

export default function ShadowColorPicker({ inputData, shadowID }) {
  const dispatch = useDispatch();

  console.log(
    "inputData ShadowColorPicker",
    inputData,
    "shadowID",
    shadowID,
    "",
  );

  function handleInputs(e) {
    dispatch(
      updateShadowValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
        shadowID: shadowID,
      }),
    );
  }
  return (
    <div className="mt-3">
      <p>{inputData.name}</p>
      <div className="flex mt-2">
        <input
          type="text"
          onChange={handleInputs}
          value={inputData.value}
          className="flex-grow border py-1 px-2 focus:outline-1 outline-gray-400"
        />
        <input
          type="color"
          onChange={handleInputs}
          value={inputData.value}
          className="cursor-pointer h-[40px]"
        />
      </div>
    </div>
  );
}
