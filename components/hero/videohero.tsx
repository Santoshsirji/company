"use client";

import Link from "next/link";
import Button from "../Button";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

const Video = () => {
    const [catelogue, setCatelogue] = useState(false);
    return (
        <div className="w-full h-screen bg-zinc-300 overflow-hidden relative">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute z-0 w-full h-full object-cover brightness-[0.4] saturate-150 contrast-more:visible"
            >
                <source src={'/video.mp4'} type="video/mp4" className="brightness-[0.75]" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 md:p-6 flex items-center justify-center h-full">
                <div className="text-center space-y-5">
                    <div>
                        <h1 className="text-white text-lg md:text-2xl lg:text-4xl font-semibold lg:font-bold">
                            Sujata Technical Services Pvt.Ltd.
                        </h1>
                        <p className="text-white text-sm md:text-lg mt-4 text-center">
                            &quot; The only complete technical solution &quot;
                        </p>
                    </div>
                    <div className="flex flex-col items-start space-x-2 space-y-3 sm:space-y-0 sm:items-center saturate-150 sm:flex-row w-max">
                        <Button onClick={() => setCatelogue(true)} className="bg-blue-950 hover:bg-blue-800 font-semibold">
                            View Catalogue
                        </Button>
                        <div className={`${catelogue ? "" : "hidden"} fixed inset-0 flex items-center justify-center z-50`}>
                            <div className="w-full max-w-sm bg-white rounded-md border-zinc-21200 border-3 border-zinc-200 shadow-3xl p-3">
                                <div className="flex flex-col">
                                    <div className="font-semibold text-lg flex flex-row items-center justify-between">
                                        <div>Select</div>
                                        <div>
                                            <IoMdClose onClick={() => setCatelogue(false)} className="cursor-pointer hover:opacity-80 h-6 w-6" />
                                        </div>
                                    </div>
                                    <div className="flex md:flex-row flex-col gap-2">
                                        <Link href={'/assets/sts.pdf'} target="_blank">
                                            <Button className="hover:bg-red-600 text-white bg-red-700">
                                                STS Elevator
                                            </Button>
                                        </Link>
                                        <Link href={'/assets/orbis.pdf'} target="_blank">
                                            <Button className="hover:bg-red-600 text-white bg-red-700">
                                                Orbis Elevator
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href={'/blogs'}>
                            <Button className="hover:bg-red-900 bg-red-950 text-white">
                                Explore Blogs
                            </Button>
                        </Link>
                        <Link href={'/assets/big.pdf'} target="_blank">
                            <Button className="hover:bg-rose-800 text-white bg-rose-950">
                                View Company Profile
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
