import { Grid } from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import { MazeConfig, RulesetName } from "../../../../internal";
import { MazeColorProp } from "./types";
import { useContext, useMemo } from "react";
import { ControlsContext } from "../../context";

const mazeColorProps = ["liveColor", "deadColor"] as MazeColorProp[];

const MazeControls = () => {
  const { newGameConfigs, setNewGameConfigs } = useContext(ControlsContext);
  const config = useMemo(
    () => newGameConfigs.MAZE_GENERATOR as MazeConfig,
    [newGameConfigs.MAZE_GENERATOR]
  );
  const handleUpdate = (newConwayConfig: MazeConfig) => {
    setNewGameConfigs({
      ...newGameConfigs,
      [RulesetName.MAZE_GENERATOR]: newConwayConfig,
    });
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
