import { useCallback, useMemo, useState } from "react";
import { GameContextType, GameSpecificConfigs, GlobalConfigs } from "./types";
import defaultGameContextValue from "./const";
import {
  createGrid,
  defaultRulesetName,
  Grid,
  defaultGlobalConfigs,
  defaultGameOptions,
  RulesetName,
} from "../internal";

const useGameContext = (): GameContextType => {
  const [currentGame, setCurrentGame] =
    useState<RulesetName>(defaultRulesetName);
  const [globalConfigs, setGlobalConfigs] =
    useState<GlobalConfigs>(defaultGlobalConfigs);
  const [gameSpecificConfigs, setGameSpecificConfigs] =
    useState<GameSpecificConfigs>(defaultGameOptions);
  const [grid, setGrid] = useState<Grid>(
    createGrid(
      defaultRulesetName,
      defaultGlobalConfigs[defaultRulesetName],
      gameSpecificConfigs[defaultRulesetName]
    )
  );
  const [paused, setPaused] = useState(defaultGameContextValue.paused);

  const togglePause = useCallback(() => {
    setPaused(!paused);
  }, [paused]);

  return useMemo(
    () => ({
      currentGame,
      gameSpecificConfigs,
      globalConfigs,
      grid,
      paused,
      setCurrentGame,
      setGameSpecificConfigs,
      setGlobalConfigs,
      setGrid,
      togglePause,
    }),
    [
      currentGame,
      gameSpecificConfigs,
      globalConfigs,
      grid,
      paused,
      setCurrentGame,
      setGameSpecificConfigs,
      setGlobalConfigs,
      setGrid,
      togglePause,
    ]
  );
};

export default useGameContext;
