"use client";

import Heading from "@/components/Heading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const AboutPage = () => {
    return (
        <div className="lg:container">
            <Card>
                <CardHeader>
                    <CardTitle>People Behind Sujata Technical:</CardTitle>
                    <CardDescription>Thanks for reaching here to know us better.</CardDescription>
                </CardHeader>
                <CardContent className="text-xs md:text-sm text-justify space-y-8">
                    <div>
                        <Heading title="1. The Chairman" />
                        <div className="space-y-2 ml-5">
                            <p>Mr. Ram Shankar Prasad Shrivastav, popularly known as &quot;Subodh&quot;,  is the visionary Chairman of Sujata Technical Services. With over two decades of rich experience in the elevator industry, he has become a sought-after name in the Nepalese market. Under his leadership, the company has focused on safety, quality, and customer satisfaction. Mr. Shrivastav&apos;s dedication, sincerity, and time-bound services have earned the trust of numerous clients across Nepal.</p>
                            <p>Our mission is to:</p>
                            <ul>
                                <li className="list-disc ml-5">Provide branded high quality elevators as the sole distributor of trusted brands</li>
                                <li className="list-disc ml-5">Create and cultivate long-term relationships with clients</li>
                                <li className="list-disc ml-5">Respond immediately to the concerns of the clients</li>
                                <li className="list-disc ml-5">Achieve complete customer satisfaction</li>
                                <li className="list-disc ml-5">Improve our services continuously</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Heading title="2. The Employees" />
                        <div className="space-y-2 ml-5 md:flex md:space-x-4">
                            <div 
                            className="saturate-150 rounded-2xl overflow-hidden bg-zinc-300 md:w-1/2">
                            <Image src={'/team.jpg'} alt="Employees Image" 
                            width={1000}
                            height={1000}
                            className="h-full w-full"
                            />
                            </div>
                            <p className="md:w-1/2">The organization is composed of well-experienced and trained individuals led by its proprietor, Mr. Ram Shankar Prasad Shrivastav, Subodh. The team includes marketing executives and skilled technicians who work tirelessly to address client issues promptly and effectively. Our employees are known for their reliability, engagement, and accountability, providing exceptional service as part of a national support network.</p>
                        </div>
                    </div>
                    <div>
                        <Heading title="What is STS Elevator?" />
                        <div className="space-y-2">
                            <p className="ml-5">
                                STS Elevators, a brand of Sujata Technical Services Private Limited, manufactures high-quality elevators in India and imports them to Nepal, ensuring reliable and efficient vertical transportation solutions.
                            </p>
                            {/* <p className="ml-5">
                                Founded in 2067, Sujata Technical Services has started to carve its path to become the most trusted
                                distributor of branded elevators as well as the services for its maintenance.With a seasoned team
                                of expert elevator technicians, we are fully prepared with an extensive inventory
                                & spare parts to provide repairs, maintenance, inspection and testing services for
                                nearly every elevator brand in operation. We have the fastest response and repair
                                completion times
                            </p> */}
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Heading
                        title="Message from CEO"
                        subtitle="In our busy, fast-paced culture, we focus on building long-term relationships, both within our own team and with our customers. We strive to act like a partner to our clients and combine traditional values with innovative ideas to deliver unparalleled service."
                    />
                </CardFooter>
            </Card>
        </div>
    );
}

export default AboutPage;
