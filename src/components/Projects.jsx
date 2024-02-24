import React from "react";

import { FaReact } from "react-icons/fa"; /* <FaReact /> */
import { SiVite } from "react-icons/si"; /* <SiVite /> */
import { projects } from "../data.js";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="text-white body-font bg-gradient-to-b from-slate-800 to-slate-700 pt-10 pb-40"
      >
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20">
            <div className="inline-block">
              <FaReact className="mx-auto inline-block w-10 mb-4" size={40} />
              <SiVite className="mx-auto inline-block w-10 mb-4" size={40} />
            </div>
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white anta-regular">
              Projekt
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Utforska några av mina projekt genom att klicka på nedanstående
              länkar. Dessutom finns ytterligare projekt tillgängliga på min
              GitHub-profil för en mer omfattande överblick över min portfölj.
              Där kan du följa min utvecklingsresa och ta del av mina projekt.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project) => (
              <a
                href={project.link}
                key={project.image}
                className="sm:w-1/2 w-100 p-4"
                target="_blank"
              >
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-center object-scale-down"
                    src={project.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-900 bg-gray-700 bg-opacity-90 opacity-0 hover:opacity-100 rounded-xl">
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <h2 className="tracking-widest text-sm title-font font-medium text-white mb-1 italic">
                      {project.subtitle}
                    </h2>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
