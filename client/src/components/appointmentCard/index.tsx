import { AlarmClock } from "lucide-react";

import CatImage from "assets/gato.svg";

import Image from "next/image";

type AppointmentCardProps = {
  animalName: string;
  ownerName: string;
  doctorName: string;
  date: string;
  hour: string;
  appointment:
    | "Primeira Consulta"
    | "Retorno"
    | "Vacinação"
    | "Check-up"
    | string;
  status: "available" | "late" | string;
};

function getBackgroundColor(
  appointment: AppointmentCardProps["appointment"],
  status: AppointmentCardProps["status"]
) {
  if (status == "late") {
    return "bg-[#F0F0F0]";
  }

  switch (appointment) {
    case "FIRST":
      return "bg-[#BFB5FF]";

    case "RETURN":
      return "bg-[#FF641999]";

    case "VACCINATION":
      return "bg-[#AAE1FF]";

    case "CHECKUP":
      return "bg-[#9CFF95]";

    default:
      return "bg-[#F0F0F0]";
  }
}

export default function AppointmentCard({
  animalName,
  ownerName,
  doctorName,
  date,
  hour,
  appointment,
  status,
}: AppointmentCardProps) {
  return (
    <div
      className={`h-[135px] w-[495px] gap-4 rounded-[16px] flex justify-between items-center px-6 ${getBackgroundColor(
        appointment,
        status
      )}`}
    >
      <div className=" bg-zinc-100 w-[51px] h-[90px] rounded-[4px] flex flex-col items-center px-2.5 gap-1 py-3 shrink-0">
        <AlarmClock></AlarmClock>

        <div className="font-semibold text-sm">
          <p>{date}</p>

          <p>{hour}</p>
        </div>
      </div>

      <div className="flex flex-row gap-6">
        <p>
          <span className="font-bold">{animalName}</span>/
          <span className="">{ownerName}</span>
        </p>

        <p>{doctorName}</p>
      </div>

      <div className="h-[103px] flex flex-col items-center gap-2">
        <Image src={CatImage} alt="CatImage" width={70} height={70} />

        <p
          className={`${
            appointment === "Primeira Consulta" ? "text-xs" : "text-sm"
          } bg-zinc-100 rounded-sm py-1 px-2 whitespace-nowrap w-[110px] text-center`}
        >
          {appointment}
        </p>
      </div>
    </div>
  );
}
