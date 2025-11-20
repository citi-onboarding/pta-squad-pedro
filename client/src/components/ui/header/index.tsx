import { LogoCITiPet } from "@/assets";
import { CiTiMessage } from "@/assets";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-16 relative flex items-center justify-center bg-white shadow-sm px-8">
      <div className="absolute left-8">
        <Image
          src={LogoCITiPet}
          alt="LogoCitiPet"
          width={189}
          height={74}
          className="h-10 w-auto object-contain"
        ></Image>
      </div>
      <div className="flex gap-6 items-center">
        <button>Atendimento</button>
        <button>Cadastro</button>
      </div>
      <div className="absolute right-8">
        <Image
          src={CiTiMessage}
          alt="CITiMessage"
          width={220}
          height={24}
          className="h-6 w-auto object-contain"
        ></Image>
      </div>
    </header>
  );
}
