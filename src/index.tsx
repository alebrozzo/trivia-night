import "./i18n/config";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { StartScreen } from "./components/start-screen/start-screen";
import { GameScreen } from "./components/game-screen/game-screen";
import { JoinScreen } from "./components/join-screen/join-screen";
import { CreateScreen } from "./components/create-screen/create-screen";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<StartScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/join" element={<JoinScreen />} />
          <Route path="/create" element={<CreateScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
