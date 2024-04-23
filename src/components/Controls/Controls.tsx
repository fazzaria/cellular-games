import { useContext } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { GameSpecificControls } from "./GameSpecificControls";
import { GlobalControls } from "./GlobalControls";
import { ControlsProps } from "./types";
import { ControlsContext } from "./context";
import { GameContext, GlobalConfig } from "../../context";

const Controls = ({ closeDrawer }: ControlsProps) => {
  const { currentGame } = useContext(GameContext);
  const {
    globalConfigsTouched,
    newGlobalConfigs,
    setGlobalConfigsTouched,
    setNewGlobalConfigs,
    start,
  } = useContext(ControlsContext);

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
          spacing={2}
          alignContent="flex-start"
        >
          <GlobalControls
            config={newGlobalConfigs[currentGame]}
            setConfig={(newConfig: GlobalConfig) => {
              setNewGlobalConfigs({
                ...newGlobalConfigs,
                [currentGame]: newConfig,
              });
              setGlobalConfigsTouched({
                ...globalConfigsTouched,
                [currentGame]: true,
              });
            }}
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
          <GameSpecificControls />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            onClick={() => {
              start(closeDrawer);
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
