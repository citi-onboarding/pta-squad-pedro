import Image from "next/image"
import Seta from "@/assets/seta.svg"

export default function CardConsulta(){
    return(
        <div className="flex items-center w-[510px] h-[82px] rounded-[16px] pl-4 pr-[33.5px]
         bg-[#F0F0F0] text-[14px] overflow-hidden">
            <div className="flex flex-col justify-center items-center w-[51px]
             h-[50px] rounded-[4px] p-[6px] bg-[#FFFFFFCC] font-[700]">
                <p>18/02</p>
                <p>13:00</p>
            </div>

            <div className="ml-[61.67px] w-[120px] flex-none font-[700] 
            whitespace-nowrap">Primeira Consulta</div>
            <div className="ml-[61.67px] w-[80px] flex-none text-[14px] 
            whitespace-nowrap">Dr. José Carlos</div>

            <div className="ml-[61.67px] flex-shrink-0">
                <Image src={Seta} alt="Seta" width={24} height={24}/>
            </div>
        </div>
    )
}