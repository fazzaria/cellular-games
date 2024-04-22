import { Cell } from "../../internal";

export enum Preset {
  DEFAULT = "default",
}

export interface ConwayCellConfig {
  isAlive: boolean;
  nextAlive: boolean;
  previouslyAlive: boolean;
}

export type ConwayCell = Omit<Cell, "config"> & {
  config: ConwayCellConfig;
};

export interface ConwayConfig {
  deadColor: string;
  envelopeColor: string;
  neighborsNeededToReproduce: number[];
  neighborsNeededToSurvive: number[];
  liveColor: string;
  liveStartPercent: number;
  preset: Preset;
  showEnvelope: boolean;
}
