import Navbar from "@/layout/navbar";
import React from "react";

const Pricinglayout = ({ children }: BaseProps) => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Pricinglayout;
