import { Grid } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { RPSGameConfig, RulesetName } from "../../../../internal";
import { useContext, useMemo } from "react";
import { ControlsContext } from "../../context";

const RockPaperScissorsControls = () => {
  const { newGameConfigs, setNewGameConfigs } = useContext(ControlsContext);
  const config = useMemo(
    () => newGameConfigs.ROCK_PAPER_SCISSORS as RPSGameConfig,
    [newGameConfigs.ROCK_PAPER_SCISSORS]
  );
  const handleUpdate = (newRPSConfig: RPSGameConfig) => {
    setNewGameConfigs({
      ...newGameConfigs,
      [RulesetName.ROCK_PAPER_SCISSORS]: newRPSConfig,
    });
  };

  return (
    <>
      {["rockColor", "paperColor", "scissorsColor"].map(
        (color: keyof RPSGameConfig, i) => (
          <Grid item xs={12} key={`rpg-color-config-${color}`}>
            <MuiColorInput
              format="hex"
              label={`Color ${i + 1}`}
              value={config[color]}
              onChange={(newColor) =>
                handleUpdate({
                  ...config,
                  [color]: newColor,
                })
              }
            />
          </Grid>
        )
      )}
    </>
  );
};

export default RockPaperScissorsControls;
