import { createContext } from "react";
import { ControlsContextType } from "./types";

const ControlsContext = createContext<ControlsContextType>(null);

export default ControlsContext;
