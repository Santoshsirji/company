"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Vacancy } from "@prisma/client";
import { CellAction } from "./actions";
import { Separator } from "@/components/ui/separator";

interface IndividualCardProps {
    data?: Vacancy;
}
const IndividualCard = ({
    data
}: IndividualCardProps) => {
    return ( 
        <div>
            <Card className="relative flex">
                <div className="grow">

                <CardHeader>
                    <CardTitle className="text-lg">{data?.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                    {data?.front}
                </CardContent>
                </div>
                <CellAction id={data?.id}/>
            </Card>
        </div>
     );
}
 
export default IndividualCard;