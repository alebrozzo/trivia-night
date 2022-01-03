import React from "react";
import { ITrivia } from "../../models/trivia";
import { Options } from "./options";
import { Question } from "./question";
import "./trivia.css";

interface Props {
  trivia: ITrivia;
}

const Trivia: React.FC<Props> = ({ trivia }) => {
  return (
    <>
      <Question question={trivia.question}></Question>
      <Options answers={trivia.answers}></Options>
    </>
  );
};

export { Trivia };
