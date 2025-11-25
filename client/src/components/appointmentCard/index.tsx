import { AlarmClock } from "lucide-react";
import CatImage from "assets/gato.svg";
import Image from "next/image";

const mockAppointment = {
  animalName: "Luna",
  ownerName: "João Alves",
  doctorName: "Dr. José Carlos",
  date: "18/02",
  hour: "13:00",
  appointment: "Primeira Consulta",
};

export default function AppointmentCard() {
  return (
    <div className="h-[135px] w-[495px] bg-[#BFB5FF] rounded-[16px] flex justify-between items-center px-6">
      <div className=" bg-zinc-100 w-[51px] h-[90px] rounded-[4px] flex flex-col items-center px-2.5 gap-1 py-3">
        <AlarmClock></AlarmClock>
        <div className="font-semibold text-sm">
          <p>{mockAppointment.date}</p>
          <p>{mockAppointment.hour}</p>
        </div>
      </div>
      <div className="flex flex-row gap-6">
        <p>
          <span className="font-bold">{mockAppointment.animalName}</span>/
          <span className="">{mockAppointment.ownerName}</span>
        </p>
        <p className="">{mockAppointment.doctorName}</p>
      </div>
      <div className="h-[103px] flex flex-col items-center gap-2">
        <Image src={CatImage} alt="CatImage" width={70} height={70} />
        <p className="text-sm bg-zinc-100 rounded-[4px] py-1 px-2">
          {mockAppointment.appointment}
        </p>
      </div>
    </div>
  );
}
