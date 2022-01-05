import { Outlet } from "react-router-dom";
import { Header } from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
