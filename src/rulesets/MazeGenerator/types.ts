import { Cell } from "../../classes";

export interface MazeCellConfig {
  isAlive: boolean;
}

export type MazeCell = Omit<Cell, "config"> & {
  config: MazeCellConfig;
};

export interface MazeConfig {
  deadColor: string;
  neighborsNeededToReproduce: number[];
  neighborsNeededToSurvive: number[];
  liveColor: string;
  liveStartPercent: number;
}

export const defaultMazeConfig: MazeConfig = {
  deadColor: "#640d14",
  neighborsNeededToReproduce: [3],
  neighborsNeededToSurvive: [2, 3],
  liveColor: "#90be6d",
  liveStartPercent: 10,
};
