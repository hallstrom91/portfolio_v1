import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

export default function Social() {
  return (
    <>
      <div className="flex">
        <a
          href="https://github.com/hallstrom91"
          target="_blank"
          className="text-white md:hover:text-cyan-600  md:hover:animate-pulse "
        >
          <IoLogoGithub size={40} />
        </a>
        <a
          href="https://linkedin.com/in/simon-hällström-776b0728a"
          target="_blank"
          className="text-white md:hover:text-cyan-600 md:hover:animate-pulse"
        >
          <IoLogoLinkedin size={40} />
        </a>
      </div>
    </>
  );
}
