import { Cell, GridConfig } from "../../classes";
import { angleOfHexagonalSide } from "../../const";

const createHexRows = (config: GridConfig) => {
  const rows: Cell[][] = [];
  const { cellSize, height, width } = config;
  const cosA = Math.cos(angleOfHexagonalSide);
  const sinA = Math.sin(angleOfHexagonalSide);

  for (let y = cellSize; y + cellSize * sinA < height; y += cellSize * sinA) {
    rows.push([]);
    for (
      let x = cellSize, j = 0;
      x + cellSize * (1 + cosA) < width;
      x += cellSize * (1 + cosA), y += (-1) ** j++ * cellSize * sinA
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
