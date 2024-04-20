import { Ruleset, Grid } from "../../classes";
import { MazeCell, MazeConfig, defaultMazeConfig } from "./types";

class MazeGenerator implements Ruleset {
  constructor(config: Partial<MazeConfig> = {}) {
    this.config = { ...defaultMazeConfig, ...config };
  }
  config: MazeConfig;
  init(grid: Grid) {
    // start with a random distribution
    grid.iterateCells((cell: MazeCell) => {
      const isAlive =
        Math.floor(Math.random() * 100) < this.config.liveStartPercent;
      cell.config.isAlive = isAlive;
      cell.currentColor = isAlive
        ? this.config.liveColor
        : this.config.deadColor;
    });
  }
  update(grid: Grid) {
    grid.iterateCells((cell: MazeCell) => {
      const neighbors = grid.getNeighbors(cell);
      let nextAliveState = false;
      const isAlive = cell.config.isAlive;
      const numberOfLiveNeighbors = neighbors.filter(
        (neighbor: MazeCell) => neighbor.config.isAlive
      ).length;
      if (
        (isAlive &&
          this.config.neighborsNeededToSurvive.includes(
            numberOfLiveNeighbors
          )) ||
        (!isAlive &&
          this.config.neighborsNeededToReproduce.includes(
            numberOfLiveNeighbors
          ))
      ) {
        nextAliveState = true;
      }
      cell.config.isAlive = nextAliveState;
      cell.setNextColor(
        nextAliveState ? this.config.liveColor : this.config.deadColor
      );
    });
    grid.iterateCells((cell) => cell.setCurrentColor(cell.nextColor));
  }
}

export default MazeGenerator;
