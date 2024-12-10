"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle
} from "@/components/ui/card";

interface BlogSkeletonProps {
    title: string;
    paragraph: string;
    id: string;
}

const BlogSkeleton = ({
    title,
    paragraph,
    id
}: BlogSkeletonProps) => {
    return (
        <div
            className="
        w-full
        max-w-[1200px]
        flex
        flex-col
        justify-center
        items-center
        animate-pulse
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
                    <CardTitle className="text-2xl bg-slate-200 rounded-lg py-6 font-semibold">
                    </CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>
                    <div
                        className="
                    flex
                    flex-col
                    space-y-1
                    "
                    >
                        <div
                            className="
                        text-justify
                        py-3
                        bg-slate-200
                        rounded-md
                        text-sm
                        lg:text-lg
                        text-wrap
                        ">
                        </div>
                        <div
                            className="
                        text-justify
                        py-3
                        bg-slate-200
                        rounded-md
                        text-sm
                        lg:text-lg
                        text-wrap
                        ">
                        </div>
                        <div
                            className="
                        text-justify
                        py-3
                        bg-slate-200
                        rounded-md
                        text-sm
                        lg:text-lg
                        text-wrap
                        ">
                        </div>
                        <div
                            className="
                        text-justify
                        py-3
                        bg-slate-200
                        rounded-md
                        text-sm
                        lg:text-lg
                        text-wrap
                        ">
                        </div>
                        
                        <div
                            className="
                        bg-slate-200
                        w-max 
                        font-semibold
                        py-5
                        rounded-lg
                        px-14
                        ">
                        
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default BlogSkeleton;