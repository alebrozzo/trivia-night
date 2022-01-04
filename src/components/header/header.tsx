import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../language-selector/language-selector";
import "./header.css";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="center title">
        <h1>{t("start-page.title")}</h1>
      </div>
      <LanguageSelector></LanguageSelector>
    </header>
  );
};

export { Header };
