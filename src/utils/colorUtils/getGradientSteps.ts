import Rainbow from "rainbowvis.js";

const getGradientSteps = (
  startingColor: string,
  endingColor: string,
  numberOfSteps: number
) => {
  const rainbow = new Rainbow();
  rainbow.setNumberRange(0, numberOfSteps);
  rainbow.setSpectrum(startingColor, endingColor);
  const colors = [];
  for (let i = 0; i < numberOfSteps; i++) {
    colors.push(`#${rainbow.colorAt(i)}`);
  }
  return colors;
};

export default getGradientSteps;
