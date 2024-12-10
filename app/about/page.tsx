"use client";

import Heading from "@/components/Heading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AboutPage = () => {
    return (
        <div className="lg:container">
            <Card>
                <CardHeader>
                    <CardTitle>About US:</CardTitle>
                    <CardDescription>Thanks for reaching here to know us better.</CardDescription>
                </CardHeader>
                <CardContent className="text-xs md:text-sm text-justify space-y-8">
                    <div>
                        <Heading title="1. Our Mission" />
                        <div className="space-y-2 ml-5">
                            <p>Safety is the heart of everything we do. Sujata Technical Services&apos; mission is to:</p>
                            <ul>
                                <li className=" list-disc ml-5">Provide branded high quality elevators being sole distributor of trusted brands
                                </li>
                                <li className="list-disc ml-5">Create and cultivate long-term relationships with clients</li>
                                <li className="list-disc ml-5">Respond immediately to the concerns of the clients</li>
                                <li className="list-disc ml-5">Achieve complete customer satisfaction</li>
                                <li className="list-disc ml-5">Improve our services continuously</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <Heading title="2. The Management" />
                        <div className="space-y-2 ml-5">
                            <p>{`The organization is composed of well experienced and trained individuals led by its proprietor, Mr.
                                Ram Shankar Prasad Shrivastav (popularly known as “Subodh”) who have a very rich experience in
                                this field of over two decades and one of the sought after name chief technician in the Nepalese
                                market. The team comprises of marketing executives and trained technicians who also have gained
                                significant experience and work round the clock to sort out issues of clients.`}</p>
                            <p>{`
                            Mr. Shrivastav “Subodh” in the span of over two decades has already worked in installation and 
                            maintenance of elevators of various brands in Nepal and is widely known for his sincerity, dedication, 
                            time bound and affordable services which has helped him in building large customer base across 
                            Nepal and has earned their trust.
                            
                            `}</p>
                        </div>
                    </div>
                    <div>

                        <Heading title="3. Our Philosophy" />
                        <p className="ml-5">Our customers are at the heart of every decision we make. We strive to exceed their expectations at every turn and create a culture of giving.</p>
                    </div>
                    <div>
                        <Heading title="4. Our Values" />
                        <p className="ml-5">
                            Customer satisfaction is one of the key metrics that determine the success of any business. It is a fuel that a business runs on.
                            Unsatisfied customers equal unsuccessful business — as simple as that.
                            We believe that if our customers are satisfied with our products and services, it is highly likely that they will stay loyal to your company.
                            Therefore, we give immense priority to the customer satisfaction and deliver whtat we&apos;ve promised them previously.
                        </p>
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

