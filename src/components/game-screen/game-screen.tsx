import React, { useEffect, useState } from "react";
import { getTriviaWillFry, mapFromTriviaWillFry } from "../../models/trivia";
import { Trivia } from "../trivia/trivia";
import "./game-screen.css";

interface Props {}

const GameScreen: React.FC<Props> = ({}) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getTriviaWillFry([], 20).then(
      (result) => {
        console.log(result);
        setItems(result);
        setIsLoaded(true);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log("error", error);
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items);

    const tempItem = items[0];
    const tempTrivia = mapFromTriviaWillFry(tempItem);
    return (
      <>
        <Trivia trivia={tempTrivia}></Trivia>
      </>
    );
  }
};

export { GameScreen };
