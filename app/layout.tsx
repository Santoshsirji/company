// Global Imports
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
// Local Imports
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/Footer";
import NextNProgressClient from "@/components/Layout";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Sujata Technical Services- Home",
  description: `
   STS Elevator Company is a leading manufacturer, installer and service provider of high quality, advanced elevator and escalator products in India and overseas. STS endeavor into growth and success is driven by its proven products and total customer satisfaction accomplished while serving wide array of its clientele in public, private and corporate domain. As a responsible and trusted organization, our commitment and responsibilities play a very important role in our business. In nearly two decades of our presence in the elevator and escalatorworld, we have successfully handled various challenging projects across the world with our high performance equipments. For us, customer satisfaction is the key to our growth. Their feedback invariably serves as the most potential support for continuous improvment in our people, products and processes.
  `,
  icons: ['/logo.png']
};

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextNProgressClient />
        <Navbar />
        <Toaster />
        <div className="">
          <div className="py-16 z-40">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
