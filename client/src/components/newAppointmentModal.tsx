"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import BotãoX from "@/assets/Botãoclose.svg" 
import LogoCITiPet from "@/assets/LogoCITiPet.svg" 
import { ModalDatePicker } from "@/components/ui/ModalDatePicker"
import { TimePicker } from "@/components/ui/TimePicker"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/Input"
import { ChevronDown } from "lucide-react" 
import { getData } from "@/api" 

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Patient {
  id: number
  patientName: string      
  animalType: string      
  patientAge: number       
  tutorName: string        
  problemDescription?: string
}

export default function NewAppointmentModal() {
  const [open, setOpen] = useState(true)
  
  const [searchTerm, setSearchTerm] = useState("")
  const [patients, setPatients] = useState<Patient[]>([]) 
  const [allPatients, setAllPatients] = useState<Patient[]>([]) 
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(false)

 
  useEffect(() => {
    async function fetchPatients() {
        try {
            const data = await getData("patient"); 
            setAllPatients(data);
        } catch (error) {
            console.error("Erro ao buscar pacientes:", error);
        }
    }
    fetchPatients();
  }, []);

  
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        setLoading(true)
        
        const filtered = allPatients.filter(p => 
            p.patientName.toLowerCase().includes(searchTerm.toLowerCase())
        )
        
        setPatients(filtered)
        setLoading(false)
        setShowDropdown(true)
      } else {
        setPatients([])
        setShowDropdown(false)
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, allPatients])

  const handleSelectPatient = (patient: Patient) => {
    setSelectedPatient(patient)
    setSearchTerm(patient.patientName) 
    setShowDropdown(false)
  }

  function finalizaCadastro() {
    console.log("Dados finais para envio:", { 
        patientId: selectedPatient?.id,
    })
  }

  if (!open) return null

  return (
    <div className="w-[824px] h-auto min-h-[493px] rounded-[24px] bg-[#FFFFFF] p-[48px] gap-[29px] flex flex-col shadow-xl">
      
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

      <div className="w-[728px] h-auto gap-[12px] flex flex-col">

        <div className="relative group z-50"> 
          <div className="text-[16px] gap-[12px] flex flex-col mb-2">
            <span className="font-[700]">Nome do Paciente</span>
          </div>

          <div className="relative">
            <Input
              className="w-full h-[50px] rounded-[8px] border border-[#101010] bg-white px-3 text-base placeholder:text-gray-400 focus:ring-0 focus-visible:ring-0"
              placeholder="Digite o nome do paciente aqui..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setSelectedPatient(null) 
                setShowDropdown(true)
              }}
              onFocus={() => {
                if(searchTerm === "") setPatients(allPatients); 
                setShowDropdown(true)
              }}
            />
            
            <div className="absolute right-3 top-3 pointer-events-none text-gray-10000">
               <ChevronDown size={24} />
            </div>
          </div>

          {showDropdown && (patients.length > 0 || loading) && (
            <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg max-h-60 overflow-y-auto z-50">
                {loading ? (
                    <div className="p-4 text-gray-500 text-sm">Buscando...</div>
                ) : (
                    patients.map((patient) => (
                        <div 
                            key={patient.id}
                            onClick={() => handleSelectPatient(patient)}
                            className="px-4 py-3 cursor-pointer hover:bg-gray-100 border-b border-gray-50 last:border-0 flex items-center text-sm"
                        >
                            <span className="font-bold text-black mr-1">
                                {patient.patientName}
                            </span>
                            <span className="text-gray-300 mx-1">|</span>
                            <span className="text-gray-400 uppercase mr-1">
                                {patient.animalType}
                            </span>
                             <span className="text-gray-300 mx-1">|</span>
                            <span className="text-gray-400 mr-1">
                                {patient.patientAge} anos
                            </span>
                            <span className="text-gray-300 mx-1">|</span>
                            <span className="text-gray-400">
                                {patient.tutorName}
                            </span>
                        </div>
                    ))
                )}
            </div>
          )}
        </div>


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

      <div className="relative flex items-center justify-center w-[728px] h-[74px]">
        <Button
          type="button"
          onClick={finalizaCadastro}
          className="w-full h-[42px] rounded-[24px] bg-[#50E678] text-white flex items-center justify-center"
        >
          Finalizar cadastro
        </Button>
      </div>
    </div>
  )
}
