import { useState } from "react";
import { GameContextType, GlobalConfig } from "./types";
import defaultGameContextValue from "./const";
import {
  createGrid,
  defaultGlobalConfigs,
  defaultRulesetName,
  Grid,
} from "../internal";

const useGameContext = (): GameContextType => {
  const [globalConfig, setGlobalConfig] = useState<GlobalConfig>(
    defaultGlobalConfigs[defaultRulesetName]
  );
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
