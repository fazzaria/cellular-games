import {
  Cell,
  defaultGameOptions,
  getAverageColor,
  getRandomCell,
  Grid,
  randomFromArray,
  randomHueShift,
  Ruleset,
  RulesetName,
  shuffle,
} from "../../internal";
import {
  RockCell,
  RockConfig,
  WaterCell,
  WaterConfig,
  isWater,
  rockToWater,
  WaterFlowGameConfig,
} from "./types";

const blur = (grid: Grid) => {
  grid.iterateCells((cell: WaterCell | RockCell) => {
    if (isWater(cell)) {
      return;
    }
    const neighbors = grid
      .getNeighbors(cell)
      .filter((cell: WaterCell | RockCell) => !isWater(cell));
    const averageColor = getAverageColor([
      cell.currentColor,
      ...neighbors.map((neighbor) => neighbor.currentColor),
    ]);
    cell.setNextColor(averageColor);
  });
  grid.iterateCells((cell: WaterCell | RockCell) => {
    if (isWater(cell)) {
      return;
    }
    cell.setCurrentColor(cell.nextColor);
    cell.config.baseColor = cell.nextColor;
  });
};

class WaterFlow implements Ruleset {
  constructor(config: Partial<WaterFlowGameConfig> = {}) {
    this.config = {
      ...defaultGameOptions[RulesetName.WATER_FLOW],
      ...config,
    } as WaterFlowGameConfig;
  }
  config: WaterFlowGameConfig;
  init(grid: Grid) {
    let totalCells = 0;
    let waterExists = false;
    const {
      averageStartingWaterCells,
      backgroundBlurAmount,
      baseBackgroundColor,
      rockHealthVariance,
      waterColors,
    } = this.config;
    const minRockHealth = 1;
    grid.iterateCells(() => totalCells++);
    const makeWaterCell = (cell: WaterCell) => {
      const baseColor = randomFromArray(waterColors);
      cell.config = { baseColor, type: "water", latest: true } as WaterConfig;
      cell.currentColor = baseColor;
      waterExists = true;
    };
    grid.iterateCells((cell) => {
      const shouldCellBeWater =
        Math.floor((Math.random() * totalCells) / averageStartingWaterCells) ===
        1;
      if (shouldCellBeWater) {
        makeWaterCell(cell as WaterCell);
      } else {
        const maxHealth =
          minRockHealth + Math.floor(Math.random() * rockHealthVariance);
        const baseColor = randomHueShift(baseBackgroundColor, 50);
        const colorsToAverage = [];
        for (let i = 0; i < maxHealth; i++) {
          colorsToAverage.push(baseColor);
        }
        cell.config = {
          baseColor,
          colorsToAverage,
          currentHealth: maxHealth,
          maxHealth,
          type: "rock",
        } as RockConfig;
        cell.currentColor = baseColor;
      }
    });
    if (!waterExists) {
      makeWaterCell(getRandomCell(grid.rows) as WaterCell);
    }
    for (let i = 0; i < backgroundBlurAmount; i++) {
      blur(grid);
    }
  }
  update(grid: Grid) {
    const { branchingChance, trueRandom, waterColors } = this.config;
    grid.iterateCells((cell: RockCell | WaterCell) => {
      let nextColor = cell.currentColor;
      if (isWater(cell)) {
        const neighbors = grid.getNeighbors(cell);
        if (!cell.config.latest) {
          return;
        }
        const rockNeighbors = neighbors.filter(
          (neighbor: RockCell | WaterCell) => !isWater(neighbor)
        ) as RockCell[];
        if (rockNeighbors.length) {
          // try to find a rock cell that is below max health (path of least resistance)
          let neighborToErode: RockCell | null = null;
          if (
            rockNeighbors.some(
              (rock) => rock.config.currentHealth < rock.config.maxHealth
            )
          ) {
            const mostErodedRockNeighbor = rockNeighbors.sort(
              (a, b) =>
                b.config.maxHealth -
                b.config.currentHealth -
                (a.config.maxHealth - a.config.currentHealth)
            )[0];
            neighborToErode = mostErodedRockNeighbor;
          } else {
            if (trueRandom) {
              // if true random is selected, pick a random rock neighbor
              neighborToErode = randomFromArray(rockNeighbors);
            } else {
              // otherwise, find a rock cell with the fewest water neighbors to maximize length of stream
              const getNumberOfWaterNeighbors = (rock: Cell) => {
                return grid
                  .getNeighbors(rock)
                  .filter(
                    (neighborOfRock) => neighborOfRock.config.type === "water"
                  ).length;
              };
              let driestNeighbor = null;
              let lowestNumberOfWaterNeighbors = 6;
              shuffle(rockNeighbors).forEach((rock: RockCell) => {
                const numberOfWaterNeighbors = getNumberOfWaterNeighbors(rock);
                if (numberOfWaterNeighbors <= lowestNumberOfWaterNeighbors) {
                  lowestNumberOfWaterNeighbors = numberOfWaterNeighbors;
                  driestNeighbor = rock;
                }
              });
              neighborToErode = driestNeighbor;
            }
          }
          if (neighborToErode === null) {
            cell.config.latest = false;
            return;
          }
          neighborToErode.config.currentHealth--;
          const colorIndex =
            neighborToErode.config.maxHealth -
            neighborToErode.config.currentHealth -
            1;
          neighborToErode.config.colorsToAverage.splice(
            colorIndex,
            1,
            cell.config.baseColor
          );
          if (neighborToErode.config.currentHealth <= 0) {
            // stop flowing once a new water cell is created, unless it decides to branch
            if (Math.floor(Math.random() * 100) < branchingChance) {
              cell.config.baseColor = randomFromArray(
                waterColors.filter((color) => color !== cell.config.baseColor)
              );
            } else {
              cell.config.latest = false;
            }
          }
        } else {
          cell.config.latest = false;
        }
      } else {
        const { currentHealth, maxHealth } = cell.config;
        if (currentHealth <= 0) {
          nextColor = getAverageColor(cell.config.colorsToAverage);
          rockToWater(cell, {
            baseColor: nextColor,
            type: "water",
            latest: true,
          });
        } else if (currentHealth < maxHealth) {
          const colorsToAverage = [
            getAverageColor(cell.config.colorsToAverage),
          ];
          /* for (let i = 0; i < maxHealth - (maxHealth - currentHealth); i++) {
            colorsToAverage.push(cell.config.baseColor + "");
          } */
          nextColor = getAverageColor(colorsToAverage);
        }
      }
      cell.setNextColor(nextColor);
    });
    grid.iterateCells((cell) => cell.setCurrentColor(cell.nextColor));
  }
}

export default WaterFlow;
