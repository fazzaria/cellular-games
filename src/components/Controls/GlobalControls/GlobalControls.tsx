import {
  Grid,
  Typography,
  Divider,
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { CellShape } from "../../../classes";
import { defaultCellSize, defaultThrottleAmount } from "../../../const";
import { RulesetName, rulesetDisplayNameMap } from "../../../rulesets";
import { GlobalControlsProps } from "./types";
import { defaultGlobalConfig } from "../../../context";
import { GameDescription } from "../../GameDescription";

const GlobalControls = ({ config, setConfig }: GlobalControlsProps) => {
  const updateGridConfig = (prop: string, value: any) => {
    setConfig({
      ...config,
      gridConfig: { ...config.gridConfig, [prop]: value },
    });
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography>Global Settings</Typography>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          helperText={<GameDescription rulesetName={config.rulesetName} />}
          label="Game Mode"
          onChange={(e) => {
            setConfig({
              ...config,
              rulesetName: e.target.value as RulesetName,
            });
          }}
          select
          value={config.rulesetName}
        >
          {Object.keys(RulesetName).map((name) => {
            return (
              <MenuItem key={name} value={name}>
                {rulesetDisplayNameMap[name]}
              </MenuItem>
            );
          })}
        </TextField>
      </Grid>
      <Grid item md={6} xs={12}>
        <FormControl>
          <FormLabel>Cell Shape</FormLabel>
          <RadioGroup
            row
            name="cell-shape-buttons-group"
            onChange={(e) => {
              updateGridConfig(
                "cellShape",
                (e.target as HTMLInputElement).value as CellShape
              );
            }}
            value={config.gridConfig.cellShape}
          >
            <FormControlLabel
              value="hex"
              control={<Radio />}
              label="Hexagonal"
            />
            <FormControlLabel
              value="square"
              control={<Radio />}
              label="Square"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          label="Cell Size"
          type="number"
          onChange={(e) =>
            updateGridConfig(
              "cellSize",
              parseInt(e.target.value) ?? defaultCellSize
            )
          }
          value={config.gridConfig.cellSize}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          helperText="WARNING: Low throttle amounts may create patterns of flashing lights."
          label="Animation Throttle Amount"
          type="number"
          onChange={(e) =>
            setConfig({
              ...config,
              throttleAmount: parseInt(e.target.value) ?? defaultThrottleAmount,
            })
          }
          value={config.throttleAmount}
        />
      </Grid>
      <Grid item xs={12}>
        <Button onClick={() => setConfig(defaultGlobalConfig)}>
          Reset to Default
        </Button>
      </Grid>
    </>
  );
};

export default GlobalControls;
