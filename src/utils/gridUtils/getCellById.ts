import { Cell } from "../../internal";

const getCellById = (rows: Cell[][], id: string) => {
  return rows.find((row) => row.some((cell) => cell.id === id));
};

export default getCellById;
