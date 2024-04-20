import {
  RulesetName,
  defaultBlurConfig,
  defaultConwayConfig,
  defaultEcologyConfig,
  defaultMazeConfig,
  defaultPokemonConfig,
  defaultWaterFlowConfig,
} from "../../rulesets";
import { defaultRPSConfig } from "../../rulesets/RockPaperScissors/types";
import { defaultSnowflakeConfig } from "../../rulesets/Snowflake/types";
import { defaultWarConfig } from "../../rulesets/War/types";

const getDefaultConfig = (rulsetName: RulesetName) => {
  switch (rulsetName) {
    case RulesetName.BLUR:
      return defaultBlurConfig;
    case RulesetName.CONWAY:
      return defaultConwayConfig;
    case RulesetName.ECOLOGY:
      return defaultEcologyConfig;
    case RulesetName.MAZE_GENERATOR:
      return defaultMazeConfig;
    case RulesetName.POKEMON:
      return defaultPokemonConfig;
    case RulesetName.ROCK_PAPER_SCISSORS:
      return defaultRPSConfig;
    case RulesetName.SNOWFLAKE:
      return defaultSnowflakeConfig;
    case RulesetName.WAR:
      return defaultWarConfig;
    case RulesetName.WATER_FLOW:
      return defaultWaterFlowConfig;
    default:
      return null;
  }
};

export default getDefaultConfig;
