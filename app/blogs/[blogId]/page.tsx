import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card";
import { db } from "@/lib/db";
import Image from "next/image";
const IndividualBlogPage = async (
    {params}: {params: {blogId: string}}
) => {

    const blog = await db.blog.findFirst({
        where: {
            id: params.blogId
        }
    });

    return ( 
        <div
        className="
        flex
        flex-col
        items-center
        justify-center
        "
        >
            <Card className="rounded-2xl shadow-lg w-full lg:max-w-[1200px]">
                <CardHeader>
                    <CardTitle>{blog?.title}</CardTitle>
                    <CardDescription>{blog?.front}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div 
                    dangerouslySetInnerHTML={{ __html: blog?.backparagraph || " "}}
                    className="
                    flex
                    flex-col
                    ">
                    </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </div>
     );
}
 
export default IndividualBlogPage;