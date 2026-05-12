// export const getBoxShadowValue = (x, y, blur, spread, color) =>
//   `${x}px ${y}px ${blur}px ${spread}px ${color}`;

export default function getBoxShadowValue(shadows) {
  let finalString = "";

  shadows.forEach((shadow) => {
    if (shadow.active) {
      shadow.inputs.forEach((input) => {
        if (input.type === "range") finalString += `${input.value}px `;
        else if (input.type === "color") finalString += `${input.value} `;
      });

      if (shadow.type === "inset") finalString = ` inset`;

      if (shadows.indexOf(shadow) === shadows.length - 1) finalString += ";";
      else finalString += ",";
    }
  });

  return finalString;
}
