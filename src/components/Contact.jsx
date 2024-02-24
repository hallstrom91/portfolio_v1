import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Social from "./Social";
import { PiGithubLogoThin } from "react-icons/pi"; /* <PiGithubLogoThin /> */
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_q35q8gn", "template_irv9sbk", e.target, {
        publicKey: "KLN7PlV1VP66e_pur", // FUNKAR MED DIREKT INPUT
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStateMessage("Tack för ditt meddelande!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStateMessage("Något gick tyvärr fel. Försök igen senare.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );
    e.target.reset();
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-500 to-slate-400"
    >
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-full md:w-full bg-gray-900 bg-opacity-15 rounded-xl overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative">
          <div className="bg-slate-700 relative flex flex-wrap py-6 rounded-xl shadow-md">
            <div className="lg:w-full px-6 mt-4 lg:mt-0">
              <form
                onSubmit={sendEmail}
                name="contact"
                className="lg-w-full md:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 "
              >
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font flex justify-center items-center anta-regular">
                  Kontakt
                  <MdOutlineMarkEmailRead className="ml-1" />
                </h2>
                <p className="leading-relaxed mb-5">
                  Vänligen använd formuläret nedan för att kontakta mig.
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    Namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full bg-white rounded border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full bg-white rounded border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    Meddelande
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="w-full bg-white rounded border border-black focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-3 resize-none leading-10 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-sky-950 border-0 py-2 px-6 focus:inline-none hover:bg-sky-600 rounded text-lg"
                >
                  Submit
                </button>
                <div className="flex justify-center pt-4 text-sky-300">
                  {stateMessage && <p>{stateMessage}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
