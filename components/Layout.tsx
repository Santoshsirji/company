"use client";
import NextTopLoader from "nextjs-toploader";

const NextNProgressClient = () => {
    return <NextTopLoader
        color="red"
        initialPosition={0.10}
        crawlSpeed={500}
        height={4}
        crawl={true}
        easing="ease"
        speed={500}
        shadow="0 0 10px #000000,0 0 10px #black"
        showSpinner={false}
    />;
};

export default NextNProgressClient;