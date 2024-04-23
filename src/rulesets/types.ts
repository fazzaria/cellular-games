export enum RulesetName {
  CONWAY = "CONWAY",
  MAZE_GENERATOR = "MAZE_GENERATOR",
  POKEMON = "POKEMON",
  ROCK_PAPER_SCISSORS = "ROCK_PAPER_SCISSORS",
  SNOWFLAKE = "SNOWFLAKE",
  WAR = "WAR",
  WATER_FLOW = "WATER_FLOW",
}

export const rulesetDisplayNameMap = {
  [RulesetName.CONWAY]: "Conway's Game of Life",
  [RulesetName.MAZE_GENERATOR]: "Maze Generator",
  [RulesetName.POKEMON]: "Pokémon Matchups",
  [RulesetName.ROCK_PAPER_SCISSORS]: "Rock, Paper, Scissors",
  [RulesetName.SNOWFLAKE]: "Snowflake Generator",
  [RulesetName.WAR]: "War",
  [RulesetName.WATER_FLOW]: "Streams",
};
