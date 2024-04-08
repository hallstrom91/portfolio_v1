import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/Fonts.css";

import { MdMarkEmailRead } from "react-icons/md";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";

export default function Navbar() {
  const { t } = useTranslation();
  // Toggle hamburger menu at click
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      {/* Responsive Layout  */}
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0  transition z-50 rounded-b-md mt-1 bg-gradient-to-t from-slate-600 to-slate-900">
        <ul className="text-center text-xl p-20 uppercase">
          <li className="my-4 py-4 border-b border-slate-400 hover:bg-sky-900 hover:rounded anta-regular">
            {/* NAV ABOUT LINK */}
            <ScrollLink
              to="about"
              className="mr-5 hover:text-sky-400 anta-regular"
              onClick={handleClick}
            >
              {t("translation.navbar.about")}
            </ScrollLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-400 hover:bg-sky-900 hover:rounded">
            {/* NAV PROJECTS LINK */}
            <ScrollLink
              to="projects"
              className="mr-5 hover:text-sky-400 anta-regular"
              onClick={handleClick}
            >
              {t("translation.navbar.projects")}
            </ScrollLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-400 hover:bg-sky-900 hover:rounded">
            {/* NAV KNOWLEDGE LINK */}
            <ScrollLink
              to="knowledge"
              className="mr-5 hover:text-sky-400 anta-regular"
              onClick={handleClick}
            >
              {t("translation.navbar.knowledge")}
            </ScrollLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-400 hover:bg-sky-900 hover:rounded">
            {/* NAV CONTACT LINK */}
            <ScrollLink
              to="contact"
              className="mr-5 hover:text-sky-400 anta-regular"
              onClick={handleClick}
            >
              {t("translation.navbar.contact")}
            </ScrollLink>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <>
      {/* Full Size Layout */}
      <nav
        className="sticky top-0 bg-gradient-to-b from-slate-600 to-slate-900 z-50"
        id="navbar"
      >
        <div className="flex justify-between items-center z-50 text-white lg:py-5 px-20 py-4 border-b-2">
          {/* NAV KJS-HOME/ABOUT LINK */}
          <div className="flex flex-1">
            <span className="text-3xl font-bold ml-3 flex">
              <ScrollLink
                to="about"
                className="mr-2 hover:text-sky-400 fredoka-regular"
              >
                KJS
              </ScrollLink>
            </span>
          </div>
          <div className="lg:flex md:flex font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-10 text-[18px] uppercase">
                <li className="hover:text-slate-600 transition border-b-2 border-slate-800 hover:border-red-500 cursor-pointer">
                  {/* NAV ABOUT LINK */}
                  <ScrollLink
                    to="projects"
                    className="mr-2 hover:text-sky-400 anta-regular"
                  >
                    {t("translation.navbar.projects")}
                  </ScrollLink>
                </li>

                <li className="hover:text-slate-600 transition border-b-2 border-slate-800 hover:border-red-500 cursor-pointer">
                  {/* NAV KNOWLEDGE LINK */}
                  <ScrollLink
                    to="knowledge"
                    className="mr-2 hover:text-sky-400 anta-regular"
                  >
                    {t("translation.navbar.knowledge")}
                  </ScrollLink>
                </li>

                <li className="hover:text-slate-600 transition border-b-2 border-slate-800 hover:border-red-500 cursor-pointer">
                  {/* NAV CONTACT LINK */}
                  <ScrollLink
                    to="contact"
                    className="mr-2 hover:text-sky-400 anta-regular"
                  >
                    {t("translation.navbar.contact")}
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
          {/* NAV RESPONSIVE MENU TOGGLE */}
          <div>{click && content}</div>

          <button className="block md:hidden transition" onClick={handleClick}>
            {click ? (
              <FaWindowClose size={25} />
            ) : (
              <BsFillMenuButtonWideFill size={25} />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
