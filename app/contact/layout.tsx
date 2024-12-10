import type { Metadata } from "next";

interface TiteAndSEOLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Sujata Technical Services- Contact",
    description: `The following are the methods using which you can contact Sujata Techinical Services. 
    Phone: +977 9851015450
    Email: info@stselevator.com
    WhatsApp: +977 985-1015450
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