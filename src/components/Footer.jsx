import React from "react";
import Social from "./Social";
import { HiArrowUp } from "react-icons/hi";
import { SiFramework } from "react-icons/si";
import { FaReact } from "react-icons/fa"; /* <FaReact /> */
import { SiVite } from "react-icons/si"; /* <SiVite /> */
import { SiTailwindcss } from "react-icons/si";
import { MdOutlineMailLock } from "react-icons/md";
import { FaNodeJs } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-slate-600 to-slate-900 text-white text-center border-t-2 border-black overflow-x-hidden">
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex-grow md:flex-grow-0 flex-shrink-0 md:w-1/2 p-4 text-left">
            <h3 className="mb-2 leading-8 flex text-lg anta-regular">
              Ramverk & Paket:
              <SiFramework size={20} className="ml-2 mt-1.5" />
            </h3>
            <ul className="list-disc ml-6 ">
              <li className="text-white flex items-center">
                <span>Vite & React</span>
                <FaReact className="ml-2" size={15} />
                <SiVite className="ml-2" size={15} />
              </li>
              <li className="text-white flex items-center">
                <span>Tailwind CSS</span>
                <SiTailwindcss className="ml-2" size={15} />
              </li>
              <li className="text-white flex items-center">
                <span>Emailjs</span>
                <MdOutlineMailLock className="ml-2" size={15} />
              </li>
              <li className="text-white flex items-center">
                <span>Node.js</span>
                <FaNodeJs className="ml-2" size={15} />
              </li>
            </ul>
          </div>
          <div className="flex-grow md:flex-grow-0 flex-shrink-0 md:w-1/2 p-4 text-right">
            <a
              href="#navbar"
              className="inline-flex text-black bg-blue-300 border-0 py-2 px-2 focus:outline-none hover:bg-blue-500 rounded text-lg"
            >
              Till Toppen <HiArrowUp size={20} className="mt-1 ml-1" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="p-4 text-center text-white">
            <Social />
          </div>
          <div className="mb-1">
            <p>2024 &copy; Simon Hällström Wänfelt</p>
            <p>shallstrom91@gmail.com</p>
          </div>
        </div>
      </footer>
    </>
  );
}
