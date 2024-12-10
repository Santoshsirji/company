"use client";

import Part from "./components/Part";
import Heading from "@/components/style/heading";
import { Separator } from "@/components/ui/separator";

const MaintainancePage = () => {
    const maintainance = [
        {
            imageUrl: "/parts/elevatormaintainance.jfif",
            name: "Elevator Maintainance",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/maintainance.jfif",
            name: "Elevator Maintainance",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/maintainance2.jpg",
            name: "Elevator Maintainance",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
    ]
    return ( 
        <div
        className="
        flex
        flex-col
        space-y-5
        "
        >
            <div
                className="
                px-1 
                sm:px-2 
                md:px-4 
                lg:px-10">
                <Heading
                    title="Mantainance"
                    subtitle="We also provide the service of maintainance."
                />
            </div>
            <Separator />
            <div className="
                flex
                flex-col
                items-center
                justify-center
                w-full
                space-y-10
                px-2
                sm:px-4
                md:container
                ">
                <div
                    className="
                    w-full
                    flex
                    flex-wrap
                    gap-10
                    "
                >
                    {maintainance.map((part, index) => (
                        <Part
                            key={index}
                            imageUrl={part.imageUrl}
                            name={part.name}
                            paragraph={part.paragraph}
                            href={part.href}
                        />
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default MaintainancePage;