"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HeadingProps {
    title: string;
    subtitle?: string;
}
const Heading: React.FC<HeadingProps> = ({
    title,
    subtitle
}) => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once
        threshold: 0.2 // Trigger animation when 20% of the component is in view
    });

    return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      >
            <h2 className="sm:text-3xl text-[1.65rem] font-semibold lg:text-4xl border-b-4 border-rose-400 px-2 border-backgroundImage-custom-gradient w-max saturate-150 ">
                {title}
            </h2>
            <p className="text-muted-foreground text-xl  px-2">{subtitle}</p>
      </motion.div>
    );
}

export default Heading;