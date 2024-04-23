import { Grid } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { MazeConfig, RulesetName } from "../../../../internal";
import { MazeColorProp } from "./types";
import { useGameSpecificOptions } from "../hooks";

const mazeColorProps = ["liveColor", "deadColor"] as MazeColorProp[];

const MazeControls = () => {
  const { config, handleUpdate } = useGameSpecificOptions<MazeConfig>(
    RulesetName.MAZE_GENERATOR
  );

  return (
    <>
      <Grid container item xs={12} spacing={2}>
        {mazeColorProps.map((color: MazeColorProp) => {
          let label = "Wall Color";
          if (color === "deadColor") {
            label = "Background Color";
          }
          return (
            <Grid item key={`maze-color-config-${color}`}>
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

export default MazeControls;
