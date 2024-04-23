import { GameConfig } from "../../../classes";
import {
  RulesetName,
  Preset,
  PokemonType,
  ConwayConfig,
  MazeConfig,
  PokemonGameConfig,
  RPSGameConfig,
  SnowflakeGameConfig,
  WarGameConfig,
  WaterFlowGameConfig,
} from "../../../internal";
import defaultPokemonColors from "./defaultPokemonColors";

const defaultGameOptions: { [key in RulesetName]: GameConfig } = {
  [RulesetName.CONWAY]: {
    cellLifespan: 10,
    deadColor: "#293462",
    envelopeGradientSteps: 20,
    finalEnvelopeColor: "#D800A6",
    neighborsNeededToReproduce: [3],
    neighborsNeededToSurvive: [2, 3],
    liveColor: "#B59410",
    liveStartPercent: 10,
    mortalCells: true,
    preset: Preset.DEFAULT,
    showEnvelope: true,
    showEnvelopeGradient: true,
    startingEnvelopeColor: "#5E78E0",
  } as ConwayConfig,
  [RulesetName.MAZE_GENERATOR]: {
    deadColor: "#640d14",
    neighborsNeededToReproduce: [3],
    neighborsNeededToSurvive: [2, 3],
    liveColor: "#90be6d",
    liveStartPercent: 10,
  } as MazeConfig,
  [RulesetName.POKEMON]: {
    allowedTypes: Object.keys(PokemonType).map((key) => PokemonType[key]),
    randomMutationChance: 750,
    typeColors: defaultPokemonColors,
  } as PokemonGameConfig,
  [RulesetName.ROCK_PAPER_SCISSORS]: {
    rockColor: "#FF218C",
    paperColor: "#FFD800",
    scissorsColor: "#21B1FF",
  } as RPSGameConfig,
  [RulesetName.SNOWFLAKE]: {
    deadColor: "#161b33",
    liveColor: "#639fab",
  } as SnowflakeGameConfig,
  [RulesetName.WAR]: {
    factionColors: ["#edae49", "#d1495b", "#00798c", "#30638e", "#003d5b"],
  } as WarGameConfig,
  [RulesetName.WATER_FLOW]: {
    averageStartingWaterCells: 20,
    backgroundBlurAmount: 1,
    baseBackgroundColor: "#0b0027",
    blurBackground: true,
    branchingChance: 5,
    rockHealthVariance: 5,
    trueRandom: true,
    waterColors: ["#3e8090", "#1a546a", "#F6FDC3", "#D74B76", "#FF8080"],
  } as WaterFlowGameConfig,
};

export default defaultGameOptions;
