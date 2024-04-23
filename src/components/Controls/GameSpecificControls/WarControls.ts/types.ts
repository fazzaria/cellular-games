import { WarGameConfig } from "../../../../internal";
import { UpdateConfigFn } from "../types";

export interface WarControlsProps {
  config: WarGameConfig;
  setConfig: UpdateConfigFn;
}
