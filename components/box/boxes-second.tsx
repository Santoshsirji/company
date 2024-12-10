"use client";


import { motion } from 'framer-motion';
import 'react-slideshow-image/dist/styles.css';


const BoxesContainerSecond = () => {
    const animationVariants = {
        hidden: { opacity: 0.2, y: 80 },
        visible: { opacity: 1, y: 0 }
    };


    return ( 
        <div className="w-full">
            <div className="flex flex-col items-center gap-y-8 md:flex-row md:justify-between justify-center">
               
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={animationVariants}
                    viewport={{ once: false, amount: 1 }}
                    className="text-xl text-center bg-white duration-1500 shadow-lg aspect-square w-[312px] sm:w-[280px] lg:w-[300px] border rounded-xl flex flex-col justify-between lg:py-14 lg:px-6 px-3 py-4"
                >
                    <span className="font-semibold text-3xl">We use</span>
                    <span className="text-rose-600 font-bold text-[4rem]">
                        Quality
                    </span>
                    <span className="text-zinc-700 text-xl">materials and parts.</span>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={animationVariants}
                    viewport={{ once: false, amount: 1 }}
                    className="text-xl text-center bg-white duration-1500 shadow-lg aspect-square w-[312px] sm:w-[280px] lg:w-[300px] border rounded-xl flex flex-col justify-between lg:py-14 lg:px-6 px-3 py-4"
                >
                    <span className="font-semibold text-3xl">We have</span>
                    <span className="text-rose-600 font-bold text-[4rem]">
                        Biggest
                    </span>
                    <span className="text-zinc-700 text-xl">network of suppliers</span>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={animationVariants}
                    viewport={{ once: false, amount: 1 }}
                    className="text-xl text-center bg-white duration-1500 shadow-lg aspect-square w-[312px] sm:w-[280px] lg:w-[300px] border rounded-xl flex flex-col justify-between lg:py-14 lg:px-6 px-3 py-4"
                >
                    <span className="font-semibold text-3xl">We deliver</span>
                    <span className="text-rose-600 font-bold text-[4rem]">
                     Promise
                    </span>
                    <span className="text-zinc-700 text-xl">that we&apos;ve made</span>
                </motion.div>
            </div>
        </div>
     );
}
 
export default BoxesContainerSecond;