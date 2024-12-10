"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Items = () => {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const links = [
        {
        name: "Home",
        href: "/"
    },
        {
        name: "Products",
        href: "/products",
    },
        {
        name: "Parts",
        href: "/parts",
    },
    {
        name: "Maintainance",
        href: "/maintainance",
    },
    {
        name: "Blogs",
        href: "/blogs",
    },
    {
        name: "Career",
        href: "/vacancy",
    },
    {
        name: "FAQs",
        href: "/faq",
    },
    {
        name: "About",
        href: "/about",
    },
        {
        name: "Contact",
        href: "/contact",
    },
        {
        name: "Location",
        href: "/location",
    },
]
    return (
        <>
            <div
                className="
            flex
            items-center
            z-40
            lg:hidden
            "
            >
                <IoMdMenu onClick={() => setIsOpen(true)} size={24} className="cursor-pointer" />
            </div>
            <div
                className={`
            ${isOpen ? "flex flex-col translate-x-0" : " translate-x-full"}
            lg:hidden
            fixed
            duration-200
            transition
            w-full
            h-full
            bg-white
            inset-0
            p-4
            z-40
            `}
            >
                <div
                    className="
                w-full
                p-2
                flex
                items-center
                space-x-5
                "
                >

                    <IoMdClose size={25} onClick={() => setIsOpen(false)} className="hover:opacity-80 cursor-pointer" />
                    <span className="text-lg font-semibold">Browse Page</span>
                </div>
                <hr />
                <div
                    onClick={() => setIsOpen(false)}
                    className="
                w-full
                px-10
                flex
                flex-col
                "
                >
                    {links.map((link) => (
                        <Link 
                            key={link.href} 
                            id={link.href} 
                            href={link.href}  
                            className="
                            cursor-pointer 
                            w-full px-1 
                            py-4 
                            border-y 
                            ">
                                {link.name}
                        </Link>
                    ))}
                </div>
            </div>
            <div
                className="
            hidden
            lg:flex
            flex-row
            items-center
            gap-x-1
            z-40
            "
            >
                {/* <Link
                    href={'/'}
                    className={`
                            cursor-pointer 
                            hover:opacity-80 w-max 
                            ${pathname === "/" ? "border-b-2 border-rose-600 px-1 text-rose-600" : ""}
                            hover:text-rose-600 hover:border-rose-600 hover:border-b-2 
                            
                            `}
                >
                    Home
               </Link> */}
                {/* <Link
                    href={'/collaboration'}
                    className={`
                            cursor-pointer 
                            hover:opacity-80 w-max 
                            ${pathname === "/collaboration" ? "border-b-2 border-rose-600 px-1 text-rose-600" : ""}
                            hover:text-rose-600 hover:border-rose-600 hover:border-b-2 
                            
                            `}
                >
                    Home
               </Link> */}
                {links.map((link) => (

                    <Link 
                        key={link.href} 
                        href={link.href} 
                        id={link.href} 
                        className={`
                            cursor-pointer 
                            hover:opacity-80 w-max 
                            saturate-150
                            p-1
                            text-
                            ${pathname === link.href  ? "border-b-2 border-rose-600 px-1 text-rose-600" : "text-black"}
                            hover:text-rose-600 hover:border-rose-600 hover:border-b-2 
                            
                            `}
                            >
                        {link.name}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Items;