import Part from "./components/Part";
import Heading from "@/components/style/heading";
import { Separator } from "@/components/ui/separator";

const Parts = () => {
    const part = [
        {
            imageUrl: "/parts/blower.webp",
            name: "Blower",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/bufferspring.jfif",
            name: "Buffer Spring",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/cwdbg.avif",
            name: "DBG",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/dbg.webp",
            name: "DBG",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/dbg1.webp",
            name: "DBG",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/door-header.webp",
            name: "Door Header",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/doorheader.webp",
            name: "Door Header",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/doorkey.jpg",
            name: "Door Key",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/elevator -door-sensor.webp",
            name: "Elevator Sensor",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/elevator-belt.jfif",
            name: "Elevator Belt",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/elevator-blower.jfif",
            name: "Elevator Blower",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/elevator-door-drive-motor-1.webp",
            name: "Door Drive Motor",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/elevator-door-drive-motor.jfif",
            name: "Elevator Door Drive Motor",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/elevator-motor-belt-type.webp",
            name: "Elevator Motor Belt Type",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/elevator-motor-belt2.jfif",
            name: "Elevator Motor belt type 2",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/elevators-1590608_1920.jpg",
            name: "Elevator",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/guideshoe.webp",
            name: "Guide Shoe",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/infectionbox.jfif",
            name: "Infection Box",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/leveling switch.webp",
            name: "Leveling Box",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/limitswitch.jpg",
            name: "Limit Switch",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/limitswitch2.webp",
            name: "Limit Switch 2",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/motor.jfif",
            name: "Motor",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/nbsldoorheader.webp",
            name: "NBSL Door header",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/nice100.png",
            name: "Nice",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/nice100.png",
            name: "Nice 100",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/nice1000.webp",
            name: "Nice 1000",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/osgpulley.jfif",
            name: "OSG Pulley",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/osgpulley1.jfif",
            name: "OSG Pulley",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/osgsafety.jpg",
            name: "OSG Safety",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/overload.webp",
            name: "Overload",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/overloadsensor.webp",
            name: "Overload Sensor",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/readswitch.webp",
            name: "Read Switch",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/rope.jpg",
            name: "Rope",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/step-inverter.webp",
            name: "Step Inverter",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/step.webp",
            name: "Step",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/step380.webp",
            name: "Step 380",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
            `,
            href: "/sdf"
        },
        {
            imageUrl: "/parts/thimble.jpg",
            name: "Thimble",
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
            space-y-5">
            <div
                className="
                px-1 
                sm:px-2 
                md:px-4 
                lg:px-10">
                <Heading
                    title="Parts"
                    subtitle="Following are the parts we supply at Sujata Technical Services Pvt. Ltd."
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
                    {part.map((part, index) => (
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

export default Parts;