import { Cell } from "../../internal";

const drawSquare = (
  cell: Cell,
  ctx: CanvasRenderingContext2D,
  cellSize: number
) => {
  if (ctx === null) return;
  if (ctx.fillStyle !== cell.currentColor) {
    ctx.fillStyle = cell.currentColor;
  }
  ctx.fillRect(cell.canvasX, cell.canvasY, cellSize, cellSize);
  //ctx.stroke();
  /* if (erase) {
    ctx.clip();
  } else {
    ctx.fill();
  } */
};

export default drawSquare;
