import { db } from "@/lib/db";
import  MyForm  from "./form";

const EventPage = async ({
    params
}: { params: { collaborationId: string}
}) => {
    let event = null;

    if(params.collaborationId.length >= 10 ) {
        event = await db.collaboration.findUnique({
           where: {
               id: params.collaborationId
           },
           
       });
    }


    return (
        <div
        className="flex-col"
        >
            <div className="flex-1 space-y-4 p-8 pt-6">
                <MyForm initialData={event}/>
            </div>
        </div>
    )
} 

export default EventPage;