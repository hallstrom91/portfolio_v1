import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
// icons
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { HiSquares2X2 } from "react-icons/hi2";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { FaWindowClose } from "react-icons/fa";

export default function Navbar() {
  // use translation
  const { t } = useTranslation();
  // Toggle hamburger menu at click
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      {/* Responsive Layout  */}
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0  transition z-50 rounded-b-md mt-1 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <ul className="text-center text-xl p-20 uppercase">
          <li className="my-4 py-4 border-b border-slate-400  anta-regular cursor-pointer">
            {/* NAV ABOUT LINK */}
            <ScrollLink
              to="about"
              className="mr-5 md:hover:text-sky-400 anta-regular"
              onClick={handleClick}
            >
              {t("translation.navbar.about")}
            </ScrollLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-400 cursor-pointer">
            {/* NAV PROJECTS LINK */}
            <ScrollLink
              to="projects"
              className="mr-5 md:hover:text-sky-400 anta-regular cursor-pointer"
              onClick={handleClick}
            >
              {t("translation.navbar.projects")}
            </ScrollLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-40">
            {/* NAV KNOWLEDGE LINK */}
            <ScrollLink
              to="knowledge"
              className="mr-5 md:hover:text-sky-400 anta-regular cursor-pointer"
              onClick={handleClick}
            >
              {t("translation.navbar.knowledge")}
            </ScrollLink>
          </li>
          <li className="my-4 py-4 border-b border-slate-400 cursor-pointer">
            {/* NAV CONTACT LINK */}
            <ScrollLink
              to="contact"
              className="mr-5 md:hover:text-sky-400 anta-regular cursor-pointer"
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
      <nav className="sticky top-0 bg-neutral-900 z-50" id="navbar">
        <div className="flex justify-between items-center z-50 text-white lg:py-5 px-20 py-4 border-b-2 pt-1 pl-1">
          {/* NAV KJS-HOME/ABOUT LINK */}
          <div className="flex flex-1 opacity-100">
            <span className="text-6xl ml-3 flex">
              <ScrollLink
                to="about"
                className="mr-2  bagel-fat-navtext text-transparent bg-clip-text bg-gradient-to-b from-white via-sky-300 to-sky-900 font-black cursor-pointer pr-1"
              >
                KJS
              </ScrollLink>
            </span>
          </div>
          <div className="lg:flex md:flex font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-10 text-[18px] uppercase">
                <li className="hover:text-slate-600 transition border-b-2 border-opacity-0 hover:border-opacity-100 border-slate-800 hover:border-white cursor-pointer">
                  {/* NAV ABOUT LINK */}
                  <ScrollLink
                    to="projects"
                    className="mr-2 md:hover:text-cyan-600 anta-regular"
                  >
                    {t("translation.navbar.projects")}
                  </ScrollLink>
                </li>

                <li className="hover:text-slate-600 transition border-b-2 border-opacity-0 hover:border-opacity-100 border-slate-800 hover:border-white cursor-pointer">
                  {/* NAV KNOWLEDGE LINK */}
                  <ScrollLink
                    to="knowledge"
                    className="mr-2 md:hover:text-cyan-600 anta-regular"
                  >
                    {t("translation.navbar.knowledge")}
                  </ScrollLink>
                </li>

                <li className="hover:text-slate-600 transition border-b-2 border-opacity-0 hover:border-opacity-100 border-slate-800 hover:border-white cursor-pointer">
                  {/* NAV CONTACT LINK */}
                  <ScrollLink
                    to="contact"
                    className="mr-2 md:hover:text-cyan-600 anta-regular"
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
            {click ? <ImCross size={35} /> : <HiOutlineSquaresPlus size={35} />}
          </button>
        </div>
      </nav>
    </>
  );
}
