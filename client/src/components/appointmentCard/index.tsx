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
    <div className="h-[135px] w-[495px] bg-[#BFB5FF] rounded-[16px]">
      <div className="">
            <AlarmClock></AlarmClock>
      </div>
    </div>
  );
}
