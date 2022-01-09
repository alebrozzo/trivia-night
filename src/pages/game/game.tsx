import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { storageProvider } from "../../firebase";
import { GameState, IGame } from "../../models/game";
import { Game } from "../../components/game/game";
import { CreateGame } from "../../components/game/create-game";
import { JoinGame } from "../../components/game/join-game";
import "./game.css";

interface Props {}

const GamePage: React.FC<Props> = () => {
  const { t } = useTranslation();
  const [game, setGame] = useState(null as unknown as IGame);

  async function createGame() {
    const gameRef = storageProvider.getGameReference("asdfgjk");

    const newGame: IGame = {
      id: gameRef.id,
      state: GameState.NotStarted,
      dateCreated: new Date(),
    };

    console.log(gameRef, newGame);

    console.log("Saving to database");
    await storageProvider.saveGame(gameRef, newGame);

    console.log("Saving to state");
    setGame(newGame);
  }

  console.log({ game });

  return (
    <div>
      {!game && (
        <>
          <CreateGame createGameHandler={createGame} />
          <p>{t("start-screen.or")}</p>
          <JoinGame />
        </>
      )}
      {game && game.state === GameState.NotStarted && <Game game={game} />}
      {game && game.state === GameState.Playing && <Game game={game} />}
    </div>
  );
};

export { GamePage };
