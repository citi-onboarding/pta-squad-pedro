import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";

export default function TestPage() {
    return(
        <div className=" h-screen flex flex-row justify-center items-center gap-12">
            <Button className="">Novo Cadastro</Button>
            <Button variant={"secondary"}>Buscar</Button>
        </div>
    )
}