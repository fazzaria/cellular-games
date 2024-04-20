import { GameConfig } from "../../classes";
import { RulesetName } from "../../rulesets";
import getDefaultConfig from "./getDefaultConfig";

const initializeConfigs = () => {
  const savedConfigs = {};
  Object.keys(RulesetName).forEach((rulesetName: RulesetName) => {
    savedConfigs[rulesetName] = getDefaultConfig(rulesetName);
  });
  return savedConfigs as { [key in RulesetName]: GameConfig };
};

export default initializeConfigs;
