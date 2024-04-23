import { Grid, Typography, Button } from "@mui/material";
import {
  ConwayConfig,
  defaultGameOptions,
  GameConfig,
  MazeConfig,
  PokemonGameConfig,
  RPSGameConfig,
  RulesetName,
  SnowflakeGameConfig,
  WarGameConfig,
  WaterFlowGameConfig,
} from "../../../internal";
import { ConwayControls } from "./ConwayControls";
import { PokemonControls } from "./PokemonControls";
import { RockPaperScissorsControls } from "./RockPaperScissorsControls";
import { GameSpecificControlsProps, UpdateConfigFn } from "./types";
import { MazeControls } from "./MazeControls";
import { SnowflakeControls } from "./SnowflakeControls";
import { WarControls } from "./WarControls.ts";
import { WaterFlowControls } from "./WaterFlowControls";

const GameSpecificControls = ({
  configs,
  rulesetName,
  setConfigs,
}: GameSpecificControlsProps) => {
  const handleUpdateConfig: UpdateConfigFn = (
    prop: RulesetName,
    value: GameConfig
  ) => {
    setConfigs({ ...configs, [prop]: value });
  };

  let Component = null;

  switch (rulesetName) {
    case RulesetName.CONWAY:
      Component = () => (
        <ConwayControls
          config={configs[rulesetName] as ConwayConfig}
          setConfig={handleUpdateConfig}
        />
      );
      break;
    case RulesetName.MAZE_GENERATOR:
      Component = () => (
        <MazeControls
          config={configs[rulesetName] as MazeConfig}
          setConfig={handleUpdateConfig}
        />
      );
      break;
    case RulesetName.POKEMON:
      Component = () => (
        <PokemonControls
          config={configs[rulesetName] as PokemonGameConfig}
          setConfig={handleUpdateConfig}
        />
      );
      break;
    case RulesetName.ROCK_PAPER_SCISSORS:
      Component = () => (
        <RockPaperScissorsControls
          config={configs[rulesetName] as RPSGameConfig}
          setConfig={handleUpdateConfig}
        />
      );
      break;
    case RulesetName.SNOWFLAKE:
      Component = () => (
        <SnowflakeControls
          config={configs[rulesetName] as SnowflakeGameConfig}
          setConfig={handleUpdateConfig}
        />
      );
      break;
    case RulesetName.WAR:
      Component = () => (
        <WarControls
          config={configs[rulesetName] as WarGameConfig}
          setConfig={handleUpdateConfig}
        />
      );
      break;
    case RulesetName.WATER_FLOW:
      Component = () => (
        <WaterFlowControls
          config={configs[rulesetName] as WaterFlowGameConfig}
          setConfig={handleUpdateConfig}
        />
      );
      break;

    default:
      break;
  }
  return (
    <>
      {Component === null ? (
        <Grid item xs={12}>
          <Typography>
            No settings have been developed for this game yet.
          </Typography>
        </Grid>
      ) : (
        <Component />
      )}
      {Component !== null && (
        <Grid item xs={12}>
          <Button
            onClick={() =>
              handleUpdateConfig(rulesetName, defaultGameOptions[rulesetName])
            }
          >
            Reset to Default
          </Button>
        </Grid>
      )}
    </>
  );
};

export default GameSpecificControls;
