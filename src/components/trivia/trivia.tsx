import React from "react";
import { useTranslation } from "react-i18next";
import { ITrivia } from "../../models/trivia";
import { Options } from "./options";
import { Question } from "./question";
import "./trivia.css";

interface Props {
  trivia: ITrivia;
}

const Trivia: React.FC<Props> = ({ trivia }) => {
  const { t } = useTranslation();
  return (
    <>
      <Question question={trivia.question}></Question>
      <Options answers={trivia.answers}></Options>
    </>
  );
};

export { Trivia };
