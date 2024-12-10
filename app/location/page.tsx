"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


const LocationPage = () => {
    return (
        <div className="lg:flex pt-12 space-y-8 gap-8 lg:container">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        Our Location
                    </CardTitle>
                    <CardDescription>
                        Hello, We are located here at Kalimati, Kathmandu. You can use the map below to get to us. We are here to welcome you 💖❤
                    </CardDescription>
                </CardHeader>
                <CardContent className="w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d220.78569796768528!2d85.301406!3d27.699646!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQxJzU4LjciTiA4NcKwMTgnMDUuMSJF!5e0!3m2!1sen!2snp!4v1720158606155!5m2!1sen!2snp" width="600" height="450" style={{ border: 0 }} className="w-full h-[70vh] lg:h-[55vh]" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </CardContent>
            </Card>
        </div>
    );
}

export default LocationPage;