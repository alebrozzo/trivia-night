import React from "react";
import { useTranslation } from "react-i18next";
import "./start-screen.css";

interface Props {}

const StartScreen: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <>
    TODO: start or join
    </>
  );
};

export { StartScreen };
