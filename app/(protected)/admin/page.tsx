import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { 
    Card, 
    CardContent,
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

const AdminPage = async () => {
    const user = await getCurrentUser();
    const blog = await db.blog.findFirst({
        where: {

        }
    });


    return ( 
        <div
        className="
        flex
        flex-col
        px-3
        sm:px-4
        md:px-10
        lg:px-16
        xl:px-20
        2xl:px-28
        "
        >
            <div className="flex
            flex-row
            space-x-1
            ">
            <span>Welcome,</span>
                <Heading title={user?.name} />
            <span>!</span>
            </div>
            <div
            className="
            text-xs
            text-muted-foreground
            "
            >
                You are currently at the admin page of Sujata Technical Services PVT.LTD
            </div>
            <Separator className="mb-5 mt-2"/>
            <div
            className="
            flex
            flex-wrap
            gap-8
            "
            >
                <Card
                className="
                w-full
                md:w-[400px]
                lg:w-[420px]
                xl:w-[440px]
                cursor-pointer
                hover:shadow-md
                hover:bg-zinc-50
                transition
                duration-300
                "
                >
                    <CardHeader>
                        <CardTitle className="text-base ">Latest Blog</CardTitle>
                    </CardHeader>
                    <CardContent className="border py-1">
                      
                            <h2 className="text-base font-semibold text-muted-foreground">
                                {blog?.title}
                            </h2>
                            <p className="text-xs text-justify text-zinc-600">{blog?.front}</p>
                       
                    </CardContent>
                </Card>
            </div>
        </div>
     );
}
 
export default AdminPage;