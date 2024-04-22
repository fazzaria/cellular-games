import { GlobalConfig } from "../../context";
import { GameConfig } from "./types";

abstract class Ruleset {
  constructor(config?: GameConfig) {
    this.config = config;
  }
  config?: GameConfig;
  defaultGlobalSettings?: GlobalConfig;
  init: (arg0: any) => void;
  update: (arg0: any) => void;
}

export default Ruleset;
