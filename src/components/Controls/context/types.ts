import { Dispatch, SetStateAction } from "react";
import { GameConfigs, GlobalConfig } from "../../../internal";

export interface ControlsContextType {
  newGameConfigs: GameConfigs;
  newGlobalConfig: GlobalConfig;
  setNewGameConfigs: Dispatch<SetStateAction<GameConfigs>>;
  setNewGlobalConfig: Dispatch<SetStateAction<GlobalConfig>>;
  start: (closeDrawer: () => void) => void;
}
