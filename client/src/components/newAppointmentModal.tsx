
import React from "react"
import Image from "next/image"
import BotãoX from "@/assets/Botãoclose.svg"
import LogoCITiPet from "@/assets/LogoCITiPet.svg"
import IconeRelogio from "@/assets/IconeRelogio.svg" // falta importar o ícone do relógio
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select" // fazer o select

export default function NewAppointmentModal() {
    const [open, setOpen] = React.useState(true)

    if (!open) return null

    return (
        <div className="w-[824px] h-[493px] rounded-[24px] bg-[#FFFFFF] p-[48px] gap-[29px] flex flex-col">

            <div className="flex items-center pt-[48px]">
                <div className="ml-[317.5px]">
                    <Image src={LogoCITiPet} alt="Logo" width={189} height={74} />
                </div>
                <Button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="ml-[48] p-1 bg-white"
                >
                    <Image src={BotãoX} alt="Fechar" width={24} height={24} />
                </Button>
            </div>  

            
            <div className="mt-[29px] ml-[89px] w-[481px] h-[22px] text-center text-[16px]">                       
                <span className="font-[700]">O pet já está cadastrado no sistema! </span> Preencha os dados da <span className="font-[700]">consulta</span>
            </div>


            <div className="w-[728px] h-[172px] gap-[12px] flex flex-col">

                <div className="gap-[12px] flex flex-row">

                    <div className="w-[358px] h-[80px] gap-[12px] flex flex-col">

                        <div className="text-[16px]">
                            <span className="font-[700]">Tipo de consulta</span>
                        </div>

                        <Select>    
                           <SelectTrigger className="w-[358px] h-[50px] rounded-[8px] border border-[#101010]">
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

                </div>

            </div>


        </div>
        )
    
    }
        
