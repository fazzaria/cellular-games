import { useContext, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  GameConfigs,
  GameContext,
  GlobalConfig,
  clearCanvas,
  createGrid,
} from "../../internal";
import { GameSpecificControls } from "./GameSpecificControls";
import { GlobalControls } from "./GlobalControls";
import { ControlsProps } from "./types";

const Controls = ({ closeDrawer }: ControlsProps) => {
  const { globalConfig, setGlobalConfig, setGrid } = useContext(GameContext);
  const [newGlobalConfig, setNewGlobalConfig] = useState<GlobalConfig>({
    ...globalConfig,
  });
  const [gameSpecificConfigs, setGameSpecificConfigs] = useState<GameConfigs>({
    ...globalConfig.savedConfigs,
  });

  const start = () => {
    const combinedConfig: GlobalConfig = {
      ...newGlobalConfig,
      savedConfigs: { ...gameSpecificConfigs },
    };
    setGlobalConfig(combinedConfig);
    clearCanvas();
    setGrid(createGrid(combinedConfig));
    closeDrawer();
  };

  return (
    <Box p={5}>
      <Grid container alignItems="center" justifyContent="flex-end">
        <Grid item>
          <IconButton onClick={closeDrawer} size="large">
            <CloseIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          container
          item
          md={6}
          xs={12}
          spacing={4}
          alignContent="flex-start"
        >
          <GlobalControls
            config={newGlobalConfig}
            setConfig={setNewGlobalConfig}
          />
        </Grid>
        <Grid
          container
          item
          md={6}
          xs={12}
          spacing={2}
          alignContent="flex-start"
        >
          <Grid item xs={12}>
            <Typography>Game-Specific Settings</Typography>
            <Divider />
          </Grid>
          <GameSpecificControls
            configs={gameSpecificConfigs}
            rulesetName={newGlobalConfig.rulesetName}
            setConfigs={setGameSpecificConfigs}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            onClick={() => {
              start();
            }}
            variant="contained"
          >
            Start!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Controls;
