import type { Metadata } from "next";

interface TiteAndSEOLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "FAQs- Sujata Technical Services",
    description: `The following are the most frequently asked questions (FAQs) to Sujata Technical Services.
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