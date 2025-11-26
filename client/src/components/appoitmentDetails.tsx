import Image from "next/image"
import  LogoCITiPet  from "@/assets/LogoCITiPet.svg"
import { Button } from "@/components/ui/button"

export default function AppoitmentDetails() {
    return(
        <div>
            <div>
                <Image src={LogoCITiPet} alt="Logo" width={189} height={74} className="mt-5 pl-12"/>
            </div>
            <div></div>

        </div>
    )


}