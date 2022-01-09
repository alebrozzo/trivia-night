import { Link, Outlet } from "react-router-dom";
import { Header } from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Link to="/game">Lets play</Link>
      <Outlet />
    </div>
  );
}

export default App;
