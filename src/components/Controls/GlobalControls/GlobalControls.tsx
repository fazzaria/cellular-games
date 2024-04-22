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
  Checkbox,
} from "@mui/material";
import {
  CellShape,
  defaultCellSize,
  defaultGlobalConfig,
  defaultThrottleAmount,
  GameDescription,
  rulesetDisplayNameMap,
  RulesetName,
} from "../../../internal";
import { GlobalControlsProps } from "./types";

const GlobalControls = ({ config, setConfig }: GlobalControlsProps) => {
  const { gridConfig, rulesetName, throttleAmount } = config;
  const updateGridConfig = (prop: string, value: any) => {
    setConfig({
      ...config,
      gridConfig: { ...gridConfig, [prop]: value },
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
          helperText={<GameDescription rulesetName={rulesetName} />}
          label="Game Mode"
          onChange={(e) => {
            setConfig({
              ...config,
              rulesetName: e.target.value as RulesetName,
            });
          }}
          select
          value={rulesetName}
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
            value={gridConfig.cellShape}
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
          value={gridConfig.cellSize}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              checked={gridConfig.loops}
              onChange={(e) => {
                updateGridConfig("loops", e.target.checked);
              }}
              name={`enable-type-select-all-checkbox`}
              value={gridConfig.loops}
            />
          }
          label={"Wrap Grid"}
        />
      </Grid>
      <Grid item md={6} xs={12}>
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
          value={throttleAmount}
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
