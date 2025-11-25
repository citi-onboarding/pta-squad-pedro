import AppointmentCard from "@/components/appointmentCard";

export default function TestPage() {
  return (

    <div className="min-h-screen w-full flex justify-center items-start bg-gray-50 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 w-full max-w-7xl">
        
        <AppointmentCard appointment="Primeira Consulta" status="available" />
        <AppointmentCard appointment="Retorno" status="available" />
        <AppointmentCard appointment="Check-up" status="available" />
        <AppointmentCard appointment="Vacinação" status="available" />
        
      </div>
    </div>
  );
}