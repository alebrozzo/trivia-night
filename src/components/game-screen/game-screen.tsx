import React from "react";
import { ITrivia } from "../../models/trivia";
import { Header } from "../header/header";
import { Trivia } from "../trivia/trivia";
import "./game-screen.css";

interface Props {}

const tempTrivia: ITrivia = {
  question: "Who designed the album sleeve for The Rolling Stones LP 'Sticky Fingers'?",
  answers: [
    { answer: "Salvador Dali", isCorrect: false },
    { answer: "John Lennon", isCorrect: false },
    { answer: "Andy Warhol", isCorrect: true },
    { answer: "David Bowie", isCorrect: false },
  ],
};

const GameScreen: React.FC<Props> = ({}) => {
  return (
    <>
      <Header></Header>
      <Trivia trivia={tempTrivia}></Trivia>
    </>
  );
};

export { GameScreen };
