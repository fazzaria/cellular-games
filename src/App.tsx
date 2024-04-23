import { GameContextProvider, GameScreen } from "./internal";
const App = () => {
  return (
    <GameContextProvider>
      <GameScreen />
    </GameContextProvider>
  );
};

export default App;
