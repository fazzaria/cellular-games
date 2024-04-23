import {
  createRuleset,
  GameSpecificConfig,
  getCanvasSize,
  GlobalConfig,
  Grid,
  RulesetName,
} from "../../internal";

const createGrid = (
  rulesetName: RulesetName,
  globalConfig: GlobalConfig,
  gameSpecificConfig: GameSpecificConfig
) => {
  const { height, width } = getCanvasSize();
  const ruleset = createRuleset(rulesetName, gameSpecificConfig);
  const { gridConfig } = globalConfig;
  return new Grid({
    ...gridConfig,
    height,
    ruleset,
    width,
  });
};

export default createGrid;
