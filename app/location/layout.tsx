import type { Metadata } from "next";

interface TiteAndSEOLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Location - Sujata Technical Services",
    description: `
    You can also directly visit our office at Kalimati. See more details on the page.
  `,
    icons: ['/logo.png']
};

const TiteAndSEOLayout = ({
    children
}: TiteAndSEOLayoutProps) => {
    return ( 
        <div>
            {children}
        </div>
     );
}
 
export default TiteAndSEOLayout;