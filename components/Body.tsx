"use client";

import React from "react";
import { SiInstagram } from "@icons-pack/react-simple-icons";

const Body = () => {
  const instagramUrl =
    "https://www.instagram.com/puertopizza_mza?igsh=OWFsM3pveThjOG02";

  const menuUrl =
    "https://drive.google.com/file/d/1bO65pcHNS-w20Q1X_LFVeZbGKTUm8IKA/view?usp=sharing";

  const phoneNumber = "2615500624"; // Replace with the full phone number in international format, without '+'
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="flex flex-col justify-center gap-5">
      <button onClick={() => window.open(menuUrl)} className="">
        Menu
      </button>
      <button onClick={() => window.open(whatsappLink)} className="">
        Take Away
      </button>
      <button disabled={true}>Pedidos Ya</button>

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
