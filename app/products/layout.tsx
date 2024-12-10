import type { Metadata } from "next";

interface TiteAndSEOLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Products - Sujata Technical Services",
    description: `Sujata Technical Services currently offer services related to elevators, escalators, and Cop & Lop. See more details on the page.
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