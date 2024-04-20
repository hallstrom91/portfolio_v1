import { Routes, Route } from "react-router-dom";
import { Element } from "react-scroll";
import About from "@pages/About";
import Contact from "@pages/Contact";
import Projects from "@pages/Projects";
import Knowledge from "@pages/Knowledge";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function Switch() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainAppLayout />} />
      </Routes>
      <Footer />
    </>
  );
}

function MainAppLayout() {
  return (
    <>
      {/* MAIN-APP-LAYOUT */}
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="knowledge">
        <Knowledge />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}

{
  /* <Route
  path="/app"
  element={
    <>
      <Element path="" name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="knowledge">
        <Knowledge />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  }
/> */
}
