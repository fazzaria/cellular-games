const sliceFromColor = (color: string, section: 1 | 3 | 5) => {
  return parseInt(color.slice(section, section + 2), 16);
};

const componentToHex = (c: number) => {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

// requires hexidecimal string
const getAverageColor = (colors: string[]) => {
  const hexSections = [1, 3, 5].map((section: 1 | 3 | 5) =>
    colors.map((color) => sliceFromColor(color, section))
  );
  const sums = hexSections.map((section) =>
    section.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  );
  const averages = sums.map((sum) => Math.round(sum / colors.length));
  const average = averages.reduce(
    (accumulator, currentValue) => accumulator + componentToHex(currentValue),
    ""
  );
  return `#${average}`;
};

export default getAverageColor;
