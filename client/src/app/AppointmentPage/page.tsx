"use client";

import Header from "@/components/ui/header";
import { ChevronLeft } from "lucide-react";
import Input from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AppointmentCard from "@/components/appointmentCard";
import { getData } from "@/api";
import { useEffect } from "react";

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

export default function AppointmentPage() {
  const [selectedFilter, setSelectedFilter] = useState("Agendamento");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearchTerm, setFilteredSearchTerm] = useState("");
  const [appointmentsList, setAppointmentsList] = useState<Appointment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  type RawAppointment = {
  id: number;
  appointmentType: string;
  appointmentDate: string;
  doctorName: string;
  patientId: number;
};

type RawPatient = {
  id: number;
  patientName: string;
  tutorName: string;
  animalType: string;
};

  useEffect(() => {
    async function loadData() {
      try {
        const getAppointments = await getData("appointment");
        const getPacients = await getData("pacient");

        const appointmentsArray = JSON.parse(getAppointments) as RawAppointment[];
        const pacientsArray = JSON.parse(getPacients) as RawPatient[];

        const baseArray = appointmentsArray.map((appointment) => {
          const foundPatient = pacientsArray.find(
            (patient) => patient.id === appointment.patientId
          );

          const dateObj = new Date(appointment.appointmentDate);
          const isLate = dateObj < new Date();

          const typeTranslation: Record<string, string> = {
            FIRST: "Primeira Consulta",
            RETURN: "Retorno",
            CHECKUP: "Check-up",
            VACCINATION: "Vacinação",
          };

          return {
            id: appointment.id,
            animalName: foundPatient ? foundPatient.patientName : "Não encontrado",
            ownerName: foundPatient ? foundPatient.tutorName : "-",
            doctorName: appointment.doctorName,
            date: dateObj.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
            hour: dateObj.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
            appointment: typeTranslation[appointment.appointmentType] || appointment.appointmentType,
            status: isLate ? "late" : "available" as "available" | "late",
          };
        });

        setAppointmentsList(baseArray);
      } catch (error) {
        console.error(error);
        alert("Não foi possível carregar as consultas");
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, []);

  // Essa funcão é responsável por setar o valor do filtro com o que está digitado no input, no momento em que o botão é clicado
  const handleSearch = () => {
    setFilteredSearchTerm(searchTerm);
  };

  // Essa função serve para alterar o valor do estado do tipo de filtro de acordo com o botão/filtro selecionado
  function changeSelectedFilter() {
    if (selectedFilter == "Agendamento") {
      setSelectedFilter("Histórico");
    } else {
      setSelectedFilter("Agendamento");
    }
  }

  // Essa é a função principal do filtro, primeiro, ela cria um array base de acordo com o filtro escolhido e, em seguida, filtra esse array de acordo com o que foi digitado no input, combinando os dois filtros
  const getFilteredAppointments = () => {
    const baseArray =
      selectedFilter === "Agendamento" ? agendamentoArray : historicoArray;

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

      <div className=" mx-28 grid grid-cols-2 gap-6">
        {displayedAppointments.length > 0 ? (
          displayedAppointments.map((appointment) => (
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
