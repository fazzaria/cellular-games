import { createRuleset, getCanvasSize, GridConfig } from "../../../internal";
import {
  defaultCellShape,
  defaultCellSize,
  defaultGridLoops,
  defaultRulesetName,
} from "../defaultConfigValues";

const { height, width } = getCanvasSize();

const defaultGridConfig: GridConfig = {
  cellShape: defaultCellShape,
  cellSize: defaultCellSize,
  height,
  loops: defaultGridLoops,
  ruleset: createRuleset(defaultRulesetName),
  screenDoor: false,
  width,
};

export default defaultGridConfig;
