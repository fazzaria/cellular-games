import { defaultGameOptions, possibleColors } from "../../const";
import { Ruleset, Grid } from "../../classes";
import { randomFromArray, getAverageColor } from "../../utils";
import { BlurConfig } from "./types";
import { RulesetName } from "../types";

class Blur implements Ruleset {
  constructor(config: Partial<BlurConfig> = {}) {
    this.config = {
      ...defaultGameOptions[RulesetName.BLUR],
      ...config,
    } as BlurConfig;
  }
  config: BlurConfig;
  init(grid: Grid) {
    grid.iterateCells(
      (cell) => (cell.currentColor = randomFromArray(possibleColors))
    );
  }
  update(grid: Grid) {
    grid.iterateCells((cell) => {
      const neighbors = grid.getNeighbors(cell);
      const colorsToAverage = [
        cell.currentColor,
        ...neighbors.map((neighbor) => neighbor.currentColor),
      ];
      for (let i = 0; i < this.config.blurSlowness; i++) {
        colorsToAverage.push(cell.currentColor);
      }
      const averageColor = getAverageColor(colorsToAverage);
      cell.setNextColor(averageColor);
    });
    grid.iterateCells((cell) => cell.setCurrentColor(cell.nextColor));
  }
}

export default Blur;
