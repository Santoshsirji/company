"use client";

import Button from "@/components/Button"
import Product from "./Product";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Products = () => {
    const products = [
        {
            imageUrl: "/products/lift.jpg",
            name: "Elevators",
            paragraph: "An elevator is a vertical transport system used to move people or goods between different floors of a building. It consists of a platform or a cabin enclosed in a shaft, driven by electric motors or hydraulic systems, with safety mechanisms to ensure smooth and secure travel. Elevators are essential for efficient building accessibility, especially in high-rise structures.",
            href: "/products/elevator"
        },
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
    ]

    const router = useRouter();
    const handleClick = () => {
        router.push('/products');
    }
    return (
        <div className="
        flex
        flex-col
        items-center
        justify-center
        w-full
        space-y-14
        px-2
        sm:px-4
        ">
            <div
                className="
            w-full
            flex
            flex-wrap
            gap-y-8
            justify-center
            md:justify-between
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
            <div
                className="
            flex
            flex-col
            items-center
            justify-center
            "
            >
                <Button
                onClick={handleClick}
                >
                    <Link
                    href={'/products'}
                    >
                    See All Products
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default Products;