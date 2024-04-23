const componentToHex = (c: number) => {
  const hex = Math.abs(c).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

export default componentToHex;
