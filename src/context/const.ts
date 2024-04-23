import { GameContextType } from "./types";
import {
  defaultGameOptions,
  defaultGlobalConfigs,
  defaultRulesetName,
} from "../internal";

const defaultGameContextValue: GameContextType = {
  currentGame: defaultRulesetName,
  gameSpecificConfigs: defaultGameOptions,
  globalConfigs: defaultGlobalConfigs,
  grid: null,
  paused: false,
  setCurrentGame: () => null,
  setGameSpecificConfigs: () => null,
  setGlobalConfigs: () => null,
  setGrid: () => null,
  togglePause: () => null,
};

export default defaultGameContextValue;
