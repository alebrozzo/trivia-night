import React from "react";
import { useTranslation } from "react-i18next";
import { Options } from "./options";
import { Question } from "./question";
import "./trivia.css";

interface Props {
  question: string;
  options: string;
}

const Trivia: React.FC<Props> = ({ question, options }) => {
  const { t } = useTranslation();
  return (
    <>
      <Question question={question}></Question>
      <Options answers={options}></Options>
    </>
  );
};

export { Trivia };
