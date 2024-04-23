import {
  defaultGameOptions,
  getGradientSteps,
  Grid,
  Ruleset,
  RulesetName,
} from "../../internal";
import { ConwayCell, ConwayConfig } from "./types";

class Conway implements Ruleset {
  constructor(config: Partial<ConwayConfig> = {}) {
    this.config = {
      ...defaultGameOptions[RulesetName.CONWAY],
      ...config,
    } as ConwayConfig;
    const {
      envelopeGradientSteps,
      finalEnvelopeColor,
      showEnvelope,
      showEnvelopeGradient,
      startingEnvelopeColor,
    } = this.config;
    if (!showEnvelope) {
      this.envelopeGradientColors = [];
      return;
    }
    if (!showEnvelopeGradient) {
      this.envelopeGradientColors = [startingEnvelopeColor];
      return;
    }
    const envelopeGradientColors = getGradientSteps(
      startingEnvelopeColor,
      finalEnvelopeColor,
      envelopeGradientSteps
    );
    this.envelopeGradientColors = envelopeGradientColors;
  }
  config: ConwayConfig;
  envelopeGradientColors: string[];
  init(grid: Grid) {
    switch (this.config.preset) {
      default:
        // start with a random distribution
        grid.iterateCells((cell: ConwayCell) => {
          const isAlive =
            Math.floor(Math.random() * 100) < this.config.liveStartPercent;
          cell.config = {
            age: 0,
            isAlive,
            nextAlive: false,
            timesAlive: isAlive ? 1 : 0,
          };
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
      envelopeGradientSteps,
      liveColor,
      mortalCells,
      neighborsNeededToReproduce,
      neighborsNeededToSurvive,
      showEnvelope,
    } = this.config;
    const { envelopeGradientColors } = this;
    grid.iterateCells((cell: ConwayCell) => {
      const { isAlive, timesAlive } = cell.config;
      let nextColor = deadColor;

      const handleDeadCell = () => {
        cell.config.age = 0;
        cell.config.nextAlive = false;
        if (showEnvelope && timesAlive > 0) {
          nextColor =
            envelopeGradientColors[timesAlive] ??
            envelopeGradientColors[envelopeGradientColors.length - 1];
        }
      };

      if (cell.config.age > this.config.cellLifespan) {
        handleDeadCell();
        cell.setNextColor(nextColor);
        return;
      }

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
      if (nextAliveState) {
        nextColor = liveColor;
        if (timesAlive < envelopeGradientSteps) {
          cell.config.timesAlive++;
        }
        if (mortalCells) cell.config.age++;
      } else {
        handleDeadCell();
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
