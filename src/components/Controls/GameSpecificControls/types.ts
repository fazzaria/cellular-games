import { GameSpecificConfig, RulesetName } from "../../../internal";

export type UpdateConfigFn = (
  prop: RulesetName,
  value: GameSpecificConfig
) => void;

export interface GameSpecificControlsProps {}
