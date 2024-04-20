import { CellShape } from "./classes";
import { RulesetName } from "./rulesets";
import { getCanvasSize } from "./utils";

// angle of hexagonal side
const a = (2 * Math.PI) / 6;
const CANVAS_ID = "canvas";
const defaultCellShape: CellShape = "square";
const defaultCellSize = 6;
const defaultGridLoops = true;
const { height: defaultHeight, width: defaultWidth } = getCanvasSize();
const defaultRulesetName: RulesetName = RulesetName.CONWAY;
const defaultThrottleAmount = 10;
const possibleColors = [
  "#430f6e",
  "#472765",
  "#566888",
  "#506e86",
  "#37566f",
  "#FFC0CB",
];

export {
  a,
  CANVAS_ID,
  defaultCellShape,
  defaultCellSize,
  defaultGridLoops,
  defaultHeight,
  defaultRulesetName,
  defaultThrottleAmount,
  defaultWidth,
  possibleColors,
};
