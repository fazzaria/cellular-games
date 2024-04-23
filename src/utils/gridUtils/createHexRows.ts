import { Cell, GridConfig, angleOfHexagonalSide } from "../../internal";

const createHexRows = (config: GridConfig) => {
  const rows: Cell[][] = [];
  const { cellSize, height, width } = config;
  for (
    let y = cellSize, j = 0;
    y + cellSize * Math.sin(angleOfHexagonalSide) < height;
    y += 2 ** ((j + 1) % 2) * cellSize * Math.sin(angleOfHexagonalSide), j = 0
  ) {
    rows.push([]);
    for (
      let x = cellSize;
      x + cellSize * (1 + Math.cos(angleOfHexagonalSide)) < width;
      x += cellSize * (1 + Math.cos(angleOfHexagonalSide)),
        y += (-1) ** j++ * cellSize * Math.sin(angleOfHexagonalSide)
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
