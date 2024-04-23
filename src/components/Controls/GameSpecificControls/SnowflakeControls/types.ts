import { SnowflakeGameConfig } from "../../../../internal";
import { UpdateConfigFn } from "../types";

export interface SnowflakeControlsProps {
  config: SnowflakeGameConfig;
  setConfig: UpdateConfigFn;
}

export type SnowflakeColorProp = "liveColor" | "deadColor";
