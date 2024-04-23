import { Grid } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { RPSGameConfig, RulesetName } from "../../../../internal";
import { useGameSpecificOptions } from "../hooks";

const RockPaperScissorsControls = () => {
  const { config, handleUpdate } = useGameSpecificOptions<RPSGameConfig>(
    RulesetName.ROCK_PAPER_SCISSORS
  );

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
