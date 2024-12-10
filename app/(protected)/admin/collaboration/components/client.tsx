"use client";

import { Collaboration } from "@prisma/client";
import IndividualCard from "./individual-card";

interface ClientProps {
    data?: Collaboration[];
}
const Client = ({
    data
}: ClientProps) => {
    return ( 
        <div
        className="
        w-full
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-4
        "
        >
            {data?.map((data, index) => (
            <IndividualCard data={data} key={index}/>
            ))}
        </div>
     );
}
 
export default Client ;