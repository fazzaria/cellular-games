import { Cell } from "../../internal";

const getRandomCell = (rows: Cell[][]) => {
  const randomY = Math.floor(Math.random() * rows.length);
  const randomX = Math.floor(Math.random() * rows[randomY].length);
  return rows[randomY][randomX];
};

export default getRandomCell;
