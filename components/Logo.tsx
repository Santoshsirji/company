"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
    const pathname = usePathname();



    return (
        <>
                    <Link href={"/"} className="items-center saturate-150 brightness-[1.1] flex space-x-1">
                        <Image
                            alt="Logo"
                            className=" cursor-pointer w-12 h-12 rounded-full"
                            height={150}
                            width={70}
                            src={"/logo.png"}
                        />
                        <h1 
                        className="
                        text-rose-600 
                        md:font-extrabold 
                        sm:font-bold
                        font-semibold
                        text-xl
                        md:text-xl
                        lg:text-2xl
                        tracking-tighter 
                        ">
                            Sujata Technical Services Pvt .Ltd
                    
                        </h1>
                    </Link>
                </>
    )
}

export default Logo;