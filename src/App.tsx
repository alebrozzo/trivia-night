import { LanguageSelector } from "./components/language-selector/language-selector";
import { StartScreen } from "./components/start-screen/start-screen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LanguageSelector></LanguageSelector>
      <StartScreen></StartScreen>
    </div>
  );
}

export default App;
