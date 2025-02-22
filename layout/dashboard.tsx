import React from "react";
import Navbar from "./navbar";

const MainLayout = ({ children }: BaseProps) => {
  return (
    <div className="flex-grow">
      <Navbar />
      <div className="flex  h-full">
        <section className="w-[220px]"></section>
        <section className="flex-1 bg-[#F4F4F4]">{children}</section>
      </div>
    </div>
  );
};

export default MainLayout;
