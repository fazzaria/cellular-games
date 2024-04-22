import componentToHex from "./componentToHex";
import hexToRGB from "./hexToRGB";

const randomHueShift = (startingColor: string, shiftAmount: number) => {
  const { r, g, b } = hexToRGB(startingColor);
  const values = [r, g, b];
  for (let i = 0; i < shiftAmount; i++) {
    const randomIndex = Math.floor(Math.random() * 3);
    if (Math.floor(Math.random() * 2) === 0) {
      values[randomIndex]++;
    } else {
      values[randomIndex]--;
    }
  }
  return `#${values.map((value) => componentToHex(value)).join("")}`;
};

export default randomHueShift;
