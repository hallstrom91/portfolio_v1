import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from "@css/LngSelectorSV.module.css";
import Cookies from "js-cookie";

export default function LngBtnSV() {
  // navigate to send user forward
  const navigate = useNavigate();

  /* i18n & language */
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    Cookies.set("language", lng, { expires: 7 });
    if (lng === "sv") {
      navigate(`/app`);
    }
  };
  return (
    <>
      {/* container for sv button select */}
      <div className="flex justify-center">
        {/* container for SV button selector */}
        <button
          className={`${styles.LngBtn} w-2/3 md:w-96`}
          onClick={() => changeLanguage("sv")}
        >
          <span className={styles.new}>Välkommen</span>
          <div className={`${styles["old"]}`}>
            <span>Svenska</span>
            <span aria-hidden>Svenska</span>
          </div>
        </button>
      </div>
    </>
  );
}
