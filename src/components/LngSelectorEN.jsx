import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from "@css/LngSelectorEN.module.css";
import Cookies from "js-cookie";

export default function LngBtnEN() {
  // navigate to send user forward
  const navigate = useNavigate();

  /* i18n & language */
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set("language", lng, { expires: 7 });
    if (lng === "en") {
      navigate(`/app`);
    }
  };

  return (
    <>
      {/* container for eng button select */}
      <div className="flex justify-center">
        {/* container for ENG button selector */}
        <button
          className={`${styles.LngBtn} w-2/3 md:w-96`}
          onClick={() => changeLanguage("en")}
        >
          <span className={styles.new}>Welcome</span>
          <div className={`${styles["old"]}`}>
            <span>English</span>
            <span aria-hidden>English</span>
          </div>
        </button>
      </div>
    </>
  );
}
