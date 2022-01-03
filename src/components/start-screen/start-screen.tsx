import React from "react";
import { useTranslation } from "react-i18next";
import { Trivia } from "../trivia/trivia";
import "./start-screen.css";

interface Props {}

const StartScreen: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t("start-page.title")}</h1>
      <Trivia question="Who designed the album sleeve for The Rolling Stones LP 'Sticky Fingers'?" options="1. Salvador Dali 2. John Lennon 3. Andy Warhol 4. David Bowie"></Trivia>
    </>
  );
};

export { StartScreen };
