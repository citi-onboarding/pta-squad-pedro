"use client";

import Image from "next/image";
import AppoitmentCard from "@/components/appoitmentCard";
import SetaSimples from "@/assets/simpleseta.svg";
import Check from "@/assets/task_alt.svg";
import { Button } from "@/components/ui/button";
import IntegrationPage from "@/components/AppointmentDetails/appontmentDetailsData";
import Header from "@/components/ui/header";

interface PatientViewProps {
    params:{id: string}; 
    onAgendamento: () => void; 
    onBack: () => void;    
}

export default function VisualPage({ params, onAgendamento, onBack }: PatientViewProps) {
    const id = params.id;
    const [patientData, appointmentData, historyData, AnimalImage] = IntegrationPage(id);

    return (
        <div className="w-full min-h-screen"> 
            <Header />
            <div className="px-4 sm:px-8 xl:px-44 2xl:px-72 pt-6 pb-16">

                <div className="flex items-center mb-8 cursor-pointer" onClick={onBack}>
                    <Image src={SetaSimples} alt="Voltar" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6 mr-4" />
                    <div className="font-[700] text-3xl md:text-3xl">Detalhes da Consulta</div>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-start gap-10 lg:gap-[150px]">

                    <div className="w-full lg:w-[680px] flex flex-col gap-4">
                        <div className="font-[700] text-xl mb-3">Paciente</div>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">

                            {AnimalImage && (
                                <Image src={AnimalImage} alt="Animal" width={180} height={180} 
                                className="w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 sm:mr-6 object-contain"/>
                            )}

                            {patientData && appointmentData && (
                                <div className="mt-2 sm:mt-0 text-center sm:text-left sm:ml-4 lg:ml-6 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="font-[700] text-lg">{patientData.patientName}</div> 
                                        <div className="font-[400] text-sm">{patientData.patientAge || 5} anos</div>
                                    </div>

                                    <div className="mt-1">
                                        <div className="font-[400] text-sm">{patientData.tutorName}</div> 
                                        <div className="font-[400] text-sm">{appointmentData.doctorName}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mb-3">
                            <div className="font-[700] text-base mb-1">Descrição do problema:</div>
                            <div className="font-[400] text-base w-full sm:max-w-md lg:max-w-none text-justify">
                                {patientData?.problemDescription || "Carregando..."}
                            </div>
                        </div>

                        <div className="flex items-center mt-2 mb-4">
                            <div className="font-[700] text-base mr-3">Tipo de consulta:</div>
                            <div className="px-3 py-1 rounded bg-[#AAE1FF] text-[#292929] font-[400] text-sm">
                                {appointmentData?.appointmentType || ""}
                            </div>
                        </div>

                        <div className="mt-4 w-full lg:w-[624px] border border-[#D9D9D9] rounded-[24px] p-3 flex flex-col justify-center"> 
                            <div className="font-[700] text-base text-center mb-2">
                                Deseja realizar outra consulta?
                            </div>
                            <Button onClick={onAgendamento} className="w-full rounded-[12px] h-12 bg-[#50E678] hover:bg-green-600 flex items-center justify-center">
                                <Image src={Check} alt="Check" width={20} height={20} className="w-5 h-5 mr-2" />
                                <div className="text-white font-[500] text-base">Agendamento</div>
                            </Button>
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="font-[700] text-xl mb-4">Histórico de Consultas</div>
                        <div className="w-full lg:w-[558px] rounded-3xl border border-[#D9D9D9] p-2 sm:p-4 lg:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {historyData && historyData.length > 0 ? (
                                historyData.map((item: any, idx: number) => (
                                    <AppoitmentCard key={idx} {...item} />
                                ))
                            ) : (
                                <div className="text-sm text-gray-500 text-center mt-2 col-span-2">Nenhum histórico encontrado</div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
