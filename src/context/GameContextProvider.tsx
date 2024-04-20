import useGameContext from "./useGameContext";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }) => {
  const contextValue = useGameContext();
  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
