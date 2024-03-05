import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Social from "./Social";
import LanguageBtn from "./LanguageBtn";
import "../css/Fonts.css";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <footer className="bg-gradient-to-b from-slate-600 to-slate-900 text-white text-center border-t-2 border-black overflow-x-hidden">
        <div className="flex flex-col md:flex-row w-full pt-2 justify-end p-4">
          <div className="flex justify-end items-end ">
            {/* Language Selector Dropdown Button */}
            <LanguageBtn />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="pb-2 text-center text-white">
            <Social />
          </div>
          <div className="mb-1">
            <p>2024 &copy; Simon Hällström Wänfelt</p>
            <p>shallstrom91@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
