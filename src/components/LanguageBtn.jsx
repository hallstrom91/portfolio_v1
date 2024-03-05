import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../css/Fonts.css";
import { GrLanguage } from "react-icons/gr"; /* GrLanguage */
import { FaGlobeEurope } from "react-icons/fa"; /* FaGlobeEurope */

export default function LanguageBtn() {
  /* dropdown menu  */
  const [isOpen, setIsOpen] = useState(false);

  /* i18n & language */
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  /* auto close language dropdown menu */
  const language_selector_id = "language-selector";
  useEffect(() => {
    const handleWindowClick = (event) => {
      const target = event.target.closest("button");
      if (target && target.id === language_selector_id) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <div className="relative inline-block text-center bg-blue-300 hover:bg-blue-500 text-black rounded-full items-center justify-center p-1 px-4">
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-center items-center rounded-full focus:outline-none border:rounded-xl"
            id={language_selector_id}
            aria-haspopup="true"
            aria-expanded="true"
          >
            {/* LANGUAGE SELECTOR GLOBE ICON */}
            <FaGlobeEurope size={20} />
            <span className="pl-1">
              {t("translation.languageBtn.selector")}
            </span>
          </button>
        </div>
        {isOpen && (
          <div className="origin-top-left absolute left-1 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 justify-center align-middle">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-menu"
            >
              {/* LANGUAGE BUTTON SELECTOR - SWEDISH */}
              <button
                onClick={() => changeLanguage("sv")}
                className="block px-4 py-2 text-sm text-black hover:bg-sky-300"
                role="language"
              >
                {t("translation.languageBtn.swedish")}
              </button>
              {/* LANGUAGE BUTTON SELECTOR - ENGLISH */}
              <button
                onClick={() => changeLanguage("en")}
                className="block px-4 py-2 text-sm text-black hover:bg-sky-300"
                role="language"
              >
                {t("translation.languageBtn.english")}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
