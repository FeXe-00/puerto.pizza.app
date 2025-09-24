"use client"

import Image from "next/image";
import isologo from "@/assets/isologo.png";

const Header = () => {
  return (
    <div className="flex items-center">
      <Image
        className="w-[280px] h-[280px]"
        src={isologo}
        alt="Logo Puerto Pizza"
      />
    </div>
  );
};

export default Header;
