"use client";

import React from "react";
import { SiInstagram } from "@icons-pack/react-simple-icons";

const Body = () => {
  const instagramUrl =
    "https://www.instagram.com/puertopizza_mza?igsh=OWFsM3pveThjOG02";

  return (
    <div className="flex flex-col justify-center gap-5">
      <button className="">Menu</button>
      <button className="">Take Away</button>
      <button className="">Pedidos Ya</button>

      <div
        onClick={() => window.open(instagramUrl)}
        className="w-full flex justify-center"
      >
        <SiInstagram />
      </div>
    </div>
  );
};

export default Body;
