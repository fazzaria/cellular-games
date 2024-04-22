import { GameContextType } from "./types";
import { defaultGlobalConfig } from "../internal";

const defaultGameContextValue: GameContextType = {
  globalConfig: { ...defaultGlobalConfig },
  grid: null,
  paused: false,
  setGlobalConfig: () => null,
  setGrid: () => null,
  togglePause: () => null,
};

export default defaultGameContextValue;
