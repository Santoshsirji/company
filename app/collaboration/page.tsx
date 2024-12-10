import { db } from "@/lib/db";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Separator
} from "@/components/ui/separator";
import Blog from "./components/Blog";

const ContactUsPage = async () => {
    const collaborations = await db.collaboration.findMany({
        where: {

        }
    });


    return (
        <div className="w-full lg:container">
            <Card className="bg-neutral-50 w-full space-y-10">
                <CardHeader>
                    <CardTitle>Our Collaboration</CardTitle>
                    <CardDescription>Lately, we&apos;ve done collaboration with:</CardDescription>
                </CardHeader>
                <Separator />
                <CardContent>
                    {collaborations.map((blog, index) => (
                        <Blog
                            key={index}
                            id={blog.id}
                            title={blog.title}
                            paragraph={blog.front}
                        />
                    ))}
                </CardContent>
                <Separator />
                <CardFooter>

                </CardFooter>
            </Card>
        </div>
    );
}

export default ContactUsPage;