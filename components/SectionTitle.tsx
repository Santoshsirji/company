"use client";

interface SectionTitleProps {
    title?: string;
    subtitle?: string;
    paragraph?: string; 
}
const SectionTitle = ({
    title,
    subtitle,
    paragraph
}: SectionTitleProps) => {
    return ( 
        <div
        className="
        flex
        flex-col
        w-full
        text-center
        space-y-5
        "
        >
            <div>

                <h2 className="
                font-semibold
                text-2xl
                ">{title}</h2>
                <span
                className="
                text-muted-foreground
                "
                >{subtitle}</span>
            </div>
            <div className="w-full">
                <p
                className="
                text-justify
                "
                >{paragraph}
                </p>
            </div>
        </div>
     );
}
 
export default SectionTitle;