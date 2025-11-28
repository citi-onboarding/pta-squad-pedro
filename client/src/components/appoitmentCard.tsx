import Image from "next/image"
import Seta from "@/assets/seta.svg"

export default function CardConsulta(){
    return(
        <div className="flex items-center w-full h-20 lg:w-[510px] lg:h-[82px] rounded-[16px] 
            pl-3 pr-3 lg:pl-4 lg:pr-[33.5px] bg-[#F0F0F0] text-[14px] 
            gap-x-4 lg:gap-x-[61.67px] overflow-hidden"> 

            <div className="flex flex-col justify-center items-center w-[45px] h-[45px] lg:w-[51px] lg:h-[50px] 
                rounded-[4px] p-1 lg:p-[6px] bg-[#FFFFFFCC] font-[700] 
                my-0 lg:mt-[16px] lg:mb-[16px] text-xs lg:text-[14px] flex-shrink-0">
                <p>18/02</p>
                <p>13:00</p>
            </div>
            <div className="font-[700] flex-1 whitespace-nowrap text-sm lg:text-[14px] flex items-center">
                Primeira Consulta
            </div>

            <div className="font-[400] text-xs lg:text-[14px] flex-none whitespace-nowrap 
                h-auto lg:h-[15px] my-auto flex items-center">
                Dr. José Carlos
            </div>

            <div className="flex-shrink-0 h-[24px] flex items-center">
                <Image src={Seta} alt="Seta" width={24} height={24}/>
            </div>
        </div>
    )
}