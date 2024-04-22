import {
  Blur,
  Conway,
  Ecology,
  GameConfig,
  MazeGenerator,
  Pokemon,
  RockPaperScissors,
  RulesetName,
  Snowflake,
  War,
  WaterFlow,
} from "../../internal";

const createRuleset = (rulesetName: RulesetName, config?: GameConfig) => {
  switch (rulesetName) {
    case RulesetName.BLUR:
      return new Blur(config);
    case RulesetName.CONWAY:
      return new Conway(config);
    case RulesetName.ECOLOGY:
      return new Ecology(config);
    case RulesetName.MAZE_GENERATOR:
      return new MazeGenerator(config);
    case RulesetName.POKEMON:
      return new Pokemon(config);
    case RulesetName.ROCK_PAPER_SCISSORS:
      return new RockPaperScissors(config);
    case RulesetName.SNOWFLAKE:
      return new Snowflake(config);
    case RulesetName.WAR:
      return new War(config);
    case RulesetName.WATER_FLOW:
      return new WaterFlow(config);
  }
};

export default createRuleset;
