import {
  defaultGameOptions,
  Grid,
  randomFromArray,
  Ruleset,
  RulesetName,
} from "../../internal";
import { WarGameConfig } from "./types";

class War implements Ruleset {
  constructor(config: Partial<WarGameConfig> = {}) {
    this.config = {
      ...defaultGameOptions[RulesetName.WAR],
      ...config,
    } as WarGameConfig;
  }
  config: WarGameConfig;
  init(grid: Grid) {
    grid.iterateCells(
      (cell) => (cell.currentColor = randomFromArray(this.config.factionColors))
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
