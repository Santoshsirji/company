"use client";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { BsTwitterX } from "react-icons/bs";
import Container from "./container";

const Footer = () => {
    return (
        <Container className="bg-[#000042] text-white">
            <div className="satuarate-150 z-0 brightness-105 bottom-0 pt-14 pb-6">
                <div className="w-full flex-col flex md:flex-row p-4">
                    <div className="flex flex-col md:w-1/2">
                        <div className="flex items-center space-x-1">
                            <MdEmail size={25} className="h-7 w-7" />
                            <Link href="mailto:info@stselevator.com"  target="_blank" className="md:font-semibold text-sm md:text-base font-light">info@stselevator.com</Link>
                        </div>
                        <div className="flex items-center space-x-1">
                            <FaWhatsapp size={25} className="h-7 w-7 text-green-500 saturate-150" />
                            <Link href="https://wa.me/9779851015450" 
                            target="_blank"
                            className="md:font-semibold text-sm md:text-base font-light">+977 9851015450</Link>
                        </div>
                        <div className="flex items-center space-x-1 ">
                            <PhoneCall size={25} className="h-7 w-7" />
                            <Link href="tel:+9779851015450" target="_blank" className="md:font-semibold text-sm md:text-base font-light">+977 9851015450</Link>
                        </div>
                        <div className="flex items-center space-x-1">
                            <div className="flex flex-col py-10">
                                <div className="font-semibold text-sm md:text-lg">
                                    Follow Us:
                                </div>
                                <div className="flex items-center space-x-3">
                                    <Link href="https://www.facebook.com/profile.php?id=100071850128381" className="bg-white p-1 rounded-md" target="_blank">
                                        <FaFacebook size={25} className="h-7 w-7 cursor-pointer text-blue-600 hover:opacity-80" />
                                    </Link>
                                    <Link href="https://www.instagram.com" target="_blank" className="bg-white p-1 rounded-md">
                                        <FaInstagram size={25} className="h-7 w-7 cursor-pointer text-rose-600 hover:opacity-80" />
                                    </Link>
                                    <Link href="https://www.twitter.com" target="_blank" className="bg-zinc-800 rounded-md p-1 ">
                                        <BsTwitterX size={25} className="h-7 w-7 cursor-pointer hover:opacity-80" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-grow justify-between">
                        <div className="flex flex-col space-y-4 w-1/3">
                            <div className="font-semibold text-sm md:text-lg">Company Info</div>
                            <div className="flex flex-col">
                                <Link href="/" className="hover:font-base font-light cursor-pointer md:font-normal md:text-base text-xs">Home</Link>
                                <Link href="/products" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Products</Link>
                                <Link href="/#testimonials" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Testimonials</Link>
                                <Link href="/collaboration" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Collaborations</Link>

                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 w-1/3">
                            <div className="font-semibold text-sm md:text-lg">Useful Links</div>
                            <div className="flex flex-col">
                                <Link href="/blogs" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Blogs</Link>
                                <Link href="/vacancy" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Vacancy</Link>
                                <Link href="/people" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Chairman</Link>

                                <Link href="/contact" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Contact Us</Link>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 w-1/3">
                            <div className="font-semibold text-sm md:text-lg">Need Help</div>
                            <div className="flex flex-col">
                                <Link href="/contact" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Contact Us</Link>
                                <Link href="/location" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Location</Link>
                                <Link href="/about" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">About Us</Link>
                                <Link href="/location" className="font-light hover:font-semibold cursor-pointer md:font-normal md:text-base text-xs">Location</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-xs text-center font-semibold md:font-normal md:text-base">
                        &copy;Copyright {new Date().getFullYear()}. All rights reserved.
                    </span>
                </div>
            </div>
        </Container>
    );
}

export default Footer;
