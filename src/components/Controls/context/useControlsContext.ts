import { useCallback, useContext, useMemo, useState } from "react";
import { ControlsContextType, GlobalConfigsTouched } from "./types";
import {
  GameSpecificConfigs,
  GameContext,
  GlobalConfigs,
  RulesetName,
  clearCanvas,
  createGrid,
} from "../../../internal";

let initialGlobalConfigsTouched = {};
Object.keys(RulesetName).forEach(
  (key) => (initialGlobalConfigsTouched[RulesetName[key]] = false)
);

const useControlsContext = (): ControlsContextType => {
  const {
    currentGame,
    gameSpecificConfigs,
    globalConfigs,
    paused,
    setGameSpecificConfigs,
    setGlobalConfigs,
    setGrid,
    togglePause,
  } = useContext(GameContext);
  const [newGlobalConfigs, setNewGlobalConfigs] = useState<GlobalConfigs>({
    ...globalConfigs,
  });
  const [newGameSpecificConfigs, setNewGameSpecificConfigs] =
    useState<GameSpecificConfigs>({
      ...gameSpecificConfigs,
    });
  const [globalConfigsTouched, setGlobalConfigsTouched] =
    useState<GlobalConfigsTouched>();

  const start = useCallback(
    (closeDrawer: () => void) => {
      setGlobalConfigs({ ...newGlobalConfigs });
      setGameSpecificConfigs({ ...newGameSpecificConfigs });
      clearCanvas();
      setGrid(
        createGrid(
          currentGame,
          newGlobalConfigs[currentGame],
          newGameSpecificConfigs[currentGame]
        )
      );
      if (paused) togglePause();
      closeDrawer();
    },
    [
      currentGame,
      newGameSpecificConfigs,
      newGlobalConfigs,
      paused,
      setGameSpecificConfigs,
      setGlobalConfigs,
      setGrid,
      togglePause,
    ]
  );

  return useMemo(() => {
    return {
      globalConfigsTouched,
      newGameSpecificConfigs,
      newGlobalConfigs,
      setGlobalConfigsTouched,
      setNewGameSpecificConfigs,
      setNewGlobalConfigs,
      start,
    };
  }, [
    globalConfigsTouched,
    newGameSpecificConfigs,
    newGlobalConfigs,
    setGlobalConfigsTouched,
    setNewGameSpecificConfigs,
    setNewGlobalConfigs,
    start,
  ]);
};

export default useControlsContext;
