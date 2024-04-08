import React from "react";
import { useTranslation } from "react-i18next";
// icons
import { PiSealCheckFill } from "react-icons/pi";
import { GiMicrochip } from "react-icons/gi";

export default function Knowledge() {
  const { t } = useTranslation();
  const skills = t("data.skills", { returnObjects: true });
  console.log(skills);
  return (
    <>
      <section
        id="knowledge"
        className="bg-gradient-to-b from-slate-700 to-slate-600 pt pb"
      >
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20 text-white">
            <GiMicrochip className="w-10 inline-block mb-4" size={40} />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 anta-regular underline">
              {t("translation.knowledge.title")}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              {t("translation.knowledge.description")}
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="rounded-xl flex p-4 h-full items-center bg-gradient-to-b from-slate-400 to-slate-800 bg-opacity-40">
                  <PiSealCheckFill
                    className="text-green-300  flex-shrink-0 mr-4"
                    size={25}
                  />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
