import Navbar from "@/layout/navbar";
import React from "react";

const Pricinglayout = ({ children }: BaseProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Pricinglayout;
