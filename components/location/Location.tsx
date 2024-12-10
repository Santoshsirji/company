"use client";

import Image from "next/image";

interface LocationProps {
    imageUrl: string;
    name?: string;
}

const Location = ({
    imageUrl,
    name,
}: LocationProps) => {
    return (
        <div
            className="
        w-[310px]
        lg:w-[150px]
        aspect-square
        "
        >
            <div
                className="
            w-full
            h-full
            border
            border-zinc-200
            rounded-3xl
            overflow-hidden
            shadow-md
            hover:cursor-pointer
            hover:brightness-95
            transition
            duration-300
            brightness-[1.05]
            saturate-150
            bg-whites
            relative
            "
            >
                <Image
                    src={imageUrl}
                    alt={name || "Location"}
                    layout="fill"
                    objectFit="cover"
                />
                <div
                    className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-full
                    opacity-0 
                    hover:opacity-100 
                    flex 
                    cursor-pointer 
                    duration-300 
                    flex-col 
                    gap-4 
                    items-center 
                    justify-center 
                    bg-zinc-800/40 
                    transition-opacity
                    "
                >
                    <h2
                        className="
                        text-xl 
                        font-semibold 
                        text-white
                        ">
                        {name}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Location;
