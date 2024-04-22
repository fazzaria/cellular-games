import { GameConfig } from "../../classes";
import { defaultGameOptions } from "../../const";
import { RulesetName } from "../../rulesets";

const initializeConfigs = () => {
  const savedConfigs = {};
  Object.keys(RulesetName).forEach((rulesetName: RulesetName) => {
    savedConfigs[rulesetName] = defaultGameOptions[rulesetName];
  });
  return savedConfigs as { [key in RulesetName]: GameConfig };
};

export default initializeConfigs;
