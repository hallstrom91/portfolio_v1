import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="about"
        className="bg-gradient-to-b from-slate-900 to-slate-800 pb"
      >
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white anta-regular">
              {t("about.title")}
              <br className="hidden sm:inline-block" /> - {t("about.subtitle")}
            </h1>
            <p className="mb-8 leading-relaxed">{t("about.description")}</p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
              >
                {t("about.contactBtn")}
              </a>
              <a
                href="/downloads/resume.pdf"
                download="resume.pdf"
                className="ml-4 inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
              >
                {t("about.resumeBtn")}
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-hover object-center rounded"
              alt="MeMyselfandI"
              src={`/images/profil.png?${new Date().getTime()}`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
