import { Ruleset, Grid } from "../../classes";
import { randomFromArray } from "../../utils";
import { RPSGameConfig, defaultRPSConfig } from "./types";

class RockPaperScissors implements Ruleset {
  constructor(config: Partial<RPSGameConfig> = {}) {
    this.config = { ...defaultRPSConfig, ...config };
  }
  config: RPSGameConfig;
  init(grid: Grid) {
    grid.iterateCells(
      (cell) =>
        (cell.currentColor = randomFromArray([
          this.config.rockColor,
          this.config.paperColor,
          this.config.scissorsColor,
        ]))
    );
  }
  update(grid: Grid) {
    grid.iterateCells((cell) => {
      const neighbors = grid.getNeighbors(cell);
      let strongColor = this.config.rockColor;
      let weakColor = this.config.paperColor;
      if (cell.currentColor === this.config.rockColor) {
        strongColor = this.config.paperColor;
        weakColor = this.config.scissorsColor;
      } else if (cell.currentColor === this.config.paperColor) {
        strongColor = this.config.scissorsColor;
        weakColor = this.config.rockColor;
      }
      const winningNeighbors = neighbors.filter(
        (neighbor) => neighbor.currentColor === strongColor
      ).length;
      const losingNeighbors = neighbors.filter(
        (neighbor) => neighbor.currentColor === weakColor
      ).length;

      let nextColor = cell.currentColor;
      if (winningNeighbors > losingNeighbors) {
        nextColor = strongColor;
      }
      cell.setNextColor(nextColor);
    });
    grid.iterateCells((cell) => cell.setCurrentColor(cell.nextColor));
  }
}

export default RockPaperScissors;
