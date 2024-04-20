import { Cell } from "../../classes";

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

export const defaultConwayConfig: ConwayConfig = {
  deadColor: "#293462",
  envelopeColor: "#5E78E0",
  neighborsNeededToReproduce: [3],
  neighborsNeededToSurvive: [2, 3],
  liveColor: "#D800A6",
  liveStartPercent: 10,
  preset: Preset.DEFAULT,
  showEnvelope: false,
};
