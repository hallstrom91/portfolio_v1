import React from "react";
import { useState } from "react";
import "../css/Navbar.css";

import { MdMarkEmailRead } from "react-icons/md"; /* <MdMarkEmailRead /> */
import { BsFillMenuButtonWideFill } from "react-icons/bs"; /* <BsFillMenuButtonWideFill /> */
import { FaWindowClose } from "react-icons/fa"; /* <FaWindowClose /> */

export default function Navbar() {
  // Toggle hamburger menu at click
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const content = (
    <>
      {/* Responsive Layout  */}
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition z-50 rounded-b-md mt-1 bg-gradient-to-t from-slate-600 to-slate-900">
        <ul className="text-center text-xl p-20">
          <li className="my-4 py-4 border-b border-slate-400 hover:bg-sky-900 hover:rounded anta-regular">
            <a
              href="#about"
              className="mr-5 hover:text-sky-400  navLink"
              onClick={handleClick}
            >
              Profil
            </a>
          </li>
          <li className="my-4 py-4 border-b border-slate-400 hover:bg-sky-900 hover:rounded">
            <a
              href="#projects"
              className="mr-5 hover:text-sky-400 navLink"
              onClick={handleClick}
            >
              Projekt
            </a>
          </li>
          <li className="my-4 py-4 border-b border-slate-400 hover:bg-sky-900 hover:rounded">
            <a
              href="#knowledge"
              className="mr-5 hover:text-sky-400 navLink"
              onClick={handleClick}
            >
              Kunskaper
            </a>
          </li>
          <li className="my-4 py-4 border-b border-slate-400 hover:bg-sky-900 hover:rounded">
            <a
              href="#testimonials"
              className="mr-5 hover:text-sky-400 navLink"
              onClick={handleClick}
            >
              Omdömen
            </a>
          </li>
          <li className="my-4 py-4 border-b border-slate-400 hover:bg-sky-900 hover:rounded">
            <a
              href="#contact"
              className="mr-5 hover:text-sky-400 navLink"
              onClick={handleClick}
            >
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <>
      {/* Full Size Layout */}
      <nav className="bg-gradient-to-b from-slate-600 to-slate-900" id="navbar">
        <div className="flex justify-between items-center z-50 text-white lg:py-5 px-20 py-4 border-b-2">
          <div className="flex flex-1">
            <span className="text-3xl font-bold ml-3">
              <a href="#about" className="mr-2 hover:text-sky-400 anta-regular">
                KJS
              </a>
            </span>
          </div>
          <div className="lg:flex md:flex font-normal hidden">
            <div className="flex-10">
              <ul className="flex gap-10 text-[18px]">
                <li className="hover:text-slate-600 transition border-b-2 border-slate-800 hover:border-red-500 cursor-pointer">
                  <a
                    href="#projects"
                    className="mr-2 hover:text-sky-400 navLink"
                  >
                    Projekt
                  </a>
                </li>

                <li className="hover:text-slate-600 transition border-b-2 border-slate-800 hover:border-red-500 cursor-pointer">
                  <a
                    href="#knowledge"
                    className="mr-2 hover:text-sky-400 navLink"
                  >
                    Kunskaper
                  </a>
                </li>
                <li className="hover:text-slate-600 transition border-b-2 border-slate-800 hover:border-red-500 cursor-pointer">
                  <a
                    href="#testimonials"
                    className="mr-2 hover:text-sky-400 navLink"
                  >
                    Omdömen
                  </a>
                </li>
                <li className="hover:text-slate-600 transition border-b-2 border-slate-800 hover:border-red-500 cursor-pointer">
                  <a
                    href="#contact"
                    className="mr-2 hover:text-sky-400 navLink"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>
          </div>
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
