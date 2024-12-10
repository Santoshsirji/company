import Container from "@/components/container";
import Heading from "@/components/style/heading";
import { Separator } from "@/components/ui/separator";
import Create from "./components/create";
import { db } from "@/lib/db";
import Client from "./components/client";

export const revalidate = 0;

const AdminNoticePage = async () => {
    const data = await db.notice.findMany({
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
                    <Heading title="Published 
                    Notices" subtitle="Following are the published notices "/>
                    <Client data={data}/>                
                </div>
        </Container>
        </div>
     );
}
 
export default AdminNoticePage;