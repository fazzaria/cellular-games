import { Grid } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { MazeConfig, RulesetName } from "../../../../internal";
import { MazeColorProp, MazeControlsProps } from "./types";

const mazeColorProps = ["liveColor", "deadColor"] as MazeColorProp[];

const MazeControls = ({ config, setConfig }: MazeControlsProps) => {
  const handleUpdate = (newConfig: MazeConfig) => {
    setConfig(RulesetName.MAZE_GENERATOR, newConfig);
  };

  return (
    <>
      <Grid container item xs={12} spacing={2}>
        {mazeColorProps.map((color: MazeColorProp) => {
          let label = "Alive Color";
          if (color === "deadColor") {
            label = "Dead Color";
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
