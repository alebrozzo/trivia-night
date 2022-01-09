import React from "react";
import { useTranslation } from "react-i18next";
import "./join-game.css";

interface Props {}

const JoinGame: React.FC<Props> = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t("game.join")}
      <input type={"text"}></input>
    </div>
  );
};

export { JoinGame };
