import { useContext, useMemo, useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { MuiColorInput } from "mui-color-input";
import {
  RulesetName,
  WaterFlowGameConfig,
  getRandomColor,
} from "../../../../internal";
import { ControlsContext } from "../../context";

const WaterFlowControls = () => {
  const { newGameConfigs, setNewGameConfigs } = useContext(ControlsContext);
  const config = useMemo(
    () => newGameConfigs.WATER_FLOW as WaterFlowGameConfig,
    [newGameConfigs.WATER_FLOW]
  );
  const handleUpdate = (newWaterFlowConfig: WaterFlowGameConfig) => {
    setNewGameConfigs({
      ...newGameConfigs,
      [RulesetName.WATER_FLOW]: newWaterFlowConfig,
    });
  };
  const [newWaterColor, setNewWaterColor] = useState(getRandomColor());
  const { waterColors } = config;

  return (
    <>
      <Grid container item xs={12} spacing={2}>
        <Grid item>
          <TextField
            fullWidth
            label="Average Number of Starting Streams"
            type="number"
            onChange={(e) =>
              handleUpdate({
                ...config,
                averageStartingWaterCells: parseInt(e.target.value),
              })
            }
            value={config.averageStartingWaterCells}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Branching-Off Chance"
            type="number"
            onChange={(e) =>
              handleUpdate({
                ...config,
                branchingChance: parseInt(e.target.value),
              })
            }
            value={config.branchingChance}
          />
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Rock Health Variation"
            type="number"
            onChange={(e) =>
              handleUpdate({
                ...config,
                rockHealthVariance: parseInt(e.target.value),
              })
            }
            value={config.rockHealthVariance}
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={config.blurBackground}
                onChange={(e) => {
                  handleUpdate({
                    ...config,
                    trueRandom: e.target.checked,
                  });
                }}
                name={"true-random-checkbox"}
              />
            }
            label={"Random Flow Direction"}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={2} alignItems="center">
        <Grid item>
          <FormControlLabel
            control={
              <Checkbox
                checked={config.blurBackground}
                onChange={(e) => {
                  handleUpdate({
                    ...config,
                    blurBackground: e.target.checked,
                  });
                }}
                name={"blur-background-checkbox"}
              />
            }
            label={"Blur Background"}
          />
        </Grid>
        <Grid item>
          {config.blurBackground && (
            <TextField
              fullWidth
              label="Blur Amount"
              type="number"
              onChange={(e) =>
                handleUpdate({
                  ...config,
                  backgroundBlurAmount: parseInt(e.target.value),
                })
              }
              value={config.backgroundBlurAmount}
            />
          )}
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={2}>
        {waterColors.map((color, i) => {
          return (
            <Grid item key={`water-color-${color}`} alignItems="center">
              <Typography sx={{ color, display: "inline" }}>
                Color {i + 1}
              </Typography>
              <IconButton
                onClick={() => {
                  const newWaterColors = waterColors.filter(
                    (existingColor) => existingColor !== color
                  );
                  handleUpdate({ ...config, waterColors: newWaterColors });
                }}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          );
        })}
      </Grid>
      <Grid container item xs={12} spacing={2} alignItems="center">
        <Grid item>
          <MuiColorInput
            format="hex"
            label={"New Water Color"}
            value={newWaterColor}
            onChange={(newColor) => setNewWaterColor(newColor)}
          />
        </Grid>
        <Grid item>
          <IconButton
            onClick={() => {
              const newWaterColors = [...waterColors, newWaterColor];
              handleUpdate({ ...config, waterColors: newWaterColors });
              setNewWaterColor(getRandomColor());
            }}
          >
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <MuiColorInput
            format="hex"
            label={"Rock Color"}
            value={config.baseBackgroundColor}
            onChange={(newColor) =>
              handleUpdate({ ...config, baseBackgroundColor: newColor })
            }
          />
        </Grid>
      </Grid>
    </>
  );
};

export default WaterFlowControls;
