import { Cell, GridConfig } from "../../classes";
import { a } from "../../const";

const createHexRows = (config: GridConfig) => {
  const rows: Cell[][] = [];
  const { cellSize, height, width } = config;
  for (
    let y = cellSize;
    y + cellSize * Math.sin(a) < height;
    y += cellSize * Math.sin(a)
  ) {
    rows.push([]);
    for (
      let x = cellSize, j = 0;
      x + cellSize * (1 + Math.cos(a)) < width;
      x += cellSize * (1 + Math.cos(a)),
        y += (-1) ** j++ * cellSize * Math.sin(a)
    ) {
      const newHex = new Cell({
        canvasX: x,
        canvasY: y,
        x: rows.length - 1,
        y: rows[rows.length - 1].length,
      });
      rows[rows.length - 1].push(newHex);
    }
  }
  return rows;
};

export default createHexRows;
