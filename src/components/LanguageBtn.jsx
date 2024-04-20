import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr"; /* GrLanguage */
import { FaGlobeEurope } from "react-icons/fa"; /* FaGlobeEurope */
import Cookies from "js-cookie";

export default function LanguageBtn() {
  /* dropdown menu  */
  const [isOpen, setIsOpen] = useState(false);

  /* i18n language, save in localstorage  */
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set("language", lng, { expires: 7 });
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
      <div className="relative inline-block text-center bg-neutral-200 md:hover:bg-cyan-600 text-black rounded-md items-center justify-center py-1 px-2">
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
            <span className="pl-2 py-1">
              {t("translation.languageBtn.selector")}
            </span>
          </button>
        </div>
        {isOpen && (
          <div className="origin-top-left absolute left-1 mt-2 rounded-md shadow-xl drop-shadow-lg bg-white ring-1 ring-black ring-opacity-5 justify-start align-middle">
            <div
              className=""
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-menu"
            >
              {/* LANGUAGE BUTTON SELECTOR - SWEDISH */}
              <div className="w-[6em] hover:font-bold">
                <button
                  onClick={() => changeLanguage("sv")}
                  className="flex px-1 py-2 text-sm text-black"
                  role="language"
                >
                  {t("translation.languageBtn.swedish")}
                </button>
              </div>
              {/* LANGUAGE BUTTON SELECTOR - ENGLISH */}
              <div className="w-[6em] hover:font-bold">
                <button
                  onClick={() => changeLanguage("en")}
                  className="flex px-1 py-2 text-sm text-black"
                  role="language"
                >
                  {t("translation.languageBtn.english")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
