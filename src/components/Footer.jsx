import React from "react";
import Social from "./Social";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-slate-600 to-slate-900 text-white text-center border-t-2 border-black overflow-x-hidden">
        <div className="p-4 text-center text-white flex justify-center ">
          <Social />
        </div>
        <div className="pb-2">
          <p>2024 &copy; Simon Hällström Wänfelt</p>
          <p>shallstrom91@gmail.com</p>
        </div>
      </footer>
    </>
  );
}
