import React, { useState, useEffect } from "react";
import Chevron from "../../assets/chevron.svg";
import ShadowRange from "./ShadowRange.jsx";
import ShadowColorPicker from "./ShadowColorPicker.jsx";

export default function Shadow({ shadow, panelNumber }) {
  const [toggleShadow, setToggleShadow] = useState(false);

  // On active le toggleShadow pour le premier shadow et ferme les autres
  // avec initialState à false.
  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true);
    }
  }, []);

  const shadowInputs = shadow.inputs.map((input, index) => {
    console.log("inputData", input);

    if (input.type === "range") {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs}
          shadowID={shadow.id}
        />
      );
    } else if (input.type === "color") {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs.index}
          shadowID={shadow.id}
        />
      );
    }
  });

  return (
    <li className="bg-gray-50 border-b border-gray-300">
      <button
        className="w-full px-6 py-4 flex justify-between items-center"
        onClick={() => setToggleShadow(!toggleShadow)}
      >
        <span>Shadow {panelNumber}</span>
        <img
          className="font-bold w-5"
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
          src={Chevron}
          alt=""
        />
      </button>
      {toggleShadow && (
        <>
          <div className="flex items-end px-6 py-4">
            {/*<Checkbox />*/}
            {/*<Checkbox />*/}
            <button className="ml-auto text-sm bg-red-600 text-white hover:bg-red-700 py-1 px-3 rounded">
              Remove
            </button>
          </div>
          <div className="px-6 py-4">{shadowInputs}</div>
        </>
      )}
    </li>
  );
}
