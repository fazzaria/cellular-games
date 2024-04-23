import { GameConfig, RulesetName } from "../../../internal";

export type UpdateConfigFn = (prop: RulesetName, value: GameConfig) => void;

export interface GameSpecificControlsProps {}
