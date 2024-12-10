"use client";

import Container from "@/components/container";
import Logo from "@/components/Logo";
import Items from "@/components/navbar/Items";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div
            className={`
            bg-white
            text-[#131313]
            fixed
            inset-0
            z-30
            h-16
            py-1
            pt-3
            items-center
            w-full
            `}
        >
            <div
                className="
            w-full
            px-4
            "
            >
                <Container>
                    <div
                        className="
                    flex
                    justify-between
                    items-center
                    "
                    >
                        <Logo />
                        <Items />
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;