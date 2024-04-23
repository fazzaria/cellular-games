import { useContext, useState } from "react";
import { Box, Fab, Collapse, Drawer } from "@mui/material";
import DownIcon from "@mui/icons-material/KeyboardArrowDown";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RefreshIcon from "@mui/icons-material/Refresh";
import SettingsIcon from "@mui/icons-material/Settings";
import { Canvas, CANVAS_ID, Controls, GameContext } from "../../internal";
import { ControlsContextProvider } from "../Controls/context";

const GameScreen = () => {
  const { grid, paused, togglePause } = useContext(GameContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        pl={grid.config.cellSize / 6}
      >
        <Canvas canvasAttributes={{ id: CANVAS_ID }} />
        <Fab
          onClick={() => setMenuOpen(!menuOpen)}
          sx={{ position: "absolute", bottom: 15, right: 15 }}
        >
          {menuOpen ? <DownIcon /> : <UpIcon />}
        </Fab>
        <Collapse in={menuOpen}>
          <Fab
            onClick={() => {
              setControlsOpen(true);
              setMenuOpen(false);
            }}
            sx={{ position: "absolute", bottom: 100, right: 15 }}
          >
            <SettingsIcon />
          </Fab>
          <Fab
            onClick={() => {
              togglePause();
            }}
            sx={{ position: "absolute", bottom: 185, right: 15 }}
          >
            {paused ? <PlayArrowIcon /> : <PauseIcon />}
          </Fab>
          <Fab
            onClick={() => {
              grid.reset();
            }}
            sx={{ position: "absolute", bottom: 270, right: 15 }}
          >
            <RefreshIcon />
          </Fab>
        </Collapse>
      </Box>
      <ControlsContextProvider>
        <Drawer
          anchor="bottom"
          open={controlsOpen}
          onClose={() => setControlsOpen(false)}
        >
          <Controls closeDrawer={() => setControlsOpen(false)} />
        </Drawer>
      </ControlsContextProvider>
    </>
  );
};

export default GameScreen;
