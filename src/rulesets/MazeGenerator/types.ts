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
