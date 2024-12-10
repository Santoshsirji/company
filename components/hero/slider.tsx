"use client";

import Marquee from "react-fast-marquee";

const Slider = () => {
    return ( 
        <div className="z-30">
            <Marquee
                pauseOnHover
                speed={100}
                autoFill
            >
                <div
                    className="
                    w-full
                    flex
                    justify-between
                    py-1
                    bg-black

                    text-red-600
                    saturate-200
                    px-2
                    no-scrollbar
                    font-bold
                    "
                >
                    SUPPLY, INSTALLATION, TESTING, COMMISSIONING, MODERNIZATION, THE COMPLETE ELEVATORS AND ESCALATORS SELLS AND SERVICE SOLUTION.
                  </div>
            </Marquee >
        </div>
     );
}
 
export default Slider;