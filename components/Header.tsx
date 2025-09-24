"use client";

import isologo from "@/assets/isologo.png";

const Header = () => {
  return (
    <div className="flex items-center">
      <img
        className="w-[280px] h-[280px]"
        src={isologo.src}
        alt="Logo Puerto Pizza"
      />
    </div>
  );
};

export default Header;
