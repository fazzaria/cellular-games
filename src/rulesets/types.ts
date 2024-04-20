export enum RulesetName {
  BLUR = "BLUR",
  CONWAY = "CONWAY",
  ECOLOGY = "ECOLOGY",
  MAZE_GENERATOR = "MAZE_GENERATOR",
  POKEMON = "POKEMON",
  ROCK_PAPER_SCISSORS = "ROCK_PAPER_SCISSORS",
  SNOWFLAKE = "SNOWFLAKE",
  WAR = "WAR",
  WATER_FLOW = "WATER_FLOW",
}

export const rulesetDisplayNameMap = {
  [RulesetName.BLUR]: "Blur",
  [RulesetName.CONWAY]: "Conway's Game of Life",
  [RulesetName.ECOLOGY]: "Ecology",
  [RulesetName.MAZE_GENERATOR]: "Maze Generator",
  [RulesetName.POKEMON]: "Pokémon Matchups",
  [RulesetName.ROCK_PAPER_SCISSORS]: "Rock, Paper, Scissors",
  [RulesetName.SNOWFLAKE]: "Snowflake Generator",
  [RulesetName.WAR]: "War",
  [RulesetName.WATER_FLOW]: "Streams",
};

