import { CreatureType } from "./types";

export const creatureColorMap: { [key in CreatureType]: string } = {
  [CreatureType.NONE]: "#00000",
  [CreatureType.DEAD]: "#404a4a", // gray
  [CreatureType.DECOMPOSER]: "#56a3a6", // blue
  [CreatureType.PRODUCER]: "#176923", // green
  [CreatureType.HERBIVORE]: "#e3b505", // yellow
  [CreatureType.CARNIVORE]: "#db504a", // red
};

export const averageInitialSpawnNumberMap = {
  [CreatureType.DEAD]: 10,
  [CreatureType.DECOMPOSER]: 10,
  [CreatureType.PRODUCER]: 5,
  [CreatureType.HERBIVORE]: 5,
  [CreatureType.CARNIVORE]: 1,
};

export const creatureLifespanMap: { [key in CreatureType]?: number } = {
  [CreatureType.DEAD]: 1,
  [CreatureType.DECOMPOSER]: 2,
  [CreatureType.PRODUCER]: 5,
  [CreatureType.HERBIVORE]: 2,
  [CreatureType.CARNIVORE]: 5,
};

export const neighborsRequiredMap: {
  [key in CreatureType]?: { [key in CreatureType]?: (num: number) => boolean };
} = {
  [CreatureType.DECOMPOSER]: {
    [CreatureType.DEAD]: (num) => num >= 8,
  },
  [CreatureType.PRODUCER]: {
    [CreatureType.DECOMPOSER]: (num) => num >= 2,
    [CreatureType.HERBIVORE]: (num) => num === 0,
  },
  [CreatureType.HERBIVORE]: {
    [CreatureType.PRODUCER]: (num) => num >= 1,
    [CreatureType.CARNIVORE]: (num) => num === 0,
  },
  [CreatureType.CARNIVORE]: { [CreatureType.HERBIVORE]: (num) => num >= 2 },
};
