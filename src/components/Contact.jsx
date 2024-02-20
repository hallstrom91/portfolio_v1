import React from "react";
import { PiGithubLogoThin } from "react-icons/pi"; /* <PiGithubLogoThin /> */
import Social from "./Social";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Your Message has been sent!"))
      .catch((error) => alert(error));
  }

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
                netlify
                name="contact"
                onSubmit={handleSubmit}
                className="lg-w-full md:w-full flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 "
              >
                <Social className="flex justify-center items-center" />
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font flex justify-center items-center anta-regular">
                  Kontakt
                </h2>
                <p className="leading-relaxed mb-5">
                  Vill du kontakta mig är du välkommen att använda formuläret
                  nedanför.
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
                    className="w-full bg-white rounded border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setName(e.target.value)}
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
                    className="w-full bg-white rounded border border-gray-700 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setEmail(e.target.value)}
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
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-black focus:border-indigo-400 focus:ring-2 focus:ring-indigo-950 text-base outline-none text-black py-1 px-3 resize-none leading-10 transition-colors duration-200 ease-in-out"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-sky-950 border-0 py-2 px-6 focus:inline-none hover:bg-sky-600 rounded text-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
