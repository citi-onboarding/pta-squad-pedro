"use client"

import React from "react"
import Image from "next/image"
import BotãoX from "@/assets/Botãoclose.svg"
import LogoCITiPet from "@/assets/LogoCITiPet.svg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"

export default function SigninModal() {

  const [open, setOpen] = React.useState(true)   

  function enviar() {
    
  }

  if (!open) return null  

  return (
    <div className="w-[408px] h-[423px] rounded-[24px] bg-[#FFFFFF]">

      <div className="flex items-center pt-[48px]">
        <div className="ml-[109.5px]">
          <Image src={LogoCITiPet} alt="Logo" width={189} height={74} />
        </div>

        <Button
          type="button"
          onClick={() => setOpen(false)}
          className="ml-[37.5px] p-1 bg-white"
        >
          <Image src={BotãoX} alt="Fechar" width={24} height={24} />
        </Button>
      </div>

      <div className="mt-[29px] ml-[89px] w-[230px] text-center text-[16px]">
        <span className="font-[700]">Cadastro finalizado!</span> Envie o comprovante para o <span className="font-[700]">tutor</span>
      </div>

      <div className="mt-[29px] pl-[48px] font-[700]">
        E-mail
      </div>

      <div className="mt-3 px-[48px]">
        <Input
          className="w-[312px] h-[50px] rounded-[8px] border border-[#101010] placeholder:text-gray-400"
          placeholder="Digite aqui..."
        />
      </div>

      <div className="mt-[29px] px-[48px]">
        <Button
          type="button"
          onClick={enviar}
          className="w-[312px] h-[42px] rounded-[24px] bg-[#50E678] text-white flex items-center justify-center"
        >
          Enviar
        </Button>
      </div>
    </div>
  )
}
