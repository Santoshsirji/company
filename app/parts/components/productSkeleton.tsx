"use client";

import Image from "next/image";

interface ProductSkeletonProps {
    imageUrl: string;
    name?: string;
    paragraph?: string;
    href: string;
}

const ProductSkeleton = ({
    imageUrl,
    name,
    paragraph,
    href
}: ProductSkeletonProps) => {
    return (
        <div
            className="
        w-[90vw]
        sm:max-w-[350px]
        lg:min-w-[380px]
        bg-white
        animate-pulse
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
            transition
            duration-300
            "
            >
                <div
                    className="
                flex
                flex-col
                space-y-2
                "
                >
                    <div
                        className="w-full bg-slate-200 h-[250px] lg:h-[300px] saturate-150"
                    />
                    <div className="px-2 py-4 space-y-2">
                        <h2 className="font-semibold bg-slate-200 rounded-md py-4 text-2xl"></h2>
                        <div className="space-y-1">
                            <p className="text-xs text-justify bg-slate-200 rounded-md py-2"></p>
                            <p className="text-xs text-justify bg-slate-200 rounded-md py-2"></p>
                            <p className="text-xs text-justify bg-slate-200 rounded-md py-2"></p>
                            <p className="text-xs text-justify bg-slate-200 rounded-md py-2"></p>
                            <p className="text-xs text-justify bg-slate-200 rounded-md py-2"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSkeleton;