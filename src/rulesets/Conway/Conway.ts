import { Ruleset, Grid } from "../../classes";
import { ConwayCell, ConwayConfig, defaultConwayConfig } from "./types";

class Conway implements Ruleset {
  constructor(config: Partial<ConwayConfig> = {}) {
    this.config = { ...defaultConwayConfig, ...config };
  }
  config: ConwayConfig;
  init(grid: Grid) {
    switch (this.config.preset) {
      default:
        // start with a random distribution
        grid.iterateCells((cell: ConwayCell) => {
          const isAlive =
            Math.floor(Math.random() * 100) < this.config.liveStartPercent;
          cell.config.isAlive = isAlive;
          cell.currentColor = isAlive
            ? this.config.liveColor
            : this.config.deadColor;
        });
        break;
    }
  }
  update(grid: Grid) {
    const {
      deadColor,
      envelopeColor,
      liveColor,
      neighborsNeededToReproduce,
      neighborsNeededToSurvive,
      showEnvelope,
    } = this.config;
    grid.iterateCells((cell: ConwayCell) => {
      const { isAlive, previouslyAlive } = cell.config;
      const neighbors = grid.getNeighbors(cell);
      const numberOfLiveNeighbors = neighbors.filter(
        (neighbor: ConwayCell) => neighbor.config.isAlive
      ).length;
      let nextAliveState = false;
      if (
        (isAlive && neighborsNeededToSurvive.includes(numberOfLiveNeighbors)) ||
        (!isAlive && neighborsNeededToReproduce.includes(numberOfLiveNeighbors))
      ) {
        nextAliveState = true;
      }
      cell.config.nextAlive = nextAliveState;
      let nextColor = deadColor;
      if (nextAliveState) {
        nextColor = liveColor;
        cell.config.previouslyAlive = true;
      } else if (showEnvelope && previouslyAlive) {
        nextColor = envelopeColor;
      }
      cell.setNextColor(nextColor);
    });
    grid.iterateCells((cell: ConwayCell) => {
      cell.config.isAlive = cell.config.nextAlive;
      cell.setCurrentColor(cell.nextColor);
    });
  }
}

export default Conway;
