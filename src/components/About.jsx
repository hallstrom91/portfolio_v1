import React from "react";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="bg-gradient-to-b from-slate-900 to-slate-800 pb-40"
      >
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white anta-regular">
              Simon Hällström
              <br className="hidden sm:inline-block" /> - Student
            </h1>
            <p className="mb-8 leading-relaxed">
              Mitt namn är Simon Hällström Wänfelt, och jag är född samt
              uppvuxen i Piteå, beläget i Norrbottens län. Sedan 2016 har jag
              varit bosatt i Stockholm och för närvarande fördjupar jag min
              kompetens som Frontendutvecklare med fokus på webbsäkerhet vid
              Jensen YH i Kista. Jag tillhör FWK23S-klassen och förväntas
              avsluta min utbildning sommaren 2025. Mitt livslånga intresse för
              datorer har varit en drivkraft som nu leder mig mot en karriär
              inom ett område som jag anser vara både extremt fascinerande och
              intressant.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
              >
                Kontakt
              </a>
              <a
                href="/downloads/resume.pdf"
                download="resume.pdf"
                className="ml-4 inline-flex text-black bg-blue-300 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
              >
                Hämta CV
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
