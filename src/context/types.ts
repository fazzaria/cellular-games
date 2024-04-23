import { Dispatch, SetStateAction } from "react";
import { GameSpecificConfig, Grid, GridConfig, RulesetName } from "../internal";

export type GameSpecificConfigs = { [key in RulesetName]: GameSpecificConfig };

export interface GlobalConfig {
  gridConfig: GridConfig;
  throttleAmount: number;
}

export type GlobalConfigs = { [key in RulesetName]: GlobalConfig };

export interface GameContextType {
  currentGame: RulesetName;
  gameSpecificConfigs: GameSpecificConfigs;
  globalConfigs: GlobalConfigs;
  grid: Grid;
  paused: boolean;
  setCurrentGame: Dispatch<SetStateAction<RulesetName>>;
  setGameSpecificConfigs: Dispatch<SetStateAction<GameSpecificConfigs>>;
  setGlobalConfigs: Dispatch<SetStateAction<GlobalConfigs>>;
  setGrid: Dispatch<SetStateAction<Grid>>;
  togglePause: () => void;
}
