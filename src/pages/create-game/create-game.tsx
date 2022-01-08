import React from "react";
import { useTranslation } from "react-i18next";
import { storageProvider } from "../../firebase";
import "./create-game.css";

interface Props {}

const CreateScreen: React.FC<Props> = () => {
  async function createGame() {
    const gameRef = storageProvider.getGameReference("asdfgjk");
    console.log(gameRef);

    await storageProvider.saveGame(gameRef, {
      id: gameRef.id,
      dateCreated: new Date(),
    });
  }

  const { t } = useTranslation();
  return <button onClick={createGame}>{t("create-screen.create")}</button>;
};

export { CreateScreen };
