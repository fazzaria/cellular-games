import { Dispatch, SetStateAction } from "react";
import { GameConfig } from "../../../classes";
import { GameConfigs } from "../../../context";
import { RulesetName } from "../../../rulesets";

export interface GameSpecificControlsProps {
  configs: GameConfigs;
  rulesetName: RulesetName;
  setConfigs: Dispatch<SetStateAction<GameConfigs>>;
}

export type UpdateConfigFn = (prop: RulesetName, value: GameConfig) => void;
