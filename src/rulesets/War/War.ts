import { possibleColors } from "../../const";
import { Ruleset, Grid } from "../../classes";
import { randomFromArray } from "../../utils";
import { WarGameConfig, defaultWarConfig } from "./types";

class War implements Ruleset {
  constructor(config: Partial<WarGameConfig> = {}) {
    this.config = { ...defaultWarConfig, ...config };
  }
  config: WarGameConfig;
  init(grid: Grid) {
    grid.iterateCells(
      (cell) => (cell.currentColor = randomFromArray(possibleColors))
    );
  }
  update(grid: Grid) {
    grid.iterateCells((cell) => {
      const neighborColors = grid
        .getNeighbors(cell)
        .map((neighbor) => neighbor.currentColor);

      let nextColor = randomFromArray(neighborColors);
      cell.setNextColor(nextColor);
    });
    grid.iterateCells((cell) => cell.setCurrentColor(cell.nextColor));
  }
}

export default War;
