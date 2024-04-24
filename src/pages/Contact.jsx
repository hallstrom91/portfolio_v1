import React, { useState, useRef, useEffect } from "react";
import Social from "@components/Social";
// translation
import { useTranslation } from "react-i18next";
//icons
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BiMailSend } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // handle input
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // send email
  const sendEmail = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.ok) {
        setStateMessage(t("translation.contact.form.emailSent"));
        setTimeout(() => {
          setStateMessage("");
        }, 5000);
      } else {
        throw new Error("Kunde inte skicka epost.");
      }
    } catch (error) {
      setStateMessage(t("translation.contact.form.emailFailed"));
      setTimeout(() => {
        setStateMessage("");
      }, 5000);
    }
    setIsSubmitting(false);
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-600 to-slate-500 pt-5 pb-10"
    >
      <div className="py-6 flex md:flex-col justify-center md:py-12">
        <div className="relative py-3 w-[85%] md:w-1/2 2xl:w-1/3 md:mx-auto justify-center">
          {/* background container skew */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-bg-slate-900 shadow-lg transform -skew-y-8 rounded-2xl md:skew-y-0 md:rotate-6 md:rounded-3xl rotate-3"></div>

          <div className="text-white relative px-4 py-8 bg-slate-600 shadow-lg rounded-2xl p-10 md:rounded-3xl md:p-20">
            <div className="text-center pb-6">
              {/* contact card title */}

              <h2 className="text-white md:text-4xl text-3xl mb-4 font-medium flex justify-center items-center anta-regular">
                {t("translation.contact.title")}
                <MdOutlineMarkEmailRead className="ml-1" />
              </h2>

              {/* contact card description */}
              <p className="leading-relaxed mb-5 text-center ">
                {t("translation.contact.description")}
              </p>
            </div>
            {/*    Email Form (emailjs)  */}
            <div
              name="contact"
              className="lg-w-full md:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 "
            >
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-white">
                  {t("translation.contact.form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInput}
                  autoComplete="name"
                  className="w-full bg-white rounded border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-1 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-white md"
                >
                  {t("translation.contact.form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
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
                  value={formData.message}
                  onChange={handleInput}
                  rows={5}
                  className="w-full bg-white rounded border border-black focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-1  resize-y leading-2 md:leading-2 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="flex justify-between">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    sendEmail();
                    clearForm();
                  }}
                  type="submit"
                  className="flex text-white bg-green-900 border-0 py-2 px-6 focus:inline-none md:hover:bg-green-600 rounded md:text-lg shadow-lg"
                >
                  {t("translation.contact.form.submitBtn")}
                  <BiMailSend className="ml-2" size={25} />
                </button>
                <button
                  type="reset"
                  onClick={clearForm}
                  className="flex text-white bg-red-900 border-0 py-2 px-6 focus:inline-none md:hover:bg-red-600 rounded md:text-lg shadow-lg"
                >
                  {t("translation.contact.form.clearBtn")}
                  <BiSolidTrash className="ml-2" size={25} />
                </button>
              </div>
              <div className="flex justify-center pt-8 text-black md:text-lg">
                {stateMessage && <p>{stateMessage}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
