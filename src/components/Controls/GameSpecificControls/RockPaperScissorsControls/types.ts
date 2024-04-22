import { RPSGameConfig } from "../../../../internal";
import { UpdateConfigFn } from "../types";

export interface RockPaperScissorsControlsProps {
  config: RPSGameConfig;
  setConfig: UpdateConfigFn;
}
