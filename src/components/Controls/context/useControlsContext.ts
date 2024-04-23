import { useCallback, useContext, useMemo, useState } from "react";
import { ControlsContextType } from "./types";
import {
  GameConfigs,
  GameContext,
  GlobalConfig,
  clearCanvas,
  createGrid,
} from "../../../internal";

const useControlsContext = (): ControlsContextType => {
  const { globalConfig, paused, setGlobalConfig, setGrid, togglePause } =
    useContext(GameContext);
  const [newGlobalConfig, setNewGlobalConfig] = useState<GlobalConfig>({
    ...globalConfig,
  });
  const [newGameConfigs, setNewGameConfigs] = useState<GameConfigs>({
    ...globalConfig.savedConfigs,
  });

  const start = useCallback(
    (closeDrawer: () => void) => {
      const combinedConfig: GlobalConfig = {
        ...newGlobalConfig,
        savedConfigs: { ...newGameConfigs },
      };
      setGlobalConfig(combinedConfig);
      clearCanvas();
      setGrid(createGrid(combinedConfig));
      if (paused) togglePause();
      closeDrawer();
    },
    [
      newGameConfigs,
      newGlobalConfig,
      paused,
      setGlobalConfig,
      setGrid,
      togglePause,
    ]
  );

  return useMemo(() => {
    return {
      newGameConfigs,
      newGlobalConfig,
      setNewGameConfigs,
      setNewGlobalConfig,
      start,
    };
  }, [
    newGameConfigs,
    newGlobalConfig,
    setNewGameConfigs,
    setNewGlobalConfig,
    start,
  ]);
};

export default useControlsContext;
