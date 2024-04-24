import { useTranslation } from "react-i18next";
// icons
import { PiSealCheckFill } from "react-icons/pi";
import { GiMicrochip } from "react-icons/gi";
import styles from "@css/Knowledge.module.css";

export default function Knowledge() {
  const { t } = useTranslation();
  const skills = t("data.skills", { returnObjects: true });

  return (
    <>
      <section
        id="knowledge"
        className="bg-gradient-to-b from-slate-700 to-slate-600 pb-10"
      >
        <div className="container px-5 py-10 mx-auto">
          {/* SKillz text */}
          <div className="text-center mb-20 text-white">
            <GiMicrochip className="w-10 inline-block mb-4" size={40} />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 anta-regular underline">
              {t("translation.knowledge.title")}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              {t("translation.knowledge.description")}
            </p>
          </div>
          {/* Card Box */}
          <div
            className={`${styles.backgroundSplashWhite} bg-cyan-900 mx-auto lg:w-[50%] rounded-2xl justify-center shadow-lg`}
          >
            <div className="flex flex-wrap lg:w-full sm:mb-2 backdrop-blur-sm rounded-2xl p-14 shadow-lg">
              {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="rounded-lg flex p-3  h-full items-center bg-gradient-to-b from-neutral-500 to-neutral-900">
                    <PiSealCheckFill
                      className="text-green-300  flex-shrink-0 mr-4"
                      size={25}
                    />
                    <span className="font-medium text-white">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
