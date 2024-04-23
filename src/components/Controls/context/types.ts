import { Dispatch, SetStateAction } from "react";
import {
  GameSpecificConfigs,
  GlobalConfigs,
  RulesetName,
} from "../../../internal";

export type GlobalConfigsTouched = {
  [key in RulesetName]: boolean;
};

export interface ControlsContextType {
  globalConfigsTouched: GlobalConfigsTouched;
  newGameSpecificConfigs: GameSpecificConfigs;
  newGlobalConfigs: GlobalConfigs;
  setGlobalConfigsTouched: Dispatch<SetStateAction<GlobalConfigsTouched>>;
  setNewGameSpecificConfigs: Dispatch<SetStateAction<GameSpecificConfigs>>;
  setNewGlobalConfigs: Dispatch<SetStateAction<GlobalConfigs>>;
  start: (closeDrawer: () => void) => void;
}
