import { ConwayConfig } from "../../../../rulesets/Conway/types";
import { UpdateConfigFn } from "../types";

export interface ConwayControlsProps {
  config: ConwayConfig;
  setConfig: UpdateConfigFn;
}
