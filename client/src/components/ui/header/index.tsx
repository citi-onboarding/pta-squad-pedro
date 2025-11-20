import { LogoCITiPet } from "@/assets";
import { CiTiMessage } from "@/assets";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4">
      <Image
        src={LogoCITiPet}
        alt="LogoCitiPet"
        width={189}
        height={74}
        className="h-10 md:h-12 w-auto object-contain"
      ></Image>
      <div>
        <button>Atendimento</button>
        <button>Cadastro</button>
      </div>
      <Image src={CiTiMessage} alt="CITiMessage" width={220} height={24}></Image>
    </div>
  );
}
