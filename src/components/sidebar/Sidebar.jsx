import React from "react";
import { FaComputer } from "react-icons/fa6";
import { AiOutlineDashboard, AiOutlineCreditCard } from "react-icons/ai";
import { MdOutlinePayments, MdOutlineAccountCircle } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { MdOutlineVerticalAlignCenter } from "react-icons/md";
import { GiBrokenBone } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white dark:bg-slate-950/70">
      <div className="flex flex-col gap-3 w-full text-indigo-950/80 h-full justify-between">
        <div className="flex flex-col gap-10 px-4 mt-4">
          <div className="flex items-center justify-center gap-2">
            <div className="text-indigo-900 dark:text-slate-400 text-xl md:text-3xl">
              <FaComputer />
            </div>
            <div className="hidden md:flex font-semibold dark:text-slate-400 text-indigo-900 text-md md:text-xl">
              IT Asset
            </div>
          </div>
          <div className="flex flex-col gap-6 text-sm sm:text-xs md:text-[16px] -ml-1 md:ml-2 font-semibold dark:text-slate-400">
            <div className="flex items-center gap-3">
              <div>
                <AiOutlineDashboard />
              </div>
              <div className="hidden sm:flex dark:hover:text-slate-400/80 cursor-pointer">
                Dashboard
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FiBox />
              </div>
              <div className="hidden sm:flex dark:hover:text-slate-400/80 cursor-pointer">
                Item List
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <MdOutlineVerticalAlignCenter />
              </div>
              <div className="hidden sm:flex dark:hover:text-slate-400/80 cursor-pointer">
                Transaction List
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <GiBrokenBone />
              </div>
              <div className="hidden sm:flex dark:hover:text-slate-400/80 cursor-pointer">
                Broke Unit
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center dark:text-slate-400 dark:hover:text-slate-400/80 cursor-pointer text-md sm:text-sm md:text-[16px] font-semibold px-4 mb-4 gap-3">
          <div>
            <IoSettingsOutline />
          </div>
          <div className="hidden sm:flex">Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
