"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ProductProps {
    imageUrl: string;
    name?: string;
    paragraph?: string;
    href: string;
}

const Product = ({
    imageUrl,
    name,
    paragraph,
    href
}: ProductProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.div
            ref={ref}
            className="w-[90vw] sm:w-[350px] lg:w-[420px]"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.01 }}
        >
            <div
                className="
                    w-full
                    h-full
                    border
                    rounded-3xl
                    overflow-hidden
                    border-zinc-200
                    shadow-md
                    hover:cursor-pointer
                    hover:brightness-95
                    transition
                    duration-300
                    hover:bg-orange-300
                    bg-orange-400
                                    "
            >
                <div className="flex flex-col space-y-2">
                    <Image
                        src={imageUrl}
                        width={400}
                        height={400}
                        alt="Product Image"
                        className="w-full h-[250px] lg:h-[300px] saturate-150"
                    />
                    <div className="px-8 pt-8 pb-14 space-y-4">
                        <h2 className="font-semibold sm:text-4xl text-3xl bg-white">{name}</h2>
                        <p className="text-justify text-sm sm:text-base">{paragraph}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Product;
