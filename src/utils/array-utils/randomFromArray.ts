const randomFromArray = <T>(arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export default randomFromArray;
