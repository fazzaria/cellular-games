import defaultGridConfig from "./defaultGridConfig";
import { GlobalConfig, initializeConfigs } from "../../../internal";
import {
  defaultRulesetName,
  defaultThrottleAmount,
} from "../defaultConfigValues";

const defaultGlobalConfig: GlobalConfig = {
  gridConfig: defaultGridConfig,
  rulesetName: defaultRulesetName,
  savedConfigs: initializeConfigs(),
  throttleAmount: defaultThrottleAmount,
};

export default defaultGlobalConfig;
