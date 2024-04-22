import { Grid } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { RockPaperScissorsControlsProps } from "./types";
import { RPSGameConfig, RulesetName } from "../../../../internal";

const RockPaperScissorsControls = ({
  config,
  setConfig,
}: RockPaperScissorsControlsProps) => {
  const handleUpdate = (newConfig: RPSGameConfig) => {
    setConfig(RulesetName.ROCK_PAPER_SCISSORS, newConfig);
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
