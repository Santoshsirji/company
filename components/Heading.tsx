"use client";

interface HeadingProps {
    title: string | null | undefined;
    subtitle?: string;
    hgreen?: boolean;
    hred?: boolean;
    hwhite?: boolean;
    swhite?: boolean;
    sred?: boolean;
    sgreen?: boolean;

}
const Heading = ({
    title,
    subtitle,
    hgreen,
    hred,
    hwhite,
    swhite,
    sred,
    sgreen,
}: HeadingProps) => {
    return (
        <div className="flex flex-col w-full">
            <div
                className={`
            ${hgreen ? "text-green-600 saturate-150" : ""}
            ${hred ? "text-[#ED1C23] saturate-150" : ""}
            ${hwhite ? "text-white" : ""}
            text-base
            font-semibold
            `}
            >
                {title}
            </div>
            <div
                className={`
            ${sgreen ? "text-green-600 saturate-150" : ""}
            ${sred ? "text-[#ED1C23] saturate-150" : ""}
            ${swhite ? "text-white" : ""}
            text-sm
            `}
            >
                {subtitle}
            </div>
        </div>
    );
}

export default Heading;