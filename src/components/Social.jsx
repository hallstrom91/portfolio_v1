import React from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

export default function Social() {
  return (
    <>
      <div className="flex">
        <a
          href="https://github.com/hallstrom91"
          target="_blank"
          className="text-white hover:text-sky-400 transform hover:scale-200 transition-all ease-in-out "
        >
          <IoLogoGithub size={40} />
        </a>
        <a
          href="https://linkedin.com/in/simon-hällström-776b0728a"
          target="_blank"
          className="text-white hover:text-sky-400 transform hover:scale-200 transition-all ease-in-out "
        >
          <IoLogoLinkedin size={40} />
        </a>
      </div>
    </>
  );
}
