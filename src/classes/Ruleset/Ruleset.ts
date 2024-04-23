import { GlobalConfig } from "../../context";
import { GameSpecificConfig } from "./types";

abstract class Ruleset {
  constructor(config?: GameSpecificConfig) {
    this.config = config;
  }
  config?: GameSpecificConfig;
  defaultGlobalSettings?: GlobalConfig;
  init: (arg0: any) => void;
  update: (arg0: any) => void;
}

export default Ruleset;
