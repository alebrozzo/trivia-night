import React from "react";
import { useTranslation } from "react-i18next";
import "./start-screen.css";

interface Props {}

const StartScreen: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
      <h1>{t('start-page.title')}</h1>
    </>
  );
};

export { StartScreen };
