import Logo from "../../Icons/Logo.png"
import Logo2 from "../../Icons/Logo2.png"
import React from "react";
import { FaGithub } from "../../Icons/index";

export const Navbar = () => {
  return (
    <div className="p-4 bg-white  flex justify-between  lg:px-32  border-b-2 border-b-slate-200  ">
      <div className="flex gap-3.5 ">
        <div className="flex flex-col gap-1.5  self-center">
        <img src={Logo} alt="logo" className="w-6 h-6" />
        <img src={Logo2} alt="logo" className="w-6 h-6" />
        </div>
        <div className="flex flex-col ">
          <p className="text-lg font-semibold text-slate-600">Awesome</p>
          <p className="text-lg font-semibold text-slate-600">Prometheus</p>
          <p className="text-lg font-semibold text-slate-600">Toolkit</p>
        </div>
      </div>

      <div className="text-base text-slate-500 font-medium flex self-end leading-4 gap-2">
        <a href="https://github.com/samber/awesome-prometheus-alerts" target="_blank" rel="noopener noreferrer" className="flex self-center">
          <FaGithub />
          <span className="ml-1">125 stars</span>
        </a>
      </div>
    </div>
  );
};
