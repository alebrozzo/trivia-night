import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { storageProvider } from "../../firebase";
import { GameState, IGame } from "../../models/game";
import { Game } from "../../components/game/game";
import { CreateGame } from "../../components/game/create-game";
import { JoinGame } from "../../components/game/join-game";
import { WaitingPlayers } from "../../components/game/waiting-players";
import "./game.css";

interface Props {}

const emptyGame: IGame = {
  id: "00000",
  state: GameState.NotCreated,
  dateCreated: new Date(),
};

const GamePage: React.FC<Props> = () => {
  const { t } = useTranslation();
  const [game, setGame] = useState(emptyGame);

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

  function startGame() {
    const updatedGame = { ...game, state: GameState.Playing };
    setGame(updatedGame);
  }

  console.log({ game });

  return (
    <div>
      {game.state === GameState.NotCreated && (
        <>
          <CreateGame createGameHandler={createGame} />
          <p>{t("game.or")}</p>
          <JoinGame />
        </>
      )}
      {game.state === GameState.NotStarted && <WaitingPlayers startGameHandler={startGame} />}
      {game.state === GameState.Playing && <Game game={game} />}
    </div>
  );
};

export { GamePage };
