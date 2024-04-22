/* 
manage export order to avoid circular dependencies 
https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de
this feels hacky but it stops the app from crashing for now
*/
export * from "./const/math";
export * from "./const/strings";
export * from "./utils/arrayUtils";
export * from "./utils/colorUtils";
export * from "./rulesets/Blur/types";
export * from "./rulesets/RockPaperScissors/types";
export * from "./rulesets/Snowflake/types";
export * from "./rulesets/War/types";
export * from "./rulesets/types";
export * from "./classes/Cell/types";
export * from "./classes/Grid/types";
export * from "./classes/Ruleset/types";
export * from "./const/defaults/defaultConfigValues";
// todo: remove this
export const possibleColors = [
  "#430f6e",
  "#472765",
  "#566888",
  "#506e86",
  "#37566f",
  "#FFC0CB",
];

export { default as Cell } from "./classes/Cell/Cell";

// depends on Cell
export * from "./rulesets/Conway/types";
export * from "./rulesets/Ecology/types";
export * from "./rulesets/MazeGenerator/types";
export * from "./rulesets/Pokemon/types";
export * from "./rulesets/WaterFlow/types";

// depends on Cell, angleOfHexagonalSide, and CANVAS_ID
export * from "./utils/canvasUtils";

// depends on Cell
export { default as createHexRows } from "./utils/gridUtils/createHexRows";
export { default as createSquareRows } from "./utils/gridUtils/createSquareRows";
export { default as getCellById } from "./utils/gridUtils/getCellById";
export { default as getNeighbors } from "./utils/gridUtils/getNeighbors";
export { default as getRandomCell } from "./utils/gridUtils/getRandomCell";

export { default as Ruleset } from "./classes/Ruleset/Ruleset";
export { default as Grid } from "./classes/Grid/Grid";
export * from "./context/types";

export { default as defaultPokemonColors } from "./const/defaults/gameSpecificOptions/defaultPokemonColors";
export { default as defaultGameOptions } from "./const/defaults/gameSpecificOptions/defaultGameOptions";
export { default as Blur } from "./rulesets/Blur/Blur";
export { default as Conway } from "./rulesets/Conway/Conway";
export { default as Ecology } from "./rulesets/Ecology/Ecology";
export { default as MazeGenerator } from "./rulesets/MazeGenerator/MazeGenerator";
export { default as Pokemon } from "./rulesets/Pokemon/Pokemon";
export { default as RockPaperScissors } from "./rulesets/RockPaperScissors/RockPaperScissors";
export { default as Snowflake } from "./rulesets/Snowflake/Snowflake";
export { default as War } from "./rulesets/War/War";
export { default as WaterFlow } from "./rulesets/WaterFlow/WaterFlow";
export { default as createRuleset } from "./utils/rulesetUtils/createRuleset";
export { default as createGrid } from "./utils/gridUtils/createGrid";
export { default as initializeConfigs } from "./utils/rulesetUtils/initializeConfigs";
export { default as defaultGlobalConfig } from "./const/defaults/globalOptions/defaultGlobalConfig";
export { default as GameContext } from "./context/GameContext";

export { default as useCanvas } from "./hooks/useCanvas";
export { default as GameContextProvider } from "./context/GameContextProvider";
export { default as Canvas } from "./components/Canvas/Canvas";
export { default as GameDescription } from "./components/GameDescription/GameDescription";
export { default as Controls } from "./components/Controls/Controls";
export { default as GameScreen } from "./components/GameScreen/GameScreen";
export { default as App } from "./App";
