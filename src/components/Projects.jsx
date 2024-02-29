import React from "react";
import { useTranslation } from "react-i18next";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { projects } from "../data.js";
import { MdOutlineFindInPage } from "react-icons/md";
import { PiGithubLogoLight } from "react-icons/pi";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="projects"
        className="text-white body-font bg-gradient-to-b from-slate-800 to-slate-700"
      >
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <div className="inline-block">
              <FaReact className="mx-auto inline-block w-10 mb-4" size={40} />
              <SiVite className="mx-auto inline-block w-10 mb-4" size={40} />
            </div>
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white anta-regular underline">
              {t("project.title")}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {t("project.description")}
            </p>
          </div>
          {/* Project-Grid-Layout */}
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <div key={project.id} className="sm:w-1/2 w-100 p-4">
                {/* Project-External-Links */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:w-1/2 w-100 p-4"
                >
                  <div className="flex relative">
                    {/* Project-Img-Display */}
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-center object-scale-down"
                      src={project.image}
                    />
                    {/* Project-Details */}
                    <div className="px-8 py-8  relative z-10 w-full border-4 border-gray-900 bg-gray-700 bg-opacity-75 opacity-90 lg:opacity-0 lg:hover:opacity-100 rounded-xl">
                      {/* Title */}
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1 italic">
                        {/* Subtitle */}
                        {project.subtitle}
                      </h2>
                      {/* Description */}
                      <p className="leading-relaxed">{project.description}</p>
                      <span className="flex justify-center pt-4">
                        <PiGithubLogoLight size={35} />
                        <MdOutlineFindInPage size={35} />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
