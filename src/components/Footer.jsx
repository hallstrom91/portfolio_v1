import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Social from "./Social";
import LanguageBtn from "./LanguageBtn";
import "../css/Fonts.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <footer className="bg-gradient-to-b from-slate-600 to-slate-900 text-white border-t-2 border-white p-5">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-center">
            <Social />
            <p></p>
          </div>
          <div className="text-center">
            {year} &copy; Simon Hällström Wänfelt
          </div>
          <div className="text-center flex h-full">
            <LanguageBtn />
          </div>
        </div>
      </footer>
    </>
  );
}

{
  /*       <footer className="bg-gradient-to-b from-slate-600 to-slate-900 text-white text-center border-t-2 border-white overflow-x-hidden">
        <div className="flex flex-col md:flex-row w-full pt-2 justify-end p-4">
          <div className="flex justify-end items-end ">
         
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
      </footer> */
}
