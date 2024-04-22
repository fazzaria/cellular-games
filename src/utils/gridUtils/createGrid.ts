import {
  createRuleset,
  getCanvasSize,
  GlobalConfig,
  Grid,
} from "../../internal";

const createGrid = (config: GlobalConfig) => {
  const { height, width } = getCanvasSize();
  const ruleset = createRuleset(
    config.rulesetName,
    config.savedConfigs[config.rulesetName]
  );
  const { gridConfig } = config;
  return new Grid({
    ...gridConfig,
    height,
    ruleset,
    width,
  });
};

export default createGrid;
