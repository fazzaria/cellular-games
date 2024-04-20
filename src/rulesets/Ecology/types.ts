import { Cell } from "../../classes";

export interface EcologyGameConfig {}

export const defaultEcologyConfig: EcologyGameConfig = {};

export enum CreatureType {
  NONE = "none",
  DEAD = "dead",
  DECOMPOSER = "decomposer",
  PRODUCER = "producer",
  HERBIVORE = "herbivore",
  CARNIVORE = "carnivore",
}

export type EcologyCellConfig = {
  age: number;
  nextType: CreatureType;
  type: CreatureType;
};

export type EcologyCell = Omit<Cell, "config"> & { config: EcologyCellConfig };
