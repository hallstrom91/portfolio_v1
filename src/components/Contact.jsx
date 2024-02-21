import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Social from "./Social";
import { PiGithubLogoThin } from "react-icons/pi"; /* <PiGithubLogoThin /> */

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, {
        publicKey: PUBLIC_KEY, // FUNKAR MED DIREKT INPUT
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  /*   const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
  };

  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, {
      publicKey: PUBLIC_KEY,
    })
    .then(
      (result) => {
        setStateMessage("Ditt meddelande har skickats!");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5s
      },
      (error) => {
        setStateMessage("Något gick fel, försök igen senare.");
        setIsSubmitting(false);
        setTimeout(() => {
          setStateMessage(null);
        }, 5000); // hide message after 5s
      }
    );

  e.target.reset(); */
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-500 to-slate-400"
    >
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-full md:w-full bg-gray-900 bg-opacity-40 rounded-xl overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative">
          <div className="bg-slate-700 relative flex flex-wrap py-6 rounded-xl shadow-md">
            <div className="lg:w-full px-6 mt-4 lg:mt-0">
              <form
                onSubmit={sendEmail}
                name="contact"
                className="lg-w-full md:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 "
              >
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font flex justify-center items-center anta-regular">
                  Kontakt
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
                    className="w-full bg-white rounded border border-black focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-3 resize-none leading-10 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-sky-950 border-0 py-2 px-6 focus:inline-none hover:bg-sky-600 rounded text-lg"
                >
                  Submit
                </button>
                {/* {stateMessage && <p>{stateMessage}</p>} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
