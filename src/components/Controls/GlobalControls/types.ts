import { Dispatch, SetStateAction } from "react";
import { GlobalConfig } from "../../../internal";

export interface GlobalControlsProps {
  config: GlobalConfig;
  setConfig: Dispatch<SetStateAction<GlobalConfig>>;
}
