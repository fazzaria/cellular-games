import { Dispatch, SetStateAction } from "react";
import { GameConfig, GameConfigs, RulesetName } from "../../../internal";

export interface GameSpecificControlsProps {
  configs: GameConfigs;
  rulesetName: RulesetName;
  setConfigs: Dispatch<SetStateAction<GameConfigs>>;
}

export type UpdateConfigFn = (prop: RulesetName, value: GameConfig) => void;
