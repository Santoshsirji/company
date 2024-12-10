import type { Metadata } from "next";

interface TiteAndSEOLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Maintainance Services - Sujata Technical Services",
    description: `Sujata Technical Services also offer maintainance service.
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