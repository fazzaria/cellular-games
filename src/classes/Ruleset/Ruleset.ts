import { Grid } from "../Grid";
import { GameConfig } from "./types";

abstract class Ruleset {
  constructor(config?: GameConfig) {
    this.config = config;
  }
  config?: GameConfig;
  init: (grid: Grid) => void;
  update: (grid: Grid) => void;
}

export default Ruleset;
