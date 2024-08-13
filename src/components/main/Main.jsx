import React, { useEffect, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import profile from "../../assets/img/profile.jpg";
import Card from "../miniComponents/Card";
import TableItem from "../miniComponents/TableItem";
import { PiComputerTowerBold, PiBuildingOffice } from "react-icons/pi";
import { MdComputer } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaComputer } from "react-icons/fa6";
import Logs from "../miniComponents/Logs";
import axios from "axios";

const Main = () => {
  const [log, setLog] = useState([]);

  useEffect(() => {
    const dataLog = async () => {
      try {
        const apiUrl = "http://10.17.44.43:3000/log-user";
        const dataLog = await axios.get(apiUrl);
        setLog(dataLog.data.data);
      } catch (error) {}
    };

    dataLog();
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-slate-100 dark:bg-slate-950 ">
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
          <Card icon={<FaComputer />} ket={"Total Asset Bekas"} jumlah={"5"} />
          <Card icon={<IoMdClose />} ket={"Total Asset Rusak"} jumlah={"15"} />
        </div>
        <TableItem />
      </section>
      <section className="md:w-[25%] dark:bg-slate-900/30 border-none md:border-l mx-4 md:mx-0 rounded-md md:rounded-none py-2">
        <div className="hidden md:flex w-auto m-4 dark:bg-slate-900/90 bg-white p-4 rounded-md flex-col gap-2.5">
          <div className="dark:text-slate-400 font-semibold text-md md:text-lg flex justify-between items-center">
            <div>Ilham Rifai</div>
            <div className="hidden md:flex">
              <img className="w-8 h-8 rounded-full" src={profile} />
            </div>
          </div>
          <div className="dark:text-slate-400 font-semibold text-xs md:text-md pb-2">
            Administrator
          </div>
          <div className="text-indigo-900 font-bold text-sm md:text-md dark:text-transparent dark:bg-gradient-to-tl from-indigo-800 to-pink-800 py-2 rounded-md cursor-pointer bg-indigo-800 ">
            <div className="dark:text-slate-300 text-white text-center">
              Profile
            </div>
          </div>
          <div className="text-indigo-900 font-bold text-sm md:text-md dark:text-transparent dark:bg-gradient-to-tl from-indigo-800 to-pink-800 py-2 rounded-md cursor-pointer bg-slate-600 ">
            <div className="dark:text-slate-300 text-white text-center">
              Logout
            </div>
          </div>
        </div>
        <div className="w-auto p-4 rounded-md flex flex-col gap-4">
          <div className="text-slate-900 dark:text-slate-400 font-semibold text-sm md:text-lg">
            Activity Logs
          </div>
          {log.length === 0 ? (
            <div>
              <Logs
                key={"Data not found"}
                tanggal={"Data not found"}
                action={"Data not found"}
              />
            </div> // Display if no data is available
          ) : (
            log.map((logAction, index) => (
              <Logs
                key={logAction.id}
                tanggal={logAction.createdAt}
                action={logAction.log}
              />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Main;
