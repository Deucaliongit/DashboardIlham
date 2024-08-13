import React from "react";
import { PiComputerTowerBold } from "react-icons/pi";
import { CiMenuKebab } from "react-icons/ci";
const Card = ({ icon, ket, jumlah }) => {
  return (
    <div className="flex flex-col justify-between items-center w-full md:w-auto h-48 bg-white dark:bg-slate-800/60 p-4 rounded-lg">
      <div className="flex w-full items-center justify-between">
        <div className="text-4xl text-indigo-950 dark:text-slate-400 hover:scale-110 easy-in duration-300">
          {icon}
        </div>
        <div className="flex items-center justify-center w-12 h-12  dark:text-slate-400 cursor-pointer hover:scale-110 easy-in duration-300 ">
          <CiMenuKebab />
        </div>
      </div>
      <div className="font-extrabold text-4xl sm:text-2xl lg:text-xl text-indigo-950 dark:text-slate-400">
        {jumlah}
      </div>
      <div className="text-indigo-950 dark:text-slate-400 text-sm font-semibold">
        {ket}
      </div>
    </div>
  );
};

export default Card;
