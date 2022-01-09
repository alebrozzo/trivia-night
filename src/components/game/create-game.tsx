import React from "react";
import { useTranslation } from "react-i18next";
import "./create-game.css";

interface Props {
  createGameHandler: () => void
}

const CreateGame: React.FC<Props> = ({createGameHandler}) => {
  const { t } = useTranslation();
  return <button onClick={createGameHandler}>{t("game.create")}</button>;
};

export { CreateGame };
