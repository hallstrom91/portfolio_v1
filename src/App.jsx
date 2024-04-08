import React from "react";
import Switch from "./Switch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <main className="tex">
        <Navbar />
        <Switch />
        <Footer />
      </main>
    </I18nextProvider>
  );
}

export default App;
