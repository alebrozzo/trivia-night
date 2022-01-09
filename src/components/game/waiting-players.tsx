import React from "react";
import { useTranslation } from "react-i18next";
import "./waiting-players.css";

interface Props {
  startGameHandler: () => void
}

const WaitingPlayers: React.FC<Props> = ({startGameHandler}) => {
  const { t } = useTranslation();
  return <button onClick={startGameHandler}>{t("game.start")}</button>;
};

export { WaitingPlayers };
