import { defaultGameOptions, Grid, Ruleset, RulesetName } from "../../internal";
import { SnowflakeGameConfig } from "./types";

class Snowflake implements Ruleset {
  constructor(config: Partial<SnowflakeGameConfig> = {}) {
    this.config = {
      ...defaultGameOptions[RulesetName.SNOWFLAKE],
      ...config,
    } as SnowflakeGameConfig;
  }
  config: SnowflakeGameConfig;
  init(grid: Grid) {
    const { deadColor, liveColor } = this.config;
    const maxY = grid.rows[0].length - 1;
    const maxX = grid.rows.length - 1;
    const halfMaxX = Math.round(maxX / 2);
    const halfMaxY = Math.round(maxY / 2);
    grid.iterateCells(
      (cell) =>
        (cell.currentColor =
          [halfMaxX, halfMaxX - 1].includes(cell.x) &&
          [halfMaxY, halfMaxY - 1].includes(cell.y)
            ? liveColor
            : deadColor)
    );
  }
  update(grid: Grid) {
    const { deadColor, liveColor } = this.config;
    grid.iterateCells((cell) => {
      const neighbors = grid.getNeighbors(cell);
      const liveNeighbors = neighbors.filter(
        (neighbor) => neighbor.currentColor === liveColor
      ).length;
      let nextColor = deadColor;
      const liveNeighborsAllowed = [2, 3];
      if (liveNeighborsAllowed.includes(liveNeighbors)) {
        nextColor = liveColor;
      }
      cell.setNextColor(nextColor);
    });
    grid.iterateCells((cell) => cell.setCurrentColor(cell.nextColor));
  }
}

export default Snowflake;
