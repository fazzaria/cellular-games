import { Ruleset, Grid } from "../../classes";
import { SnowflakeGameConfig, defaultSnowflakeConfig } from "./types";

const aliveColor = "#15616d";
const deadColor = "#001524";

class Snowflake implements Ruleset {
  constructor(config: Partial<SnowflakeGameConfig> = {}) {
    this.config = { ...defaultSnowflakeConfig, ...config };
  }
  config: SnowflakeGameConfig;
  init(grid: Grid) {
    const maxY = grid.rows[0].length - 1;
    const maxX = grid.rows.length - 1;
    const halfMaxX = Math.round(maxX / 2);
    const halfMaxY = Math.round(maxY / 2);
    grid.iterateCells(
      (cell) =>
        (cell.currentColor =
          [halfMaxX, halfMaxX - 1].includes(cell.x) &&
          [halfMaxY, halfMaxY - 1].includes(cell.y)
            ? aliveColor
            : deadColor)
    );
  }
  update(grid: Grid) {
    grid.iterateCells((cell) => {
      const neighbors = grid.getNeighbors(cell);
      const liveNeighbors = neighbors.filter(
        (neighbor) => neighbor.currentColor === aliveColor
      ).length;
      let nextColor = deadColor;
      const liveNeighborsAllowed = [2, 3];
      if (liveNeighborsAllowed.includes(liveNeighbors)) {
        nextColor = aliveColor;
      }
      cell.setNextColor(nextColor);
    });
    grid.iterateCells((cell) => cell.setCurrentColor(cell.nextColor));
  }
}

export default Snowflake;
