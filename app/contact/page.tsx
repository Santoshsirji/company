"use client";

import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaFacebookMessenger, FaInstagram, FaViber, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdMail } from "react-icons/md";


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Separator
} from "@/components/ui/separator";

const ContactUsPage = () => {
    return (
        <div className="w-full lg:container">
            <Card className="bg-neutral-50 w-full space-y-10">
                <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>Following are the ways to reach out to us. Please feel free to reach out through your most convinient way.</CardDescription>
                </CardHeader>
                <Separator />
                <CardContent>

                    <div
                        className="
                    flex
                    flex-col
                    "
                    >
                        <div
                            className="
                        flex 
                        items-center 
                        gap-2">
                            <MdMail
                                className="w-6 h-6 cursor-pointer hover:opacity-60" />
                            <div
                                className="text-lg">
                                <span
                                    className="font-semibold text-base">Email Us:</span>
                                <span className=" text-base">info@stselevator.com.np</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <PhoneCall className="w-6 h-6 cursor-pointer hover:opacity-60" />
                            <div>
                                <span className="font-semibold text-base">Call Us: </span>
                                <span className=" text-base">+977 985-1015450</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsWhatsapp className="w-6 h-6 cursor-pointer hover:opacity-60" />
                            <div> <span className="font-semibold text-base">Whatsapp:</span><span className=" text-base">+977 985-1015450</span></div>
                        </div>
                        <Separator className="my-5" />
                        <h2 className="text-base font-semibold">
                            1. Our Social Media Handles
                        </h2>
                        <div className="flex flex-col space-y-3">
                            <p>Follow US at:</p>
                            <div className="flex items-center gap-4">
                                <Link href={`https://www.facebook.com/profile.php?id=100071850128381`} target="_blank">
                                    <FaFacebook className="w-6 h-6 text-blue-600 cursor-pointer hover:opacity-60" />
                                </Link>
                                <FaInstagram className="w-6 h-6 text-rose-600 cursor-pointer hover:opacity-60" />
                                <BsTwitterX className="w-6 h-6 cursor-pointer hover:opacity-60" />
                                <FaYoutube className="w-6 h-6 text-[#FF0000] cursor-pointer hover:opacity-60" />
                            </div>
                        </div>
                        <Separator className="my-5" />
                        <h2 className="text-base font-semibold">2. Message Us Directly</h2>
                        <div
                            className="
                        flex
                        flex-col
                        "
                        >
                            <p>You can message us directly via:</p>
                            <div className="flex gap-4">
                                <div className="">
                                    <FaFacebookMessenger className="w-6 h-6 text-sky-700 from-[#0695FF] via-[#A334FA] to-[#FF6968] cursor-pointer hover:opacity-60" />
                                </div>
                                <FaWhatsapp className="w-6 h-6 text-green-600 cursor-pointer hover:opacity-60" />
                                <FaViber className="w-6 h-6 text-purple-700 cursor-pointer hover:opacity-60" />
                            </div>
                        </div>
                    </div>
                </CardContent>
                <Separator />
                <CardFooter>
                    <div className="flex flex-col w-full">
                        <h2 className="text-base font-semibold">3. Visit Our Office Directly</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d220.78569796768528!2d85.301406!3d27.699646!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQxJzU4LjciTiA4NcKwMTgnMDUuMSJF!5e0!3m2!1sen!2snp!4v1720158606155!5m2!1sen!2snp" width="600" height="450" style={{ border: 0 }} className="w-full h-[40vh] lg:h-[55vh]" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ContactUsPage;