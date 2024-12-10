import { db } from "@/lib/db";
import  MyForm  from "./form";

const VacancyPage = async ({
    params
}: { params: { vacancyId: string}
}) => {
    let vacancy = null;

    if(params.vacancyId.length >= 10 ) {
        vacancy = await db.vacancy.findUnique({
           where: {
               id: params.vacancyId
           },
           
       });
    }


    return (
        <div
        className="flex-col"
        >
            <div className="flex-1 space-y-4 p-8 pt-6">
                <MyForm initialData={vacancy}/>
            </div>
        </div>
    )
} 

export default VacancyPage;