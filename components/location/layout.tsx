import type { Metadata } from "next";

interface TiteAndSEOLayoutProps {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Sujata Technical Services- Home",
    description: `
   STS Elevator Company is a leading manufacturer, installer and service provider of high quality, advanced elevator and escalator products in India and overseas. STS endeavor into growth and success is driven by its proven products and total customer satisfaction accomplished while serving wide array of its clientele in public, private and corporate domain. As a responsible and trusted organization, our commitment and responsibilities play a very important role in our business. In nearly two decades of our presence in the elevator and escalatorworld, we have successfully handled various challenging projects across the world with our high performance equipments. For us, customer satisfaction is the key to our growth. Their feedback invariably serves as the most potential support for continuous improvment in our people, products and processes.
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