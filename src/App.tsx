import { Header } from "./components/header/header";
import { StartScreen } from "./components/start-screen/start-screen";
import { GameScreen } from "./components/game-screen/game-screen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <StartScreen></StartScreen>
      {/* <GameScreen></GameScreen> */}
    </div>
  );
}

export default App;
