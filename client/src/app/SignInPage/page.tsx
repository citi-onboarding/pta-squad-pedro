"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import Header from "@/components/ui/header"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/button"
import { ModalDatePicker } from "@/components/ui/ModalDatePicker"
import { TimePicker } from "@/components/ui/TimePicker"
import ovelhaImg from "@/assets/ovelha.svg"
import gatoImg from "@/assets/gato.svg"
import porcoImg from "@/assets/porco.svg"
import vacaImg from "@/assets/vaca.svg"
import cavaloImg from "@/assets/cavalo.svg"
import cachorroImg from "@/assets/cachorro.svg"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { postData } from "@/api"

type AnimalType = "DOG" | "CAT" | "PIG" | "COW" | "SHEEP" | "HORSE"
type AppointmentType = "FIRST" | "RETURN" | "CHECKUP" | "VACCINATION"

export default function SignupPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    tutorName: "",
    patientName: "",
    species: "" as AnimalType | "", 
    age: "",
    appointmentType: "" as AppointmentType | "", 
    doctorName: "",
    date: "",
    time: "",
    description: "",
  })


  const speciesOptions = [
    { label: "SHEEP", img: ovelhaImg },
    { label: "CAT", img: gatoImg },
    { label: "PIG", img: porcoImg },
    { label: "COW", img: vacaImg },
    { label: "HORSE", img: cavaloImg },
    { label: "DOG", img: cachorroImg },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, appointmentType: value as AppointmentType }))
  }

  const handleSpeciesSelect = (selected: string) => {
    setFormData((prev) => ({ ...prev, species: selected as AnimalType }))
  }

  const finalizaCadastro = async () => {
    if (!formData.tutorName || !formData.patientName || !formData.date || !formData.species || !formData.appointmentType) {
      alert("Preencha os dados obrigatórios.")
      return
    }

    setLoading(true)

    try {
    
      const combinedDateTimeString = `${formData.date}T${formData.time}:00`
      const appointmentDate = new Date(combinedDateTimeString)

      const patientPayload = {
        patientName: formData.patientName,
        patientAge: parseInt(formData.age), 
        tutorName: formData.tutorName,      
        problemDescription: formData.description,
        animalType: formData.species,       
      }

      const patientResponse = await postData("patient", patientPayload)
      const patientId = patientResponse?.id

      if (!patientId) throw new Error("Erro.")

      const appointmentPayload = {
        appointmentType: formData.appointmentType, 
        appointmentDate: appointmentDate.toISOString(), 
        doctorName: formData.doctorName,
        patientId: patientId,
      }

      await postData("appointment", appointmentPayload)

      alert("Cadastro realizado com sucesso!")
      router.push("/")

    } catch (error) {
      console.error("Erro no cadastro:", error)
      alert("Ocorreu um erro ao realizar o cadastro. Verifique os dados.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header />

      <div className="flex flex-row px-24 gap-4 py-8 items-center">
        <Link href="/">
          <button>
            <ChevronLeft size={38} />
          </button>
        </Link>
        <h1 className="text-4xl font-bold">Cadastro</h1>
      </div>

      <div className="mx-28 bg-white rounded-[24px] p-[0px] shadow-sm flex flex-col gap-[29px]">
        
        <div className="flex flex-col gap-[12px]">
            
            <div className="flex flex-row gap-[24px]">
                <div className="flex flex-col w-1/2 gap-[12px]">
                    <span className="text-[16px] font-[700]">Nome do Paciente</span>
                    <Input
                        name="patientName"
                        value={formData.patientName}
                        onChange={handleInputChange}
                        className="w-full h-[50px] rounded-[8px] border border-[#101010] bg-white px-3 text-base placeholder:text-gray-400 focus:ring-0"
                        placeholder="Digite aqui..."
                    />
                </div>
                <div className="flex flex-col w-1/2 gap-[12px]">
                    <span className="text-[16px] font-[700]">Nome do Tutor</span>
                    <Input
                        name="tutorName"
                        value={formData.tutorName}
                        onChange={handleInputChange}
                        className="w-full h-[50px] rounded-[8px] border border-[#101010] bg-white px-3 text-base placeholder:text-gray-400 focus:ring-0"
                        placeholder="Digite aqui..."
                    />
                </div>
            </div>

            <div className="flex flex-col gap-[12px] mt-2"> 
                <span className="text-[16px] font-[700]">Qual é a espécie do paciente?</span> 
                
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 w-fit">
                    {speciesOptions.map((option) => {
                    const isSelected = formData.species === option.label

                    return (
                    <button
                        key={option.label}
                        type="button" 
                        onClick={() => handleSpeciesSelect(option.label)}
                        className={`
                            flex flex-col items-center justify-center p-8 rounded-[16px] transition-all
                            ${isSelected 
                            ? "bg-[#D9D9D9]"
                            : "bg-white" 
                            }
                        `}
                        >
                        <div className="relative w-20 h-20 mb-1">
                            <Image
                            src={option.img}
                            alt={option.label}
                            fill 
                            className="object-contain" 
                            sizes="w-120px h-120px"
                            />
                        </div>
                    </button>
                    )
                    })}
                </div>
            </div>

            <div className="flex flex-row gap-[24px] mt-2">
                <div className="flex flex-col w-1/2 gap-[12px]">
                    <span className="text-[16px] font-[700]">Idade do Paciente</span>
                    <Input
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full h-[50px] rounded-[8px] border border-[#101010] bg-white px-3 text-base placeholder:text-gray-400 focus:ring-0"
                        placeholder="Digite aqui..."
                        type="number"
                    />
                </div>
                
                <div className="flex flex-col w-1/2 gap-[12px]">
                    <span className="text-[16px] font-[700]">Tipo de consulta</span>
                    <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-full h-[50px] bg-white rounded-[8px] border border-[#101010] px-3 text-base data-[placeholder]:text-gray-400">
                            <SelectValue placeholder="Selecione aqui" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="FIRST">Primeira Consulta</SelectItem>
                            <SelectItem value="RETURN">Retorno</SelectItem>
                            <SelectItem value="CHECKUP">Check-up</SelectItem>
                            <SelectItem value="VACCINATION">Vacinação</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="flex flex-row gap-[24px] mt-2">
                <div className="flex flex-col w-1/3 gap-[12px]">
                    <span className="text-[16px] font-[700]">Médico Responsável</span>
                    <Input
                        name="doctorName"
                        value={formData.doctorName}
                        onChange={handleInputChange}
                        className="w-full h-[50px] rounded-[8px] border border-[#101010] bg-white px-3 text-base placeholder:text-gray-400 focus:ring-0"
                        placeholder="Digite aqui..."
                    />
                </div>
                
                <div className="flex flex-col w-1/3 gap-[12px]">
                    <span className="text-[16px] font-[700]">Data do atendimento</span>
                    <div onChange={(e: any) => setFormData({...formData, date: e.target.value})}>
                         <ModalDatePicker 
                            className="w-full h-[50px] rounded-[8px] border border-[#101010] placeholder:text-gray-400"
                            placeholder="dd/mm/aa"
                         />
                    </div>
                </div>

                <div className="flex flex-col w-1/3 gap-[12px]">
                    <span className="text-[16px] font-[700]">Horário do Atendimento</span>
                    <div onChange={(e: any) => setFormData({...formData, time: e.target.value})}>
                        <TimePicker 
                             className="w-full h-[50px] rounded-[8px] border border-[#101010] placeholder:text-gray-400"
                             placeholder="00:00"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[12px] mt-2">
                <span className="text-[16px] font-[700]">Descrição do Problema</span>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full rounded-[8px] border border-[#101010] bg-white p-3 text-base placeholder:text-gray-400 focus:outline-none focus:ring-0 resize-none"
                    placeholder="Digite aqui..."
                />
            </div>
        </div>

        <div className="flex items-center justify-end mt-4">
            <Button
                type="button"
                onClick={finalizaCadastro}
                disabled={loading}
                className="w-full max-w-[400px] h-[42px] rounded-[24px] bg-[#50E678] text-white flex items-center justify-center hover:bg-[#45cf6a] text-lg"
            >
                {loading ? "Cadastrando..." : "Finalizar cadastro"}
            </Button>
        </div>

      </div>
    </div>
  )
}
