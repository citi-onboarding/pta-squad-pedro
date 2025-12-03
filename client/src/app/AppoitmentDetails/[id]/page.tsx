"use client";

import { useEffect, useState } from "react";
import { getData, postData } from "@/api";
import GatoImg from "@/assets/gato.svg";
import CachorroImg from "@/assets/cachorro.svg";
import VacaImg from "@/assets/vaca.svg";
import CavaloImg from "@/assets/cavalo.svg";
import OvelhaImg from "@/assets/ovelha.svg";
import PorcoImg from "@/assets/porco.svg";
import VisualPage from "@/components/AppointmentDetails/appoitmentpage"; 

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
                setData(response); // Já não é mais string
            } catch (e) {
                console.error("Error loading data:", e);
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
                appointmentType: "RETURN", // Campo obrigatório
                appointmentDate: new Date().toISOString(),
                doctorName: "Dr. TBD" // Campo obrigatório
            });
        } catch (e) {
            console.error("Error creating appointment:", e);
        }
    };

    const getAnimalImage = () => {
        if (!data || !data.animalType) return null; 

        const tipo = data.animalType.toUpperCase(); // Use animalType conforme schema

        if (tipo === 'DOG') return CachorroImg;
        if (tipo === 'CAT') return GatoImg; 
        if (tipo === 'COW') return VacaImg;
        if (tipo === 'HORSE') return CavaloImg;
        if (tipo === 'SHEEP') return OvelhaImg;
        if (tipo === 'PIG') return PorcoImg;
        
        return null; 
    };

    if (loading) return <div>Loading...</div>;
    if (!data) return <div>No data found</div>;

    return (
        <VisualPage 
            data={data}
            loading={loading}
            animalImage={getAnimalImage()} 
            onAgendamento={handleAgendamento}
            onBack={() => window.history.back()}
        />
    );
}