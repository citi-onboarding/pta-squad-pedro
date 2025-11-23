import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Add } from "@/assets/icons";
import { Check } from "@/assets/icons"
import Image from "next/image"

export default function TestPage() {
    return(
        <div className=" h-screen flex flex-row justify-center items-center gap-12">
            <Button> <Image src={Add} alt="Adicionar" width={20} height={20} />Nova Consulta</Button>
            <Button variant={"secondary"}>Buscar</Button>
        </div>
    )
}