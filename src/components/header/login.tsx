import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { authProvider, User } from "../../firebase";

import "./login.css";

interface Props {}

const Login: React.FC<Props> = ({}) => {
  const { t } = useTranslation();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribeFn = authProvider.onAuthStateChanged((value: User | null) => {
      console.log("state changed", { currentUser, value });
      setCurrentUser(value);
    });
    return unsubscribeFn;
  }, []);

  console.log({ currentUser });

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
