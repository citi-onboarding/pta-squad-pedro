"use client";
import { LogoCITiPet } from "@/assets";
import { CiTiMessage } from "@/assets";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [selectedService, setSelectedService] = useState("");

  return (
    <header className="w-full h-16 relative flex items-center justify-center shadow-sm px-8 py-2">
      <div className="absolute left-8">
        <Image
          src={LogoCITiPet}
          alt="LogoCitiPet"
          width={189}
          height={74}
          className="h-10 w-auto object-contain"
        ></Image>
      </div>
      <div className="flex gap-6 items-center">
        <button
          onClick={() => setSelectedService("Atendimento")}
          className={`hover:text-[#50E678] font-medium transition-colors duration-300 text-base pb-1 border-b-2 ${
            selectedService === "Atendimento"
              ? "border-[#50E678] hover:text-black"
              : "border-transparent"
          }`}
        >
          Atendimento
        </button>
        <button
          onClick={() => setSelectedService("Cadastro")}
          className={`hover:text-[#50E678] font-medium transition-colors duration-300 text-base pb-1 border-b-2 ${
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
