import Image from "next/image";


import { db } from "@/lib/db";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card";

const IndividualvacancyPage = async (
    { params }: { params: { vacancyId: string } }
) => {

    const vacancy = await db.vacancy.findFirst({
        where: {
            id: params.vacancyId
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
            <Card className="rounded-2xl shadow-lg max-w-[1200px]">
                <CardHeader>
                    <CardTitle>{vacancy?.title}</CardTitle>
                    <CardDescription>{vacancy?.front}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div
                        dangerouslySetInnerHTML={{ __html: vacancy?.backparagraph || " " }}
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

export default IndividualvacancyPage;