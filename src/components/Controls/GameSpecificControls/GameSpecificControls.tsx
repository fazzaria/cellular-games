import { Grid, Typography, Button } from "@mui/material";
import { defaultGameOptions, RulesetName } from "../../../internal";
import { ConwayControls } from "./ConwayControls";
import { PokemonControls } from "./PokemonControls";
import { RockPaperScissorsControls } from "./RockPaperScissorsControls";
import { MazeControls } from "./MazeControls";
import { SnowflakeControls } from "./SnowflakeControls";
import { WarControls } from "./WarControls.ts";
import { WaterFlowControls } from "./WaterFlowControls";
import { useContext, useMemo } from "react";
import { ControlsContext } from "../context";

const GameSpecificControls = () => {
  const {
    newGameConfigs,
    newGlobalConfig: { rulesetName },
    setNewGameConfigs,
  } = useContext(ControlsContext);

  const Component = useMemo(() => {
    switch (rulesetName) {
      case RulesetName.CONWAY:
        return () => <ConwayControls />;
      case RulesetName.MAZE_GENERATOR:
        return () => <MazeControls />;
      case RulesetName.POKEMON:
        return () => <PokemonControls />;
      case RulesetName.ROCK_PAPER_SCISSORS:
        return () => <RockPaperScissorsControls />;
      case RulesetName.SNOWFLAKE:
        return () => <SnowflakeControls />;
      case RulesetName.WAR:
        return () => <WarControls />;
      case RulesetName.WATER_FLOW:
        return () => <WaterFlowControls />;
      default:
        return null;
    }
  }, [rulesetName]);

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
              setNewGameConfigs({
                ...newGameConfigs,
                [rulesetName]: defaultGameOptions[rulesetName],
              })
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
