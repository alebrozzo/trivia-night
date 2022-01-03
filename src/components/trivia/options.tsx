import React from "react";
import { useTranslation } from "react-i18next";
import "./trivia.css";

interface Props {
  answers: string;
}

const Options: React.FC<Props> = ({ answers }) => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("trivia.options")}</h2>
      <p>{answers}</p>
    </>
  );
};

export { Options };
