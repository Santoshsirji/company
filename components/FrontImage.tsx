'use client';

import React from "react";
import Image from "next/image";


export default function FrontImage() {

    return (
        <div
        className="
        h-screen
        w-[100vw]
        flex

        "
        >
            <Image className="h-full w-1/2" src={'/elevatorhome.jpg'} width={2000} height={2000} alt="Image"/>
            <Image className="h-full w-1/2" src={'/escalatorhome.jpg'} width={2000} height={2000} alt="Image"/>
        </div>
    )
}