import { useTranslation } from "react-i18next";
import "./language-selector.css"

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  function changeLanguage(e: any) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className="language-options">
      <button onClick={changeLanguage} value="en">
        English
      </button>
      <button onClick={changeLanguage} value="es">
        Español
      </button>
    </div>
  );
};

export { LanguageSelector };
