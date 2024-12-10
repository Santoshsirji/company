"use client";
import Link from "next/link";

export default function NotFound() {

    return (
        <div
            className="
        w-full
        h-[90vh]
        flex
        flex-col
        items-center
        justify-center
        space-y-5
        "
        >
            <div className="text-center">
                <h2 className="text-base font-semibold">Not Found</h2>
                <p className="text-sm">Could not find requested url</p>
            </div>
            <Link href={"/"} className="p-2 text-sm border-2 rounded-lg border-black cursor-pointer  hover:opacity-80 hover:saturate-150">Return Home</Link>
        </div>
    )
}