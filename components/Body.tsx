"use client"

import React from "react";
import Instagram from "@mui/icons-material/Instagram";

const Body = () => {
  return (
    <div className="flex flex-col justify-center gap-5">
      <button className="">Menu</button>
      <button className="">Take Away</button>
      <button className="">Pedidos Ya</button>

      <div
        onClick={() =>
          window.open(
            "https://www.instagram.com/puertopizza_mza?igsh=OWFsM3pveThjOG02"
          )
        }
        className="w-full flex justify-center"
      >
        <Instagram />
      </div>
    </div>
  );
};

export default Body;
