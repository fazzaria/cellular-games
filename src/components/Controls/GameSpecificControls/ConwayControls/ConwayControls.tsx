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
import { ConwayColorProp } from "./types";
import { useGameSpecificOptions } from "../hooks";

const conwayColorProps = [
  "liveColor",
  "deadColor",
  "startingEnvelopeColor",
  "finalEnvelopeColor",
] as ConwayColorProp[];

const ConwayControls = () => {
  const { grid } = useContext(GameContext);
  const { config, handleUpdate } = useGameSpecificOptions<ConwayConfig>(
    RulesetName.CONWAY
  );

  const neighborNumbers =
    grid.config.cellShape === "hex"
      ? [0, 1, 2, 3, 4, 5, 6]
      : [0, 1, 2, 3, 4, 5, 6, 7, 8];

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
      <Grid item md={6} xs={12}>
        <FormGroup row>
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
          {config.showEnvelope && (
            <FormControlLabel
              control={
                <Checkbox
                  checked={config.showEnvelopeGradient}
                  onChange={(e) => {
                    handleUpdate({
                      ...config,
                      showEnvelopeGradient: e.target.checked,
                    });
                  }}
                  name={"envelope-gradient-checkbox"}
                />
              }
              label={"Envelope Gradient"}
            />
          )}
        </FormGroup>
      </Grid>
      <Grid item md={6} xs={12}>
        {config.showEnvelope && config.showEnvelopeGradient && (
          <TextField
            fullWidth
            label="Envelope Gradient Steps"
            type="number"
            onChange={(e) =>
              handleUpdate({
                ...config,
                envelopeGradientSteps: parseInt(e.target.value),
              })
            }
            value={config.envelopeGradientSteps}
          />
        )}
      </Grid>
      <Grid container item xs={12} spacing={2}>
        {conwayColorProps.map((color: ConwayColorProp) => {
          if (
            (!config.showEnvelope && color === "startingEnvelopeColor") ||
            ((!config.showEnvelope || !config.showEnvelopeGradient) &&
              color === "finalEnvelopeColor")
          )
            return null;
          let label = "Alive Color";
          if (color === "deadColor") {
            label = "Dead Color";
          } else if (color === "startingEnvelopeColor") {
            label = config.showEnvelopeGradient
              ? "Initial Envelope Color"
              : "Envelope Color";
          } else if (color === "finalEnvelopeColor") {
            label = "Final Envelope Color";
          }
          return (
            <Grid item key={`conway-color-config-${color}`}>
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
      <Grid item md={6} xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={config.mortalCells}
              onChange={(e) => {
                handleUpdate({
                  ...config,
                  mortalCells: e.target.checked,
                });
              }}
              name={"mortal-cells-checkbox"}
            />
          }
          label={"Mortal Cells (Cells Die After X Ticks)"}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        {config.mortalCells && (
          <TextField
            fullWidth
            label="Cell Lifespan"
            type="number"
            onChange={(e) =>
              handleUpdate({
                ...config,
                cellLifespan: parseInt(e.target.value),
              })
            }
            value={config.cellLifespan}
          />
        )}
      </Grid>
    </>
  );
};

export default ConwayControls;
