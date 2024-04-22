import { GameContextType } from "./types";
import { defaultGlobalConfig } from "../const";

const defaultGameContextValue: GameContextType = {
  globalConfig: { ...defaultGlobalConfig },
  grid: null,
  paused: false,
  setGlobalConfig: () => null,
  setGrid: () => null,
  togglePause: () => null,
};

export default defaultGameContextValue;
