"use client";
import Link from "next/link"

import Button from "@/components/Button";
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardFooter,
    CardTitle
 } from "@/components/ui/card";

interface BlogProps {
    title: string;
    paragraph: string;
    id: string;
}

const Blog = ({
 title,
 paragraph,
 id
}: BlogProps) => {


    return ( 
        <div
        className="
        w-full
        max-w-[1200px]
        flex
        flex-col
        justify-center
        items-center
        "
        >
            <Card 
            className="
            w-full
            rounded-2xl 
            shadow-lg
            lg:max-w-[900px]
            xl:max-w-[1000px]
            ">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    <div
                    className="
                    flex
                    flex-col
                    space-y-4
                    "
                    >
                        <p 
                        className="
                        text-justify
                        text-sm
                        lg:text-lg
                        text-wrap
                        ">
                            {paragraph}
                        </p>
                        <Button
                        >
                            <Link href={`/blogs/${id}`}>
                            Read More
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default Blog;