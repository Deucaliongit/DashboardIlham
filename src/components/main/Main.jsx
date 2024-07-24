import React from "react";
import { CiCalendar } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import profile from "../../assets/img/profile.jpg";
import Card from "../miniComponents/Card";
import { PiComputerTowerBold, PiBuildingOffice } from "react-icons/pi";
import { MdComputer } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-50 dark:bg-slate-950 h-full">
      <section className="w-auto md:w-[75%] h-full">
        <div className="w-full flex items-center justify-between">
          <div className="text-indigo-900 m-4 font-bold text-xl md:text-2xl dark:text-transparent bg-clip-text dark:bg-gradient-to-tl from-indigo-800 to-pink-800">
            Selamat Datang Ilham
          </div>
          <div className="md:hidden gap-4 flex items-center justify-end px-4 text text-indigo-950 dark:text-slate-400">
            <CiCalendar />
            <IoIosNotificationsOutline />
            <MdOutlineMarkEmailUnread />
            <img className="w-6 h-6 rounded-full" src={profile} />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4">
          <Card
            icon={<PiComputerTowerBold />}
            ket={"Total Asset IT"}
            jumlah={"75"}
          />
          <Card
            icon={<MdComputer />}
            ket={"Total Asset Digunakan"}
            jumlah={"45"}
          />
          <Card
            icon={<PiComputerTowerBold />}
            ket={"Total Asset Rusak"}
            jumlah={"5"}
          />
          <Card icon={<IoMdClose />} ket={"Total Asset Bekas"} jumlah={"15"} />
        </div>
      </section>
      <section className="w-full md:w-[25%] bg-white dark:bg-slate-900/30">
        2
      </section>
    </div>
  );
};

export default Main;
