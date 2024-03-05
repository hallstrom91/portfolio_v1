import React from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Knowledge from "./pages/Knowledge";
import Testimonials from "./pages/Testimonials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
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
