import React from "react";
import { useTranslation } from "react-i18next";
import { ITriviaAnswer } from "../../models/trivia";
import "./trivia.css";

interface Props {
  answers: ITriviaAnswer[];
}

const Options: React.FC<Props> = ({ answers }) => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("trivia.options")}</h2>
      <ol>
        {answers.map((a) => (
          <li>{a.answer}</li>
        ))}
      </ol>
    </>
  );
};

export { Options };
