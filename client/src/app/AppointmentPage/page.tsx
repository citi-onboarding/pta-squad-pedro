"use client";

import Header from "@/components/ui/header";
import { ChevronLeft } from "lucide-react";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { useState } from "react";


export default function AppointmentPage() {
    const [selectedFilter, setSelectedFilter] = useState("Agendamento")

    function changeSelectedFilter() {

        if (selectedFilter == "Agendamento") {
            setSelectedFilter("Histórico")
        } else {
        setSelectedFilter("Agendamento")
        }
    }

    return(
        <div>
            <div>
                <Header></Header>
            </div>

            <div className="flex flex-row px-24 gap-4 py-8">
                <button>
                    <ChevronLeft size={38}></ChevronLeft>
                </button>
                <h1 className="text-4xl font-bold">Atendimento</h1>
            </div>

            <div className="mx-28">
                <h2 className="text-2xl">Qual o médico ?</h2>
                <div className="flex flex-row gap-6 py-6">
                    <Input></Input>
                    <Button variant="secondary" className="px-6 my-1.5">Buscar</Button>
                </div>
            </div>

            <div className="mx-28 my-6 flex gap-2 bg-[#F0F0F0] rounded-xl w-fit p-3">
                <button onClick={ () => changeSelectedFilter() } className={`${selectedFilter === "Agendamento" ? "bg-white" : "bg-transparent"} p-2 rounded-md`}>Agendamento</button>
                <button onClick={ () => changeSelectedFilter() } className={`${selectedFilter === "Histórico" ? "bg-white" : "bg-transparent"} p-2 rounded-md`}>Histórico</button>
            </div>
        </div>
    )
}