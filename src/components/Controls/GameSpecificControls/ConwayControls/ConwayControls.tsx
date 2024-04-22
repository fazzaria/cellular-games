import { useContext } from "react";
import {
  Grid,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { MuiColorInput } from "mui-color-input";
import {
  ConwayConfig,
  GameContext,
  Preset,
  RulesetName,
} from "../../../../internal";
import { presetDisplayNameMap } from "./const";
import { ConwayControlsProps } from "./types";

const ConwayControls = ({ config, setConfig }: ConwayControlsProps) => {
  const { grid } = useContext(GameContext);
  const neighborNumbers =
    grid.config.cellShape === "hex"
      ? [0, 1, 2, 3, 4, 5, 6]
      : [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const handleUpdate = (newConfig: ConwayConfig) => {
    setConfig(RulesetName.CONWAY, newConfig);
  };

  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Preset"
          onChange={(e) => {
            handleUpdate({ ...config, preset: e.target.value as Preset });
          }}
          select
          value={config.preset}
        >
          {Object.keys(Preset).map((preset) => (
            <MenuItem key={preset} value={Preset[preset]}>
              {presetDisplayNameMap[Preset[preset]]}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Average % Alive at Start"
          type="number"
          onChange={(e) =>
            handleUpdate({
              ...config,
              liveStartPercent: parseInt(e.target.value),
            })
          }
          value={config.liveStartPercent}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">
            Live Neighbors Required (Survival)
          </FormLabel>
          <FormGroup row>
            {neighborNumbers.map((num) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={config.neighborsNeededToSurvive.includes(num)}
                    onChange={(e) => {
                      let newNeighborsNeededToSurvive = [
                        ...config.neighborsNeededToSurvive,
                      ];
                      if (e.target.checked) {
                        newNeighborsNeededToSurvive.push(num);
                      } else {
                        newNeighborsNeededToSurvive =
                          newNeighborsNeededToSurvive.filter(
                            (val) => val !== num
                          );
                      }
                      handleUpdate({
                        ...config,
                        neighborsNeededToSurvive: newNeighborsNeededToSurvive,
                      });
                    }}
                    name={num.toString()}
                  />
                }
                label={num.toString()}
                key={`conway-survival-${num}`}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset" variant="standard">
          <FormLabel component="legend">
            Live Neighbors Required (Reproduction)
          </FormLabel>
          <FormGroup row>
            {neighborNumbers.map((num) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={config.neighborsNeededToReproduce.includes(num)}
                    onChange={(e) => {
                      let newNeighborsNeededToReproduce = [
                        ...config.neighborsNeededToReproduce,
                      ];
                      if (e.target.checked) {
                        newNeighborsNeededToReproduce.push(num);
                      } else {
                        newNeighborsNeededToReproduce =
                          newNeighborsNeededToReproduce.filter(
                            (val) => val !== num
                          );
                      }
                      handleUpdate({
                        ...config,
                        neighborsNeededToReproduce:
                          newNeighborsNeededToReproduce,
                      });
                    }}
                    name={num.toString()}
                  />
                }
                label={num.toString()}
                key={`conway-reproduction-${num}`}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={config.showEnvelope}
              onChange={(e) => {
                handleUpdate({
                  ...config,
                  showEnvelope: e.target.checked,
                });
              }}
              name={"show-envelope-checkbox"}
            />
          }
          label={"Show Envelope"}
        />
      </Grid>
      {["liveColor", "deadColor", "envelopeColor"].map(
        (color: "liveColor" | "deadColor" | "envelopeColor") => {
          if (!config.showEnvelope && color === "envelopeColor") return null;
          let label = "Alive Color";
          if (color === "deadColor") {
            label = "Dead Color";
          } else if (color === "envelopeColor") {
            label = "Envelope Color";
          }
          return (
            <Grid item xs={12} key={`conway-color-config-${color}`}>
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
        }
      )}
    </>
  );
};

export default ConwayControls;
