import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Social from "./Social";

export default function Footer() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <footer className="bg-gradient-to-b from-slate-600 to-slate-900 text-white text-center border-t-2 border-black overflow-x-hidden">
        <div className="flex flex-col md:flex-row w-full pt-2"></div>
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="pb-2 text-center text-white">
            <Social />
          </div>
          <div className="mb-1">
            <p>2024 &copy; Simon Hällström Wänfelt</p>
            <p>shallstrom91@gmail.com</p>
          </div>
          <div id="test_btn_div">
            {/* SHIT BUTTONS REMOVE */}
            <button
              onClick={() => changeLanguage("en")}
              className="ml-4 inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
            >
              ENG
            </button>
            <button
              onClick={() => changeLanguage("sv")}
              className="ml-4 inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
            >
              SV
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
