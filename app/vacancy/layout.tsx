import type { Metadata } from "next";

interface TiteAndSEOLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Career - Sujata Technical Services",
    description: `Sujata Technical Services is hiring people on the following positions. Please feel free to apply and work with us. We can grow together.
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