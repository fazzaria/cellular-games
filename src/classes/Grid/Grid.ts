import {
  getNeighbors,
  drawHexagon,
  drawSquare,
  clearCanvas,
  createHexRows,
  createSquareRows,
} from "../../utils";
import { Cell } from "../Cell";
import { GridConfig } from "./types";

class Grid {
  constructor(config: GridConfig) {
    this.config = config;
    this.setupCells();
    this.getNeighbors = getNeighbors.bind(this);
    this.init();
  }
  config: GridConfig;
  ctx: CanvasRenderingContext2D = null;
  rows: Cell[][] = [];
  getNeighbors: typeof getNeighbors;
  init() {
    this.config.ruleset.init(this);
    this.render();
  }
  iterateCells(fn: (cell: Cell) => void) {
    this.rows.forEach((row) => row.forEach((cell) => fn(cell)));
  }
  render() {
    const cells: Cell[] = [];
    this.iterateCells((cell) => cells.push(cell));
    // sorting by color improves performance by reducing the number of times the fillStyle changes
    const sortedCells = [...cells].sort((a, b) =>
      a.currentColor > b.currentColor ? 1 : -1
    );
    sortedCells.forEach((cell) => {
      switch (this.config.cellShape) {
        case "hex":
          drawHexagon(cell, this.ctx, this.config.cellSize);
          break;
        case "square":
          drawSquare(cell, this.ctx, this.config.cellSize);
          break;
      }
    });
  }
  reset() {
    clearCanvas();
    this.setupCells();
    this.init();
  }
  setupCells() {
    let rows = [];
    switch (this.config.cellShape) {
      case "hex":
        rows = createHexRows(this.config);
        break;
      case "square":
        rows = createSquareRows(this.config);
        break;
    }
    this.rows = rows;
  }
  update() {
    this.config.ruleset.update(this);
    this.render();
  }
}

export default Grid;
