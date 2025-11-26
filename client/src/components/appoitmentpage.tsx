import Image from "next/image"
import AppoitmentCard from "@/components/appoitmentCard"
import Gato from "@/assets/gato.svg"
import SetaSimples from "@/assets/simpleseta.svg"
import Check from "@/assets/task_alt.svg"
import { Button } from "@/components/ui/button"

export default function AppoitmentPage() {
    return (
        <div className="w-[1920px]">
            <div className="flex flex-row pt-[58.5px] pl-[64px]">
                <Image src={SetaSimples} alt="Voltar" width={32} height={32} />
                <div className="font-[700] text-[48px] ml-4">Detalhes da Consulta</div>
            </div>

            <div className="flex flex-row justify-between mt-8 px-[194px]">
                <div className="font-[700] text-[24px]">
                    Paciente
                </div>
                <div className="font-[700] text-[24px] ml-[874px] w-[558px] h-[26px]">
                    Histórico de Consultas
                </div>
            </div>
            <div className="flex flex-row justify-between px-[194px]">
                <div className="flex flex-row">
                    <Image src={Gato} alt="Gato" width={295} height={299} />
                    <div className="ml-[45px] mt-14">
                        <div className="font-[700] text-[24px] mt-[56px]">
                            Luna
                        </div>
                        <div className="font-[400] text-[24px] mt-3">
                            5 anos
                        </div>
                        <div className="font-[400] text-[16px] mt-[126px]">
                            Lucas Gomes
                        </div>
                        <div className="font-[400] text-[16px] mt-3">
                            Dr. José Carlos
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <div className="items-center w-[558px] h-[448px] rounded-[24px] border border-[#D9D9D9] px-6">
                        <div className="w-[510px] h-[82px] rounded-[16px] mt-6 mr-6 mb-6">
                            <AppoitmentCard />
                        </div>
                        <div className="w-[510px] h-[82px] rounded-[16px] mt-6 mr-6 mb-6">
                            <AppoitmentCard />
                        </div>
                        <div className="w-[510px] h-[82px] rounded-[16px] mt-6 mr-6 mb-6">
                            <AppoitmentCard />
                        </div>
                        <div className="w-[510px] h-[82px] rounded-[16px] mt-6 mr-6 mb-6">
                            <AppoitmentCard />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pl-[194px] mt-[60px]">
                <div className="font-[700] text-[16px]">
                    Descrição do problema:
                </div>
                <div className="font-[400] text-[16px] w-[631px] h-[72px] mt-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                    make a type specimen book. It has survived not only five centuries.
                </div>
            </div>
            <div className="flex flex-row pt-6 pl-[194px] items-center">

                <div className="font-[700] text-[16px] mt-6">
                    Tipo de consulta:
                </div>

                <div className="flex justify-center items-center w-[101px] h-[30px] rounded-[4px] bg-[#AAE1FF] ml-6 mt-6">
                    Vacinação
                </div>
            </div>

            <div className="w-[624px] h-[138px] rounded-[24px] mt-[40px] ml-[194px] border border-[#D9D9D9]">

                <div className="font-[700] text-[16px] pt-[24px] text-center">
                    Deseja realizar outra consulta?
                </div>

                <Button className="mt-6 w-[576px] rounded-[24px] h-12 ml-6 bg-[#50E678] flex items-center justify-center ">
                    <Image src={Check} alt="Check" width={24} height={24} />
                    <div className="text-white font-[500] text-[16px]">Agendamento</div>
                </Button>
            </div>

        </div>
    )
}
