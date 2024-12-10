import Container from "@/components/container";
import Heading from "@/components/style/heading";
import { Separator } from "@/components/ui/separator";
import Create from "./components/create";
import { db } from "@/lib/db";
import Client from "./components/client";

export const revalidate = 0;

const CollaborationAdminPage = async () => {
    const data = await db.collaboration.findMany({
        where: {

        },
        orderBy: {
            createdAt: "desc",
        }
    });


    return ( 
        <div
        className="
        flex
        flex-col
        "
        >
        <Container>
                <Create/>
                <Separator className="mt-2 mb-5"/>
                <div>
                    <Heading title="Collaborations" subtitle="Following are your collaborations with other companies."/>
                    <Client data={data}/>                
                </div>
        </Container>
        </div>
     );
}
 
export default CollaborationAdminPage;