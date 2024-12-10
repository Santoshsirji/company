import { db } from "@/lib/db";
import  MyForm  from "./form";

const NoticePage = async ({
    params
}: { params: { noticeId: string}
}) => {
    let notice = null;

    if(params.noticeId.length >= 10 ) {
        notice = await db.notice.findUnique({
           where: {
               id: params.noticeId
           },
           
       });
    }


    return (
        <div
        className="flex-col"
        >
            <div className="flex-1 space-y-4 p-8 pt-6">
                <MyForm initialData={notice}/>
            </div>
        </div>
    )
} 

export default NoticePage;