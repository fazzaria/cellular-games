import { angleOfHexagonalSide, Cell } from "../../internal";

const drawHexagon = (
  cell: Cell,
  ctx: CanvasRenderingContext2D,
  cellSize: number
) => {
  if (ctx === null) return;
  ctx.beginPath();
  if (ctx.fillStyle !== cell.currentColor) {
    ctx.fillStyle = cell.currentColor;
  }

  for (var i = 0; i < 6; i++) {
    ctx.lineTo(
      cell.canvasX + cellSize * Math.cos(angleOfHexagonalSide * i),
      cell.canvasY + cellSize * Math.sin(angleOfHexagonalSide * i)
    );
  }
  ctx.closePath();
  //ctx.stroke();
  /* if (erase) {
    ctx.clip();
  } else {
    ctx.fill();
  } */
  ctx.fill();
};

export default drawHexagon;
