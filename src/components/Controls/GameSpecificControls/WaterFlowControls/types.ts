import { WaterFlowGameConfig } from "../../../../internal";
import { UpdateConfigFn } from "../types";

export interface WaterFlowControlsProps {
  config: WaterFlowGameConfig;
  setConfig: UpdateConfigFn;
}
