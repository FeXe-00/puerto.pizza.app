"use client";

import React from "react";
import { SiInstagram } from "@icons-pack/react-simple-icons";

const Body = () => {
  const instagramUrl =
    "https://www.instagram.com/puertopizza_mza?igsh=OWFsM3pveThjOG02";

  const menuUrl =
    "https://drive.google.com/file/d/1-YTXWc96l2IH57SQC8pjr5CiH3Qsx6RQ/view?usp=sharing";
  // "https://drive.google.com/file/d/1bO65pcHNS-w20Q1X_LFVeZbGKTUm8IKA/view?usp=sharing";

  const takeAwayUrl =
    "https://www.pedidosya.com.ar/restaurantes/maipu/puerto-pizza-3bfe16aa-6510-4147-b4c0-bac32a5bc818-menu";

  const phoneNumber = "2615500624"; // Replace with the full phone number in international format, without '+'
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="flex flex-col justify-center gap-5">
      <button
        disabled={!instagramUrl}
        onClick={() => window.open(menuUrl)}
        className=""
      >
        Menu
      </button>
      <button
        disabled={!menuUrl}
        onClick={() => window.open(whatsappLink)}
        className=""
      >
        Take Away
      </button>
      <button disabled={!takeAwayUrl} onClick={() => window.open(takeAwayUrl)}>
        Pedidos Ya
      </button>

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
