import React from "react";
import { useTranslation } from "react-i18next";
import "./trivia.css";

interface Props {
  question: string;
}

const Question: React.FC<Props> = ({ question }) => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("trivia.question")}</h2>
      <p>{question}</p>
    </>
  );
};

export { Question };
