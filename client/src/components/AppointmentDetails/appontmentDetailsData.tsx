"use client";

import { useEffect, useState } from "react";
import { getData, postData } from "@/api";

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
                if (id) return;

                const appointmentData = await getData("appointment", id)
                const patientId = appointmentData.value.patientId;
                const patientData = await getData("patient", patientId);

                console.log("Appointment Data", appointmentData.value)
                console.log("Patient Data", patientData.value)
                if (!patientData) {
                    setPatientData(patientData.value);
                }
                setAppointmentData(appointmentData.value)

                const allAppointments = (await getData("appointment")) || [];

                const historyData = allAppointments
                    .filter((appt: any) => appt?.patientId === patientId)
                    .map((appt: any) => {
                        const datetime = new Date(appt.appointmentDate);
                        const historyCardData: CardContent = {
                            date: datetime.toLocaleDateString(["pt-BR"], { day: "2-digit", month: "2-digit" }),
                            time: datetime.toLocaleTimeString(["pt-BR"], { hour: "2-digit", minute: "2-digit" }),
                            doctor: appt.doctorName,
                            type: appt.appointmentType
                        }

                        return historyCardData;
                    })

                setHistoryAppointment(historyData)
                console.log("History Cards Data", historyData)
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        load();
    }, [id]);

    const AnimalImage = () => {
        if (!patientData || !patientData.animalType) return null;
        const tipo = patientData.animalType.toUpperCase();
        if (tipo === "DOG") return CachorroImg;
        if (tipo === "CAT") return GatoImg;
        if (tipo === "COW") return VacaImg;
        if (tipo === "HORSE") return CavaloImg;
        if (tipo === "SHEEP") return OvelhaImg;
        if (tipo === "PIG") return PorcoImg;
        return null;
    };

    return [patientData, appointmentData, historyAppointment, AnimalImage]
};
