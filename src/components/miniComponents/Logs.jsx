import React from "react";
import { MdRefresh } from "react-icons/md";

const Logs = ({ tanggal, action }) => {
  return (
    <div className="w-auto bg-white text-slate-900 dark:text-slate-400 dark:bg-slate-800/60 p-4 rounded-md flex justify-start items-center gap-2 text-sm font-semibold">
      <div className="text-lg md:text-2xl dark:text-indigo-950 bg-slate-100 p-1.5 rounded-full">
        <MdRefresh />
      </div>
      <div className="flex flex-col text-sm">
        <div className="">{action}</div>
        <div className="text-indigo-800 dark:text-indigo-800">{tanggal}</div>
      </div>
    </div>
  );
};

export default Logs;
