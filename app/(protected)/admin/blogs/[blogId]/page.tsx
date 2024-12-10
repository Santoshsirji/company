import { db } from "@/lib/db";
import  MyForm  from "./form";

const BlogPage = async ({
    params
}: { params: { blogId: string}
}) => {
    let blog = null;

    if(params.blogId.length >= 10 ) {
        blog = await db.blog.findUnique({
           where: {
               id: params.blogId
           },
           
       });
    }


    return (
        <div
        className="flex-col"
        >
            <div className="flex-1 space-y-4 p-8 pt-6">
                <MyForm initialData={blog}/>
            </div>
        </div>
    )
} 

export default BlogPage;