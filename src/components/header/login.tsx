import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { authProvider, User } from "../../firebase";

import "./login.css";

interface Props {}

const Login: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  console.log({ currentUser });
  authProvider.onAuthStateChanged((value: User | null) => {
    console.log("state changed", value);
    setCurrentUser(value);
  });

  return currentUser ? (
    <div>
      <span>hey {currentUser.displayName}!</span>
      <button onClick={authProvider.signOut}>{t("login.logout")}</button>
    </div>
  ) : (
    <div className="login">
      <button onClick={authProvider.signInWithGoogle}>{t("login.google")}</button>
    </div>
  );
};

export { Login };
