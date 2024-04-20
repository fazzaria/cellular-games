import { Dispatch, SetStateAction } from "react";
import { GameConfig, Grid, GridConfig } from "../classes";
import {
  defaultCellShape,
  defaultCellSize,
  defaultGridLoops,
  defaultHeight,
  defaultRulesetName,
  defaultWidth,
} from "../const";
import { RulesetName } from "../rulesets";
import { createRuleset, initializeConfigs } from "../utils";

export type GameConfigs = { [key in RulesetName]: GameConfig };

export interface GlobalConfig {
  gridConfig: GridConfig;
  rulesetName: RulesetName;
  savedConfigs: GameConfigs;
  throttleAmount: number;
}

export interface GameContextType {
  globalConfig: GlobalConfig;
  grid: Grid | null;
  paused: boolean;
  setGlobalConfig: Dispatch<SetStateAction<GlobalConfig>>;
  setGrid: Dispatch<SetStateAction<Grid>>;
  togglePause: () => void;
}

export const defaultGridConfig: GridConfig = {
  cellShape: defaultCellShape,
  cellSize: defaultCellSize,
  height: defaultHeight,
  loops: defaultGridLoops,
  ruleset: createRuleset(defaultRulesetName),
  width: defaultWidth,
};

export const defaultGlobalConfig: GlobalConfig = {
  gridConfig: defaultGridConfig,
  rulesetName: defaultRulesetName,
  savedConfigs: initializeConfigs(),
  throttleAmount: 10,
};

export const defaultGameContextValue: GameContextType = {
  globalConfig: { ...defaultGlobalConfig },
  grid: null,
  paused: false,
  setGlobalConfig: () => null,
  setGrid: () => null,
  togglePause: () => null,
};
