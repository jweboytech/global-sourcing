import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-16 bg-white flex items-center px-6">
      <Link href="/">
        <div className="font-bold text-3xl">Global Sourcing</div>
      </Link>
    </div>
  );
};

export default Navbar;
