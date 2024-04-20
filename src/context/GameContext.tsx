import { createContext } from "react";
import { GameContextType, defaultGameContextValue } from "./types";

const GameContext = createContext<GameContextType>(defaultGameContextValue);

export default GameContext;
