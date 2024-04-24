import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Switch from "@routes/SwitchMain";
import Intro from "@pages/Intro";
import "./App.css";
// i18n contextprovider for lng select
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
// cookie
import Cookies from "js-cookie";
// Cookie HOC - delcine or accept to make it go away
import CookiePolicyHOC from "@helper/CookiePolicyHOC";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const savedLanguage = Cookies.get("language");

    if (savedLanguage) {
      navigate("/app");
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route
          path="/"
          element={
            <CookiePolicyHOC>
              <Intro />
            </CookiePolicyHOC>
          }
        />
        <Route
          path="/app/*"
          element={
            <CookiePolicyHOC>
              <Switch />
            </CookiePolicyHOC>
          }
        />
      </Routes>
    </I18nextProvider>
  );
}

export default App;
