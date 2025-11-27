"use client";

import Header from "@/components/ui/header";
import { ChevronLeft } from "lucide-react";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/button";


export default function AppointmentPage() {
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
        </div>
    )
}