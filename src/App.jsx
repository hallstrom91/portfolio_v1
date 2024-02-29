import React from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import translationEN from "../locales/en/translation.json";
import translationSV from "../locales/sv/translation.json";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Knowledge from "./components/Knowledge";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "sv", // default lang
  resources: {
    sv: {
      translation: translationSV,
    },
    en: {
      translation: translationEN,
    },
  },
});

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <main className="text-white bg-slate-800">
        <Navbar />
        <About />
        <Projects />
        <Knowledge />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </I18nextProvider>
  );
}

export default App;
