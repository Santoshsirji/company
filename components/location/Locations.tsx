"use client";

import Location from "./Location";
import Marquee from "react-fast-marquee";


const Locations = () => {
    const locations = [
        {
            imageUrl: "/location/kathmandu.jpg",
            name: "Kathmandu"
        },
        {
            imageUrl: "/location/dhangadi.jpg",
            name: "Dhangadi",
        },
        {
            imageUrl: "/location/bhaktapur.jpg",
            name: "Bhaktapur",
        },
        {
            imageUrl: "/location/lalitpur.jpg",
            name: "Lalitpur",
        },
        {
            imageUrl: "/location/pokhara.jpg",
            name: "Pokhara",
        },
        {
            imageUrl: "/location/hetauda.jpg",
            name: "Hetuda",
        },
        {
            imageUrl: "/location/Itahari.jpg",
            name: "Itahari",
        },
        {
            imageUrl: "/location/biratnagar.png",
            name: "Biratnagar",
        }
    ]
    return (
        <div className="
        flex
        items-center
        justify-center
        w-full
        space-y-10
        px-2
        sm:px-4
        ">
            <Marquee
            pauseOnHover
            speed={40}
            autoFill
            >
            <div
                className="
            w-full
            flex
            justify-between
            gap-20
            "
            >
                {locations.map((location, index) => (
                    <Location 
                    key={index} 
                    name={location.name}
                    imageUrl={location.imageUrl}
                    />
                ))}
            </div>
            <div
            className="
            p-10
            "
            >

            </div>
            </Marquee >
        </div>
    );
}

export default Locations;