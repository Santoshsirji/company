"use client";

import Container from "@/components/container";
import { cn } from "@/lib/utils";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { FaSignOutAlt } from "react-icons/fa";

interface NavigationProps {
    image?: string | null;
}

const Navigation = ({ image }: NavigationProps) => {
    const links = [
        { label: "Dashboard", href: "/admin" },
        { label: "Collaboration", href: "/admin/collaboration" },
        { label: "Blogs", href: "/admin/blogs" },
        { label: "Vacancy", href: "/admin/vacancy" },
        { label: "Users", href: "/admin/users" },
        { label: "Contacts", href: "/admin/contact" },
    ];

    const pathname = usePathname();
    const [click, setClicked] = useState(false);
    const [underlineStyle, setUnderlineStyle] = useState<React.CSSProperties>({});
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const activeIndex = links.findIndex((link) => link.href === pathname);
        if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
            const activeLink = linkRefs.current[activeIndex];
            setUnderlineStyle({
                width: activeLink.offsetWidth,
                transform: `translateX(${activeLink.offsetLeft}px)`,
            });
        }
    }, [pathname]);

    return (
        <div
            className="
        fixed 
        z-20 
        w-full
        bg-white
        border-b
        py-1
        px-1
        shadow-md
        "
        >
            <Container>
                <div
                    className="
                relative 
                flex 
                justify-between 
                overflow-x-scroll 
                md:overflow-x-hidden">
                    <div
                        className="
                    flex">
                        {links.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                ref={(el) => {
                                    linkRefs.current[index] = el;
                                }}
                                className={cn(
                                    `
                                    font-semibold 
                                    px-2 
                                    py-2 
                                    transition-colors 
                                    duration-300`,
                                    link.href === pathname ? "text-black" : "text-zinc-700"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <span
                            className="
                            absolute 
                            bottom-0 
                            h-1 
                            bg-amber-700 
                            transition-all 
                            duration-300"
                            style={underlineStyle}
                        ></span>
                    </div>
                    <div
                        onClick={() => setClicked(value => !value)}
                        className="
                    h-10 
                    w-10 
                    rounded-full 
                    overflow-hidden 
                    cursor-pointer 
                    no-select">
                        <Image
                            width={100}
                            height={100}
                            src={image || "/next.svg"}
                            alt="User Logo"
                            className="h-10 w-10"
                        />
                    </div>
                    <div
                        onClick={() => signOut()}
                        className={`
                    ${click ? "flex" : "hidden"}
                    fixed
                    right-14
                    shadow-lg
                    top-24
                    bg-white
                    px-2
                    py-1
                    rounded-md
                    border
                    hover:bg-slate-50
                    cursor-pointer
                    no-select
                    border-zinc-300
                    flex
                    flex-row
                    items-center
                    space-x-2
                    font-semibold
                    text-zinc-900

                    `}
                    >
                        <span>SignOut</span><FaSignOutAlt />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navigation;
