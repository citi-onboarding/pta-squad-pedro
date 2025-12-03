"use client";

import { useEffect, useState } from "react";
import { getData, postData } from "@/api";
import GatoImg from "@/assets/gato.svg";
import CachorroImg from "@/assets/cachorro.svg";
import VacaImg from "@/assets/vaca.svg";
import CavaloImg from "@/assets/cavalo.svg";
import OvelhaImg from "@/assets/ovelha.svg";
import PorcoImg from "@/assets/porco.svg";
import VisualPage from "../../components/AppointmentDetails/appoitmentpage"; 

interface IntegrationProps {
    params: { id: string };
}

export default function IntegrationPage({ params }: IntegrationProps) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try {
                if(!params?.id) return;
                const response = await getData('patient', params.id);
                const parsedData = typeof response === 'string' ? JSON.parse(response) : response;
                setData(parsedData);
            } catch (e) {
            } finally {
                setLoading(false);
            }
        };
        load();
    }, [params.id]);

    const handleAgendamento = async () => {
        if (!data) return;
        try {
            await postData('appointment', { 
                patientId: data.id, 
                date: new Date().toISOString() 
            });
        } catch (e) {
        }
    };

    const getAnimalImage = () => {
        if (!data || !data.type) return null; 

        const tipo = data.type.toLowerCase().trim();

        if (tipo === 'cachorro' || tipo === 'dog') return CachorroImg;
        if (tipo === 'gato' || tipo === 'cat') return GatoImg; 
        if (tipo === 'vaca' || tipo === 'cow') return VacaImg;
        if (tipo === 'cavalo' || tipo === 'horse') return CavaloImg;
        if (tipo === 'ovelha' || tipo === 'sheep') return OvelhaImg;
        if (tipo === 'porco' || tipo === 'pig') return PorcoImg;
        
        return null; 
    };

    return (
        <VisualPage data={data}loading={loading}animalImage={getAnimalImage()} onAgendamento={handleAgendamento}onBack={() => 
          window.history.back()}/>
    );
}