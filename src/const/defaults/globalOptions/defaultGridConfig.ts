import { GridConfig } from "../../../classes";
import {
  defaultCellShape,
  defaultCellSize,
  defaultGridLoops,
  defaultRulesetName,
} from "../defaultConfigValues";
import { createRuleset, getCanvasSize } from "../../../utils";

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
