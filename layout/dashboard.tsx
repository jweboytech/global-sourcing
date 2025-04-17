import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const MainLayout = ({ children }: BaseProps) => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <section className="flex-1 bg-[#F4F4F4]">{children}</section>
      </div>
    </div>
  );
};

export default MainLayout;
