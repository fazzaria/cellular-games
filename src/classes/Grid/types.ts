import { Ruleset } from "../../internal";

export type CellShape = "hex" | "square";

export interface GridConfig {
  cellShape: CellShape;
  cellSize: number;
  height: number;
  loops: boolean;
  ruleset: Ruleset;
  screenDoor: boolean;
  width: number;
}
