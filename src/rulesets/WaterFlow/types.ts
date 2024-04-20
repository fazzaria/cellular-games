import { Cell } from "../../classes";

export interface WaterFlowGameConfig {}

export const defaultWaterFlowConfig: WaterFlowGameConfig = {};

export interface RockConfig {
  baseColor: string;
  colorsToAverage: string[];
  currentHealth: number;
  maxHealth: number;
  type: "rock";
}

export interface WaterConfig {
  baseColor: string;
  latest: boolean;
  type: "water";
}

export type RockCell = Omit<Cell, "config"> & {
  config: RockConfig;
};

export type WaterCell = Omit<Cell, "config"> & {
  config: WaterConfig;
};

export const isWater = (cell: WaterCell | RockCell): cell is WaterCell => {
  return (cell as WaterCell).config.type === "water";
};

export const rockToWater = (cell: any, config: WaterConfig): WaterCell => {
  return Object.assign(cell, {
    config,
  });
};
