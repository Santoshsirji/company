"use client";

interface ButtonProps {
    children?: React.ReactNode;
    className?: string; 
    onClick? : () => void;
}
const Button = ({
    children,
    onClick,
    className
}: ButtonProps ) => {
    return ( 
        <button
        onClick={onClick}
        className={`"
        lg:px-5
        lg:py-2
        transition
        duration-200
        cursor-pointer
        text-white
        w-max
        rounded-full
        lg:text-xl
        lg:font-semibold
        text-sm
        px-5
        py-2
        hover:opacity-80
        ${className ? className : "bg-[#000042] hover:opacity-80"}
        `}
        >
            {children}
        </button>
     );
}
 
export default Button;