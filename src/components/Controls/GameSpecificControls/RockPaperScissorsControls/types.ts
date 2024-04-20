import { RPSGameConfig } from "../../../../rulesets";
import { UpdateConfigFn } from "../types";

export interface RockPaperScissorsControlsProps {
  config: RPSGameConfig;
  setConfig: UpdateConfigFn;
}
