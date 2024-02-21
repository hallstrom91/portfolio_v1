import { useState } from "react";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Knowledge from "./components/Knowledge";
import Testimonials from "./components/Testimonials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="text-white bg-slate-800">
        <Navbar />
        <About />
        <Projects />
        <Knowledge />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
