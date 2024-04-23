import { GlobalConfig, GridConfig, RulesetName } from "../../../internal";
import defaultGlobalConfig from "./defaultGlobalConfig";
import defaultGridConfig from "./defaultGridConfig";

type Override = Omit<Partial<GlobalConfig>, "gridConfig"> & {
  gridConfig?: Partial<GridConfig>;
};

const overrideDefaultGlobalConfig = (config: Override) => {
  const { gridConfig, ...otherConfigs } = config;
  return {
    ...defaultGlobalConfig,
    ...otherConfigs,
    gridConfig: { ...defaultGridConfig, ...(gridConfig ? gridConfig : {}) },
  } as GlobalConfig;
};

const defaultGlobalConfigs: { [key in RulesetName]: GlobalConfig } = {
  [RulesetName.CONWAY]: overrideDefaultGlobalConfig({}),
  [RulesetName.MAZE_GENERATOR]: overrideDefaultGlobalConfig({}),
  [RulesetName.POKEMON]: overrideDefaultGlobalConfig({
    gridConfig: { cellShape: "hex" },
  }),
  [RulesetName.ROCK_PAPER_SCISSORS]: overrideDefaultGlobalConfig({
    gridConfig: { cellShape: "hex" },
  }),
  [RulesetName.SNOWFLAKE]: overrideDefaultGlobalConfig({}),
  [RulesetName.WAR]: overrideDefaultGlobalConfig({
    gridConfig: { cellShape: "hex" },
  }),
  [RulesetName.WATER_FLOW]: overrideDefaultGlobalConfig({
    gridConfig: { cellShape: "hex", cellSize: 12 },
  }),
};

Object.keys(defaultGlobalConfigs).forEach(
  (key: RulesetName) => (defaultGlobalConfigs[key].rulesetName = key)
);

export default defaultGlobalConfigs;
