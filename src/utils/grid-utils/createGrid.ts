import { Grid } from "../../classes";
import { GlobalConfig } from "../../context/types";
import { getCanvasSize } from "../canvas-utils";
import { createRuleset } from "../ruleset-utils";

const createGrid = (config: GlobalConfig) => {
  const { height, width } = getCanvasSize();
  const { cellShape, cellSize, loops } = config.gridConfig;
  return new Grid({
    height,
    width,
    cellShape,
    cellSize,
    loops,
    ruleset: createRuleset(
      config.rulesetName,
      config.savedConfigs[config.rulesetName]
    ),
  });
};

export default createGrid;
