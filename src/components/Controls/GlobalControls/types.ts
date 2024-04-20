import { Dispatch, SetStateAction } from "react";
import { GlobalConfig } from "../../../context/types";

export interface GlobalControlsProps {
  config: GlobalConfig;
  setConfig: Dispatch<SetStateAction<GlobalConfig>>;
}
