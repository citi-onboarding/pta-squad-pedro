"use client";
import { LogoCITiPet } from "@/assets";
import { CiTiMessage } from "@/assets";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [selectedService, setSelectedService] = useState("Atendimento");

  return (
    <header className="w-full h-20 relative flex items-center justify-center shadow-sm shadow-[#D9D9D9]">
      <div className="absolute left-8">
        <Image
          src={LogoCITiPet}
          alt="LogoCitiPet"
          width={189}
          height={74}
          className="h-12 w-auto object-contain"
        ></Image>
      </div>
      <div className="flex gap-6 items-center">
        <button
          onClick={() => setSelectedService("Atendimento")}
          className={`hover:text-[#50E678] transition-colors duration-300 pb-1 border-b-2 ${
            selectedService === "Atendimento"
              ? "border-[#50E678] hover:text-black"
              : "border-transparent"
          }`}
        >
          Atendimento
        </button>
        <button
          onClick={() => setSelectedService("Cadastro")}
          className={`hover:text-[#50E678] transition-colors duration-300 pb-1 border-b-2 ${
            selectedService === "Cadastro"
              ? "border-[#50E678] hover:text-black"
              : "border-transparent"
          }`}
        >
          Cadastro
        </button>
      </div>
      <div className="absolute right-8">
        <Image
          src={CiTiMessage}
          alt="CITiMessage"
          width={220}
          height={24}
          className="h-5 w-auto object-contain"
        ></Image>
      </div>
    </header>
  );
}
