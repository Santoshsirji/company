import Product from "@/components/products/Product";
import Heading from "@/components/style/heading";
import { Separator } from "@/components/ui/separator";

const Products = () => {
    const products = [
        {
            imageUrl: "/products/individual/cop.webp",
            name: "COP",
            paragraph: `COP (Car Operating Panel): A panel inside the elevator car that contains buttons and controls for passengers to select floors, open/close doors, and other functions.
`,
            href: "/sdf"
        },
        {
            imageUrl: "/products/individual/lop.jpeg",
            name: "LOP",
            paragraph: `
            LOP (Landing Operating Panel): A panel located on each floor outside the elevator, allowing users to call the elevator to their floor and indicate the desired direction of travel (up or down).`,
            href: "/sdf"
        },
        {
            imageUrl: "/products/escalator.jpg",
            name: "Escalators",
            paragraph: "An escalator is a moving staircase used for transporting people between different floors of a building. It consists of a continuous loop of steps driven by an electric motor, allowing for a smooth and efficient flow of people. Escalators are commonly found in shopping malls, airports, transit stations, and other high-traffic areas.",
            href: "/products/escalator"
        },
        {
            imageUrl: "/products/individual/passenger.webp",
            name: "Passenger Elevator",
            paragraph: "Passenger elevator, to human nature as the height, to science and technology as a weapon, to design for the pioneer, in technology and the adoption of a new generation of permanent magnet synchronous gearless traction machine and computer control technology, the convergence of data network system and modular structure.and use the most effective self-test procedure, so that the elevator system more flexible control accurate, efficient and reasonable",
            href: "/products/escalator"
        },
        {
            imageUrl: "/products/individual/machine-roomless-elevator.jpg",
            name: "Machine Roomless Elevators",
            paragraph: "STS Elevator is counted amongst the most recognized names engaged in designing and developing Machine Roomless Elevator. Thought traction lifts were originally limited to high-rises, the innovative MRL design has allowed engineers to adapt elevators for low-rise buildings and homes. These elevators save 25 percent electricity and 10 percent of construction area. Features: Longer functional life, Required low maintenance",
            href: "/products/escalator"
        },
        {
            imageUrl: "/products/individual/Panoramic-Observation-Lift.jpg",
            name: "Panoramic (Capsule) Elevator",
            paragraph: "The elegant appearance graced your building multi-angle enjoy outside landscape widen the passenger's field of vision. Lighting outside car unitary in surrounding environment, making the panoramic elevator as a bright view line. STS elevator gives the building character and vitality. No matter whether outdoors or indoors panoramic elevator can become a focus of attention, and the passengers can easily enjoy the architectural styles and the surrounding landscape.",
            href: "/products/escalator"
        },
        {
            imageUrl: "/products/individual/home-elevator.jpg",
            name: "Residential (Home) Elevator",
            paragraph: "Home Elevators reduce wasteful electrical usage. In addition to a high-efficiency motor, they are equipped with an automatic illumination shutoff function and an energy saving operation mode as a standard feature that dramatically reduces standby power consumption.",
            href: "/products/escalator"
        },
        {
            imageUrl: "/products/individual/hospital-elevator.webp",
            name: "Hospital Elevator",
            paragraph: "Hospital elevator is not only used to convey the passengers has special and strict requirements of function and performance because of its special use purpose. Hospital elevator can accurately control the lift running speed with smooth and comfortable operation. Hospital elevator lays stress on the humane design. It fully optimizes the car structure and satisfies the customer using demands to the maximum it provides the passengers with a quite and elegant space.",
            href: "/products/escalator"
        },
        {
            imageUrl: "/products/individual/industrial-lift.png",
            name: "Industrial Lift",
            paragraph: "An industrial lift, also commonly known as a freight elevator or goods lift, is a robust vertical transportation system designed primarily for the movement of heavy loads, equipment, and materials within industrial or commercial settings. In summary, industrial lifts play a crucial role in enhancing operational efficiency and facilitating the movement of heavy loads within industrial and commercial environments, offering a safe, reliable, and adaptable vertical transportation solution.",
            href: "/products/escalator"
        },
        {
            imageUrl: "/products/individual/dumb-waiter-lift.jpg",
            name: "Dumb Waiter Lift",
            paragraph: "A dumbwaiter lift, also known simply as a dumbwaiter, is a small freight elevator designed for the transportation of goods rather than people. Dumbwaiter lifts serve as practical and efficient solutions for transporting small goods between different levels of a building, offering convenience, space optimization, and safety in various residential and commercial applications.",
            href: "/products/escalator"
        },
        {
            imageUrl: "/products/individual/car-lift.jpg",
            name: "Car Lift",
            paragraph: "A car lift, also known as an automotive lift or car elevator, is a specialized lifting system designed primarily for the vertical transportation of vehicles within buildings, parking garages, or automotive service facilities. Car lifts offer a practical and efficient solution for vertical transportation and parking of vehicles in various residential, commercial, and automotive service applications, providing space optimization, convenience, safety, and productivity benefits.",
            href: "/products/escalator"
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
                    title="Products"
                    subtitle="Following are the products we offer at Sujata Technical Services Pvt. Ltd"
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
                    {products.map((product, index) => (
                        <Product
                            key={index}
                            imageUrl={product.imageUrl}
                            name={product.name}
                            paragraph={product.paragraph}
                            href={product.href}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;