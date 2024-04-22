import { createContext } from "react";
import defaultGameContextValue from "./const";
import { GameContextType } from "./types";

const GameContext = createContext<GameContextType>(defaultGameContextValue);

export default GameContext;
