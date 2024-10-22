import React from 'react';
import { FaGithub } from '../../Icons/index';


 export const Navbar = () => {
  return (
    <div className="p-4 bg-white  flex justify-between  lg:px-32  border-b-2 border-b-slate-200">
      <div className="flex flex-col ">
     
        <p className="text-lg font-semibold text-slate-600">Awesome</p>
        <p className="text-lg font-semibold text-slate-600">Prometheus</p>
        <p className="text-lg font-semibold text-slate-600">Toolkit</p>
      </div>
      <div className="text-base text-slate-500 font-medium flex self-end leading-4 gap-2">
       <div className="flex self-center "><FaGithub/></div> 
        <div>125 stars</div>
      </div>
    </div>
  );
};


