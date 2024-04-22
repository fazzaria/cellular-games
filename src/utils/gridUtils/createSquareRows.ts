import { Cell, GridConfig } from "../../classes";

const createSquareRows = (config: GridConfig) => {
  const rows: Cell[][] = [];
  const { cellSize, height, width } = config;
  for (let y = 0; y < height; y += cellSize) {
    rows.push([]);
    for (let x = 0; x < width; x += cellSize) {
      const newSquare = new Cell({
        canvasX: x,
        canvasY: y,
        x: rows.length - 1,
        y: rows[rows.length - 1].length,
      });
      rows[rows.length - 1].push(newSquare);
    }
  }
  return rows;
};

export default createSquareRows;
