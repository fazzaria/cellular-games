import { Grid } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { SnowflakeGameConfig, RulesetName } from "../../../../internal";
import { SnowflakeColorProp } from "./types";
import { useGameSpecificOptions } from "../hooks";

const mazeColorProps = ["liveColor", "deadColor"] as SnowflakeColorProp[];

const SnowflakeControls = () => {
  const { config, handleUpdate } = useGameSpecificOptions<SnowflakeGameConfig>(
    RulesetName.SNOWFLAKE
  );

  return (
    <>
      <Grid container item xs={12} spacing={2}>
        {mazeColorProps.map((color: SnowflakeColorProp) => {
          let label = "Alive Color";
          if (color === "deadColor") {
            label = "Dead Color";
          }
          return (
            <Grid item key={`snowflake-color-config-${color}`}>
              <MuiColorInput
                format="hex"
                label={label}
                value={config[color]}
                onChange={(newColor) =>
                  handleUpdate({
                    ...config,
                    [color]: newColor,
                  })
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SnowflakeControls;
