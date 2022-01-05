import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./start.css";

interface Props {}

const StartScreen: React.FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p>
        <Link to="/create">{t("start-screen.create")}</Link>{" "}
      </p>
      <p>{t("start-screen.or")}</p>
      <p>
        <Link to="/join">{t("start-screen.join")}</Link>
        <input type={"text"}></input>
      </p>
      <p>
        <Link to="/game">temp Game</Link>
      </p>
    </div>
  );
};

export { StartScreen };
