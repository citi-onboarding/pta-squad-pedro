import Image from "next/image"
import Seta from "@/assets/seta.svg"

export default function CardConsulta(){
    return(
        <div className="flex items-center w-[510px] h-[82px] rounded-[16px] pl-4 
        pr-[33.5px] bg-[#F0F0F0] text-[14px] gap-x-[61.67px] overflow-hidden">
            <div className="flex flex-col justify-center items-center w-[51px] h-[50px] rounded-[4px] 
            p-[6px] bg-[#FFFFFFCC] font-[700] mt-[16px] mb-[16px]">
                <p>18/02</p>
                <p>13:00</p>
            </div>

            <div className="font-[700] flex-none whitespace-nowrap h-[15px] mt-[33.5px] mb-[33.5px] 
            flex items-center">
                Primeira Consulta
            </div>

            <div className="font-[400]text-[14px] flex-none whitespace-nowrap h-[15px] mt-[33.5px] mb-[33.5px] 
            flex items-center">
                Dr. José Carlos
            </div>

            <div className="flex-shrink-0 h-[24px] mt-[29px] mb-[29px] flex items-center">
                <Image src={Seta} alt="Seta" width={24} height={24}/>
            </div>
        </div>
    )
}