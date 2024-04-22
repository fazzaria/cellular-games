import { Dispatch, SetStateAction } from "react";
import { GameConfig, Grid, GridConfig } from "../classes";
import { RulesetName } from "../rulesets";

export type GameConfigs = { [key in RulesetName]: GameConfig };

export interface GlobalConfig {
  gridConfig: GridConfig;
  rulesetName: RulesetName;
  savedConfigs: GameConfigs;
  throttleAmount: number;
}

export interface GameContextType {
  globalConfig: GlobalConfig;
  grid: Grid;
  paused: boolean;
  setGlobalConfig: Dispatch<SetStateAction<GlobalConfig>>;
  setGrid: Dispatch<SetStateAction<Grid>>;
  togglePause: () => void;
}
