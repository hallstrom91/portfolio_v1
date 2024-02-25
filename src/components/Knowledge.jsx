import { PiSealCheckFill } from "react-icons/pi";
import { GiMicrochip } from "react-icons/gi";
import { skills } from "../data.js";

export default function Knowledge() {
  return (
    <>
      <section
        id="knowledge"
        className="bg-gradient-to-b from-slate-700 to-slate-600 pt pb"
      >
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <GiMicrochip className="w-10 inline-block mb-4" size={40} />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 anta-regular underline">
              Kunskaper
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Under min pågående utbildning har jag absorberat flera nya
              programmeringsspråk och ramverk. För att fördjupa min kompetens
              och sträva efter excellens inom mitt område har jag engagerat mig
              i självstudier för att behärska ytterligare ramverk på min fritid.
              Trots att jag formellt studerar för att bli Frontend-utvecklare
              har jag upptäckt en särskild passion för Backend-utveckling med
              Node.js. Denna insikt har utvidgat min tekniska horisont och
              bidrar till en mångsidig kompetensprofil. Att trivas i båda
              världarna av Frontend och Backend stärker min förmåga att skapa
              integrerade och effektiva lösningar inom webbutveckling.
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
