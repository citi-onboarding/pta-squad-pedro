"use client";

import { useEffect, useState } from "react";
import { getData } from "@/api";

import GatoImg from "@/assets/gato.svg";
import CachorroImg from "@/assets/cachorro.svg";
import VacaImg from "@/assets/vaca.svg";
import CavaloImg from "@/assets/cavalo.svg";
import OvelhaImg from "@/assets/ovelha.svg";
import PorcoImg from "@/assets/porco.svg";

interface CardContent {
    date?: string;
    time?: string;
    type?: string;
    doctor?: string;
}

export default function IntegrationPage(id: string) {
    const [appointmentData, setAppointmentData] = useState<any>(null);
    const [patientData, setPatientData] = useState<any>(null);
    const [historyAppointment, setHistoryAppointment] = useState<any[]>([]);

    useEffect(() => {
        const load = async () => {
            try {
                if (!id) return; 

                const appointmentRes = await getData("appointment", id);
                const patientId = appointmentRes.value.patientId;
                const patientRes = await getData("patient", patientId);

                setPatientData(patientRes.value);
                setAppointmentData(appointmentRes.value);

                const allAppointments = (await getData("appointment")) || [];
                const historyData = allAppointments
                    .filter((appt: any) => appt?.patientId === patientId)
                    .map((appt: any) => {
                        const datetime = new Date(appt.appointmentDate);
                        return {
                            date: datetime.toLocaleDateString(["pt-BR"], { day: "2-digit", month: "2-digit" }),
                            time: datetime.toLocaleTimeString(["pt-BR"], { hour: "2-digit", minute: "2-digit" }),
                            doctor: appt.doctorName,
                            type: appt.appointmentType
                        };
                    });

                setHistoryAppointment(historyData);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        load();
    }, [id]);

    const AnimalImage = patientData?.animalType ? (
        patientData.animalType.toUpperCase() === "DOG" ? CachorroImg :
        patientData.animalType.toUpperCase() === "CAT" ? GatoImg :
        patientData.animalType.toUpperCase() === "COW" ? VacaImg :
        patientData.animalType.toUpperCase() === "HORSE" ? CavaloImg :
        patientData.animalType.toUpperCase() === "SHEEP" ? OvelhaImg :
        patientData.animalType.toUpperCase() === "PIG" ? PorcoImg :
        null
    ) : null;

    return [patientData, appointmentData, historyAppointment, AnimalImage];
}
