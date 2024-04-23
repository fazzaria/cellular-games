import { MazeConfig } from "../../../../internal";
import { UpdateConfigFn } from "../types";

export interface MazeControlsProps {
  config: MazeConfig;
  setConfig: UpdateConfigFn;
}

export type MazeColorProp = "liveColor" | "deadColor";
