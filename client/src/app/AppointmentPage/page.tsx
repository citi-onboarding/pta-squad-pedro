"use client";

import Header from "@/components/ui/header";
import { ChevronLeft } from "lucide-react";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AppointmentCard from "@/components/appointmentCard";
import { getData } from "@/api";
import { useEffect } from "react";

export default function AppointmentPage() {
  const [selectedFilter, setSelectedFilter] = useState("Agendamento");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearchTerm, setFilteredSearchTerm] = useState("");
  const [appointmentsList, setAppointmentsList] = useState<Appointment[]>([]);

  type rawAppointment = {
    id: number;
    appointmentType: string;
    appointmentDate: string;
    doctorName: string;
    patientId: number;
  };

  type rawPatient = {
    id: number;
    patientName: string;
    tutorName: string;
    animalType: string;
  };

  type Appointment = {
    id: number;
    animalName: string;
    ownerName: string;
    doctorName: string;
    date: string;
    hour: string;
    appointment: string;
    status: "available" | "late";
  };

  const appointmentTypeMapping: Record<string, string> = {
    VACCINATION: "Vacinação",
    CHECKUP: "Check-up",
    FIRST: "Primeira Consulta",
    RETURN: "Retorno",
  };

  // This function is responsible to load the data from the data base
  async function loadData() {
    const patientData: rawPatient[] = await getData("patient");
    const appointmentData: rawAppointment[] = await getData("appointment");

    let appointmentCardsData: Appointment[] = [];

    appointmentData.forEach((appointment) => {
      console.log("Appointment:", appointment);
      const patient = patientData.find((p) => p.id === appointment.patientId);

      const datetime = new Date(appointment.appointmentDate);
      const date = datetime.toLocaleDateString(["pt-BR"], {
        day: "2-digit",
        month: "2-digit",
      });
      const hour = datetime.toLocaleTimeString(["pt-BR"], {
        hour: "2-digit",
        minute: "2-digit",
      });

      const status = new Date() > datetime ? "late" : "available";
      console.log(status);

      appointmentCardsData.push({
        id: appointment.id,
        animalName: patient?.patientName || "Unknown",
        ownerName: patient?.tutorName || "Unknown",
        doctorName: appointment.doctorName,
        date: date,
        hour: hour,
        appointment:
          appointmentTypeMapping[appointment.appointmentType] ||
          appointment.appointmentType,
        status: status,
      });
    });
    setAppointmentsList(appointmentCardsData);
  }

  useEffect(() => {
    loadData();
  }, []);

  // This function is responsible for setting the filter value to what is typed in the input field when the button is clicked
  const handleSearch = () => {
    setFilteredSearchTerm(searchTerm);
  };

  // This function is used to change the state value of the filter type according to the selected button/filter.
  function changeSelectedFilter() {
    if (selectedFilter == "Agendamento") {
      setSelectedFilter("Histórico");
    } else {
      setSelectedFilter("Agendamento");
    }
  }

  // This is the main function of the filter; first, it creates a base array according to the chosen filter and then filters this array according to what was typed in the input, combining the two filters.
  const getFilteredAppointments = () => {
    const availableArray = appointmentsList.filter(
      (appointment) => appointment.status == "available"
    );
    const lateArray = appointmentsList.filter(
      (appointment) => appointment.status == "late"
    );

    const baseArray =
      selectedFilter === "Agendamento" ? availableArray : lateArray;

    if (!filteredSearchTerm) {
      return baseArray;
    }

    return baseArray.filter((appointment) =>
      appointment.doctorName
        .toLowerCase()
        .includes(filteredSearchTerm.toLowerCase())
    );
  };

  const displayedAppointments = getFilteredAppointments();

  return (
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
          <Input
            placeholder="Digite o nome do Dr(a)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></Input>
          <Button
            variant="secondary"
            className="px-6 my-1.5"
            onClick={handleSearch}
          >
            Buscar
          </Button>
        </div>
      </div>

      <div className="mx-28 my-6 flex gap-2 bg-[#F0F0F0] rounded-xl w-fit p-2">
        <button
          onClick={() => changeSelectedFilter()}
          className={`${
            selectedFilter === "Agendamento" ? "bg-white" : "bg-transparent"
          } p-2 rounded-md`}
        >
          Agendamento
        </button>
        <button
          onClick={() => changeSelectedFilter()}
          className={`${
            selectedFilter === "Histórico" ? "bg-white" : "bg-transparent"
          } p-2 rounded-md`}
        >
          Histórico
        </button>
      </div>

      <div className=" mx-28 grid grid-cols-2 gap-6 pb-10">
        {displayedAppointments.length > 0 ? (
          displayedAppointments.map((appointment: Appointment) => (
            <AppointmentCard key={appointment.id} {...appointment} />
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500 py-10">
            Nenhum resultado encontrado.
          </p>
        )}
      </div>
    </div>
  );
}
