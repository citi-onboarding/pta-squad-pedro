import Header from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { CircleCheckBig } from "lucide-react";


export default function TestPage() {
  return (
    <div className=" h-screen flex flex-row justify-center items-center gap-12">
      <Button className="flex items-center gap-2">
        <CirclePlus className="text-zinc-100"></CirclePlus>
        Nova Consulta
      </Button>
      <Button className="flex items-center gap-2">
        <CircleCheckBig></CircleCheckBig>
        Agendamento
      </Button>
      <Button>Enviar</Button>
      <Button>Finalizar Cadastro</Button>
      <Button variant={"secondary"}>Buscar</Button>
    </div>
  );
}