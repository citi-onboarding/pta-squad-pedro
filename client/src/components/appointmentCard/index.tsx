import { AlarmClock } from "lucide-react";

const mockAppointment = {
  animalName: "Luna",
  ownerName: "João Alves",
  doctorName: "Dr. José Carlos",
  date: "18/02",
  hour: "13:00",
};

export default function AppointmentCard() {
  return (
    <div className="h-[135px] w-[495px] bg-[#BFB5FF] rounded-[16px] flex justify-between items-center px-6">
      <div className=" bg-zinc-100 w-[51px] h-[90px] rounded-[4px] flex flex-col items-center p-2.5">
            <AlarmClock></AlarmClock>
            <div className="font-semibold text-sm">
                <p>{mockAppointment.date}</p>
                <p>{mockAppointment.hour}</p>
            </div>
      </div>
    </div>
  );
}
