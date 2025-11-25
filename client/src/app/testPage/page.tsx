import AppointmentCard from "@/components/appointmentCard";

const mockAppointments = [
  {
    animalName: "Thor",
    ownerName: "Maria Silva",
    doctorName: "Dra. Ana Paula",
    date: "20/02",
    hour: "09:30",
    appointment: "Retorno",
    status: "available",
  },
  {
    animalName: "Mia",
    ownerName: "Carlos Eduardo",
    doctorName: "Dr. Roberto",
    date: "21/02",
    hour: "15:00",
    appointment: "Check-up",
    status: "available",
  },
  {
    animalName: "Bob",
    ownerName: "Fernanda Costa",
    doctorName: "Dra. Ana Paula",
    date: "22/02",
    hour: "11:00",
    appointment: "Vacinação",
    status: "available",
  },
  {
    animalName: "Paçoca",
    ownerName: "Lucas Oliveira",
    doctorName: "Dr. José Carlos",
    date: "23/02",
    hour: "14:45",
    appointment: "Primeira Consulta",
    status: "available",
  },
  {
    animalName: "Destruidor",
    ownerName: "Pedro",
    doctorName: "Dr. Felipe",
    date: "21/004",
    hour: "17:00",
    appointment: "Check-up",
    status: "late",
  },
];

export default function TestPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start bg-gray-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-7xl">
        {mockAppointments.map((data, index) => (
          <AppointmentCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
