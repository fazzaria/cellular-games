import componentToHex from "./componentToHex";

const getRandomColor = () => {
  const rgb: number[] = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  const [r, g, b] = rgb;
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

export default getRandomColor;
