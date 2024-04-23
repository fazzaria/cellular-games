import { ConwayConfig } from "../../../../internal";
import { UpdateConfigFn } from "../types";

export interface ConwayControlsProps {
  config: ConwayConfig;
  setConfig: UpdateConfigFn;
}

export type ConwayColorProp =
  | "liveColor"
  | "deadColor"
  | "startingEnvelopeColor"
  | "finalEnvelopeColor";
