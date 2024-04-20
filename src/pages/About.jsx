import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { RemoveIntroFromBody } from "@helper/CssHelper";

export default function About() {
  RemoveIntroFromBody();
  const { t } = useTranslation();
  return (
    <>
      <section
        id="about"
        className="bg-gradient-to-b from-slate-900 to-slate-800 text-white"
      >
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* glas morph card for personal info */}
            <div className="max-w-sm mb-8 rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-15 backdrop-blur-2xl backdrop-filter backdrop-saturate-150">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white anta-regular">
                    {/* about title */}
                    {t("translation.about.title")}
                    {/* about subtitle */}
                    <br /> <span className="hidden md:inline-block">
                      -
                    </span>{" "}
                    {/* about subtitle */}
                    {t("translation.about.subtitle")}
                  </h1>
                </div>

                <p className="mb-8 leading-relaxed">
                  {/* about description */}
                  {t("translation.about.description")}
                </p>
              </div>
            </div>
            <div className="flex justify-center mb-8">
              {/* about resumeBtn */}
              <div className="px-2">
                <a
                  href="/downloads/resume_sh_kjsportfolio.pdf"
                  download="resume.pdf"
                  className="inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none md:hover:bg-cyan-600 rounded text-md"
                >
                  {t("translation.about.resumeBtn")}
                </a>
              </div>
            </div>
          </div>
          {/* profil picture, get time-function to reload picture at refresh */}
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
