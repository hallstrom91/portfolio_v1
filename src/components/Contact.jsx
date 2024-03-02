import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

import Social from "./Social";
import { PiGithubLogoThin } from "react-icons/pi";
import { MdOutlineMarkEmailRead } from "react-icons/md";

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  function sendEmail(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (name === "" && email === "") {
      setStateMessage("Fyll i dina uppgifter.");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
      return;
    } else if (name === "") {
      setStateMessage("Fyll i ditt namn.");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
      return;
    } else if (email === "") {
      setStateMessage("Fyll i en giltig email.");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
      return;
    }

    const emailRegex =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (!emailRegex.test(email)) {
      setStateMessage("Använd en giltig email.");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
      return;
    }

    if (message === "") {
      setStateMessage("Skriv gärna en rad.");
      setIsSubmitting(false);
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm("service_q35q8gn", "template_irv9sbk", e.target, {
        publicKey: "KLN7PlV1VP66e_pur",
      })
      .then(
        () => {
          setStateMessage("Tack för ditt meddelande!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
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
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap justify-center align-middle">
        <div className="lg:w-full md:w-full bg-opacity-0 rounded-xl overflow-hidden flex items-center justify-center">
          <div className="bg-slate-700 relative flex flex-wrap py-6 rounded-xl shadow-md sm:w-full md:w-1/2 lg:w-1/2 mx-auto">
            <div className="lg:w-full px-6 mt-4 lg:mt-0">
              <form
                onSubmit={sendEmail}
                name="contact"
                className="lg-w-full md:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 "
              >
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font flex justify-center items-center anta-regular">
                  {t("translation.contact.title")}
                  <MdOutlineMarkEmailRead className="ml-1" />
                </h2>
                <p className="leading-relaxed mb-5 text-center">
                  {t("translation.contact.description")}
                </p>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-white"
                  >
                    {t("translation.contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="w-full bg-white rounded border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-white"
                  >
                    {t("translation.contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="w-full bg-white rounded border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-white"
                  >
                    {t("translation.contact.form.message")}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    className="w-full bg-white rounded border border-black focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-1  resize-y leading-2 md:leading-2 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-sky-950 border-0 py-2 px-6 focus:inline-none hover:bg-sky-600 rounded text-lg"
                >
                  {t("translation.contact.form.submitBtn")}
                </button>
                <div className="flex justify-center pt-8 text-sky-300">
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
