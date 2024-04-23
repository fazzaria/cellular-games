import { GameContextType } from "./types";
import { defaultGlobalConfigs, defaultRulesetName } from "../internal";

const defaultGameContextValue: GameContextType = {
  globalConfig: { ...defaultGlobalConfigs[defaultRulesetName] },
  grid: null,
  paused: false,
  setGlobalConfig: () => null,
  setGrid: () => null,
  togglePause: () => null,
};

export default defaultGameContextValue;
