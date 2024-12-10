import { db } from "@/lib/db";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card";

const IndividualcollaborationPage = async (
    { params }: { params: { collaborationId: string } }
) => {

    const collaboration = await db.collaboration.findFirst({
        where: {
            id: params.collaborationId
        }
    });

    return (
        <div
            className="
        flex
        flex-col
        items-center
        min-h-[80vh]
        "
        >
            <Card className="rounded-2xl shadow-lg w-full lg:max-w-[1200px]">
                <CardHeader>
                    <CardTitle>{collaboration?.title}</CardTitle>
                    <CardDescription>{collaboration?.front}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div
                        dangerouslySetInnerHTML={{ __html: collaboration?.backparagraph || " " }}
                        className="
                    flex
                    flex-col
                    ">
                    </div>
                </CardContent>
                <CardFooter>
                    <p className="text-muted-foreground text-xs">We are forever grateful to you for your kind collaboration with us.</p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default IndividualcollaborationPage;