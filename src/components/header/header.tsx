import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../language-selector/language-selector";
import { Login } from "./login";
import "./header.css";

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="center title">
        <h1>{t("header.title")}</h1>
      </div>
      <Login></Login>
      <LanguageSelector></LanguageSelector>
    </header>
  );
};

export { Header };
