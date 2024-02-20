import React from "react";
import imgLOAD from "../images/Images";
import Social from "./Social";

export default function Footer() {
  return (
    <>
      {/*       <footer className="bg-gradient-to-b from-slate-400 to-slate-800 text-white text-center border-t-2 border-black overflow-x-hidden">
        <div className="p-4 text-center text-white flex justify-center ">
          <Social />
        </div>
        <div className="pb-2">
          <p>2024 &copy; Simon Hällström Wänfelt</p>
        </div>
      </footer> */}

      <div className="overflow-hidden bg-slate-400">
        <div className="bottom-0 h-[100px] w-[100%] rounded-t-[100%] bg-gradient-to-b from-slate-500 to-slate-900">
          <div className="mt-5 text-center text-2xl text-white">
            <div className="p-4 text-center text-white flex justify-center">
              <Social />
            </div>
            <div className="pb-4">
              <p>2024 &copy; Simon Hällström Wänfelt</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
