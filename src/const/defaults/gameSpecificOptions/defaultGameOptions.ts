import { GameConfig } from "../../../classes";
import {
  RulesetName,
  Preset,
  PokemonType,
  BlurConfig,
  ConwayConfig,
  MazeConfig,
  EcologyGameConfig,
  PokemonGameConfig,
  RPSGameConfig,
  WaterFlowGameConfig,
} from "../../../rulesets";
import { SnowflakeGameConfig } from "../../../rulesets/Snowflake/types";
import { WarGameConfig } from "../../../rulesets/War/types";
import defaultPokemonColors from "./defaultPokemonColors";

const defaultGameOptions: { [key in RulesetName]: GameConfig } = {
  [RulesetName.BLUR]: { blurSlowness: 10 } as BlurConfig,
  [RulesetName.CONWAY]: {
    deadColor: "#293462",
    envelopeColor: "#5E78E0",
    neighborsNeededToReproduce: [3],
    neighborsNeededToSurvive: [2, 3],
    liveColor: "#D800A6",
    liveStartPercent: 10,
    preset: Preset.DEFAULT,
    showEnvelope: false,
  } as ConwayConfig,
  [RulesetName.ECOLOGY]: {} as EcologyGameConfig,
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
  [RulesetName.SNOWFLAKE]: {} as SnowflakeGameConfig,
  [RulesetName.WAR]: {} as WarGameConfig,
  [RulesetName.WATER_FLOW]: {} as WaterFlowGameConfig,
};

export default defaultGameOptions;
