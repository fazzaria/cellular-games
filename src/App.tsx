import { GameScreen } from "./components";
import GameContextProvider from "./context/GameContextProvider";

const App = () => { 
  return (
    <GameContextProvider>
      <GameScreen />
    </GameContextProvider>
  );
};

export default App;
