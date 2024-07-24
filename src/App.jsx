import React from "react";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex h-screen bg-white dark:bg-slate-900">
      <section className="w-[10%] sm:w-[20%] md:w-[15%]">
        <Sidebar />
      </section>
      <section className="flex flex-col w-[90%] sm:w-[85%] overflow-auto">
        <Main />
      </section>
    </div>
  );
};

export default App;
