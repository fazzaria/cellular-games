import { Grid } from "../../classes";
import { GlobalConfig } from "../../context/types";
import { getCanvasSize } from "../canvasUtils";
import { createRuleset } from "../rulesetUtils";

const createGrid = (config: GlobalConfig) => {
  const { height, width } = getCanvasSize();
  return new Grid({
    ...config.gridConfig,
    height,
    ruleset: createRuleset(
      config.rulesetName,
      config.savedConfigs[config.rulesetName]
    ),
    width,
  });
};

export default createGrid;
