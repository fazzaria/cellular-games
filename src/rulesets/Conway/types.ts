import { Cell } from "../../internal";

export enum Preset {
  DEFAULT = "default",
}

export interface ConwayCellConfig {
  age: number;
  isAlive: boolean;
  nextAlive: boolean;
  timesAlive: number;
}

export type ConwayCell = Omit<Cell, "config"> & {
  config: ConwayCellConfig;
};

export interface ConwayConfig {
  cellLifespan: number;
  deadColor: string;
  envelopeGradientSteps: number;
  finalEnvelopeColor: string;
  neighborsNeededToReproduce: number[];
  neighborsNeededToSurvive: number[];
  liveColor: string;
  liveStartPercent: number;
  mortalCells: boolean;
  preset: Preset;
  showEnvelope: boolean;
  showEnvelopeGradient: boolean;
  startingEnvelopeColor: string;
}
