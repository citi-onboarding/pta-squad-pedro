import Header from "@/components/ui/header";
import IntegrationContent from "../../app/appoitmentDetails/page"; 

export default function AppoitmentDetails({ params }: { params: { id: string } }) {
    if (!params?.id) return null;

    return (
        <div className="w-full min-h-screen">
            <div>
                <Header/>
            </div>
            <main>
                <IntegrationContent params={params}/>
            </main>
        </div>
    )
}