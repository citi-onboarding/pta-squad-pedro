"use client";

import Image from "next/image"
import AppoitmentCard from "@/components/appoitmentCard"
import SetaSimples from "@/assets/simpleseta.svg"
import Check from "@/assets/task_alt.svg"
import { Button } from "@/components/ui/button"

interface PatientViewProps {
  data: any;             
  loading: boolean;      
  animalImage: any;      
  onAgendamento: () => void; 
  onBack: () => void;    
}

export default function VisualPage({ data, loading, animalImage, onAgendamento, onBack }: PatientViewProps) {
    if (loading || !data) return null;

    return (
        <div className="w-full min-h-screen "> 
            <div className="px-4 sm:px-8 xl:px-44 2xl:px-72 pt-10 pb-20">
                <div className="flex items-center mb-10 cursor-pointer" onClick={onBack}>
                    <Image src={SetaSimples} alt="Voltar" width={32} height={32} className="w-6 h-6 md:w-8 md:h-8 mr-4" />
                    <div className="font-[700] text-3xl md:text-5xl">Detalhes da Consulta</div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-start gap-12 lg:gap-[150px]">
                    <div className="w-full lg:w-[680px]">
                        <div className="font-[700] text-xl mb-4">Paciente</div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-8">
                            {animalImage && (
                                <Image src={animalImage} alt="Animal" width={295} height={299} className="w-28 h-28 sm:w-40
                                sm:h-40 lg:w-[295px] lg:h-[299px] sm:mr-8 object-contain"/>
                            )}
                            
                            <div className="mt-4 sm:mt-8 text-center sm:text-left lg:ml-[45px]">
                                <div className="font-[700] text-lg">{data.name}</div> 
                                <div className="font-[400] text-sm mt-4 lg:mt-[126px]">{data.ownerName}</div> 
                                <div className="font-[400] text-sm">{data.vetName}</div>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-[60px]">
                            <div className="font-[700] text-base mb-2">Descrição do problema:</div>
                            <div className="font-[400] text-base w-full sm:max-w-md lg:max-w-none text-justify">
                                {data.description}
                            </div>
                        </div>

                        <div className="flex items-center mt-6">
                            <div className="font-[700] text-base mr-4">Tipo de consulta:</div>
                            <div className="px-3 py-1 rounded bg-[#AAE1FF] text-[#292929] font-[400] text-sm">
                                {data.consultationType}
                            </div>
                        </div>

                        <div className="mt-12 w-full lg:w-[624px] border border-[#D9D9D9] 
                        rounded-[24px] p-4 flex flex-col justify-center "> 
                            <div className="font-[700] text-base text-center mb-3">
                                Deseja realizar outra consulta?
                            </div>
                            <Button onClick={onAgendamento} className="w-full rounded-[12px] h-12 bg-[#50E678] hover:bg-green-600 flex items-center justify-center">
                                <Image src={Check} alt="Check" width={20} height={20} className="w-5 h-5 mr-2" />
                                <div className="text-white font-[500] text-base">Agendamento</div>
                            </Button>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="font-[700] text-xl mb-4 ">
                            Histórico de Consultas
                        </div>
                        <div className="w-full h-auto lg:w-[558px] lg:h-[448px] rounded-3xl border border-[#D9D9D9] 
                        p-2 sm:p-4 lg:p-6 space-y-4 overflow-y-auto"> 
                            {data.history && data.history.length > 0 ? (
                                data.history.map((item: any, idx: number) => (
                                    <AppoitmentCard key={idx} {...item} />
                                ))
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}