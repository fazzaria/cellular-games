import defaultGridConfig from "./defaultGridConfig";
import { GlobalConfig } from "../../../context";
import {
  defaultRulesetName,
  defaultThrottleAmount,
} from "../defaultConfigValues";
import { initializeConfigs } from "../../../utils";

const defaultGlobalConfig: GlobalConfig = {
  gridConfig: defaultGridConfig,
  rulesetName: defaultRulesetName,
  savedConfigs: initializeConfigs(),
  throttleAmount: defaultThrottleAmount,
};

export default defaultGlobalConfig;
