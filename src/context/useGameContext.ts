import { useState } from "react";
import {
  GameContextType,
  GlobalConfig,
  defaultGameContextValue,
  defaultGlobalConfig,
} from "./types";
import { Grid } from "../classes";
import { createGrid } from "../utils";

const useGameContext = (): GameContextType => {
  const [globalConfig, setGlobalConfig] =
    useState<GlobalConfig>(defaultGlobalConfig);
  const [grid, setGrid] = useState<Grid>(createGrid(globalConfig));
  const [paused, setPaused] = useState(defaultGameContextValue.paused);

  const togglePause = () => {
    setPaused(!paused);
  };

  return {
    globalConfig,
    grid: grid,
    paused,
    setGlobalConfig,
    setGrid,
    togglePause,
  };
};

export default useGameContext;
