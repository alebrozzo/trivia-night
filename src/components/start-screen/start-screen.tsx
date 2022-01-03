import React from "react";
import { useTranslation } from "react-i18next";
import { ITrivia } from "../../models/trivia";
import { Trivia } from "../trivia/trivia";
import "./start-screen.css";

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

const StartScreen: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("start-page.title")}</h1>
      <Trivia trivia={tempTrivia}></Trivia>
    </>
  );
};

export { StartScreen };
