import AppointmentCard from "@/components/appointmentCard";

export default function TestPage() {
  return (
    <div className=" h-screen flex flex-row justify-center items-center gap-12">
      <AppointmentCard appointment="Primeira Consulta" status="available"></AppointmentCard>
      <AppointmentCard appointment="Retorno" status="available"></AppointmentCard>
    </div>
  );
}
