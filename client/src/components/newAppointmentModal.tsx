"use client"

import React from "react"
import Image from "next/image"
import BotãoX from "@/assets/Botãoclose.svg"
import LogoCITiPet from "@/assets/LogoCITiPet.svg"
import { ModalDatePicker } from "@/components/ui/ModalDatePicker"
import { TimePicker } from "@/components/ui/TimePicker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select" 

export default function NewAppointmentModal() {
    const [open, setOpen] = React.useState(true)

    function finalizarCadastro() {
    
    }

    if (!open) return null

    return (
        <div className="w-[824px] h-[493px] rounded-[24px] bg-[#FFFFFF] p-[48px] gap-[29px] flex flex-col">

            <div className="relative flex items-center justify-center w-[728px] h-[74px]">
                <div>
                    <Image src={LogoCITiPet} alt="Logo" width={189} height={74} />
                </div>
                <Button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="absolute right-0 p-1 bg-white"
                >
                    <Image src={BotãoX} alt="Fechar" width={24} height={24} />
                </Button>
            </div>  

            
            <div className="mx-auto text-center text-[16px] whitespace-nowrap ">                      
                <span className="font-[700]">O pet já está cadastrado no sistema! </span> Preencha os dados da <span className="font-[700]">consulta</span>
            </div>


            <div className="w-[728px] h-[172px] gap-[12px] flex flex-col">

                <div className="gap-[12px] flex flex-row">

                    <div className="w-[358px] gap-[12px] flex flex-col">

                        <div className="text-[16px]">
                            <span className="font-[700]">Tipo de consulta</span>
                        </div>

                        <Select>    
                           <SelectTrigger className="w-full h-[50px] bg-white rounded-[8px] border border-[#101010] px-3 text-base data-[placeholder]:text-gray-400">
                                <SelectValue placeholder="Selecione aqui" />
                            </SelectTrigger>
                           <SelectContent>
                             <SelectItem value="primeira consulta">Primeira Consulta</SelectItem>
                             <SelectItem value="retorno">Retorno</SelectItem>
                             <SelectItem value="check-up">Check-up</SelectItem>
                             <SelectItem value="vacinação">Vacinação</SelectItem>
                           </SelectContent> 
                        </Select>

                    </div>

                    <div className="w-[358px] h-[80px] gap-[12px] flex flex-col" >  

                        <div className="text-[16px]">
                                <span className="font-[700]">Médico Responsável</span>
                        </div>

                        
                        <Input
                            className="w-full h-[50px] rounded-[8px] border border-[#101010] bg-white px-3 text-base placeholder:text-gray-400"
                            placeholder="Digite aqui..."
                        />
                        
                    </div>
                
                </div>

                <div className="gap-[12px] flex flex-row">

                    <div className="w-[358px] h-[80px] gap-[12px] flex flex-col">   
                    
                        <div className="text-[16px]">
                            <span className="font-[700]">Data do atendimento</span>
                        </div>

                        <ModalDatePicker
                            className="w-[358px] h-[50px] rounded-[8px] border border-[#101010] placeholder:text-gray-400"
                            placeholder="dd/mm/aa"

                        />
                    
                    
                    </div>

                    <div className="w-[358px] h-[80px] gap-[12px] flex flex-col">

                        <div className="text-[16px]">
                            <span className="font-[700]">Horário do Atendimento</span>
                        </div>

                        <TimePicker
                            className="w-[358px] h-[50px] rounded-[8px] border border-[#101010] placeholder:text-gray-400"
                            placeholder="00:00"
                        />



                    </div>

                </div>

            </div>

            <div className="relative flex items-center justify-center w-[728px] h-[74px] pt-[12px]">
                <Button
                    type="button"
                    onClick={finalizarCadastro}
                    className="w-full h-[42px] rounded-[24px] bg-[#50E678] text-white flex items-center justify-center"
                >
                    Finalizar cadastro
                </Button>
            </div>


        </div>


        )
    
    }
        
