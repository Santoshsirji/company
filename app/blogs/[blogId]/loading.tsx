import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter
} from "@/components/ui/card";

const IndividualSkeleton =  (
) => {

    const blog = {
        title: "",
        front: "",
        backparagraph: ""
    }
       

    return (
        <div
            className="
        flex
        flex-col
        items-center
        justify-center
        animate-pulse
        "
        >
            <Card className="rounded-2xl shadow-lg w-full lg:max-w-[1200px]">
                <CardHeader>
                    <CardTitle className="py-10 bg-gray-200 rounded-md">{blog?.title}</CardTitle>
                    <CardDescription className="py-20 bg-gray-200 rounded-md">{blog?.front}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div
                        className="
                    flex
                    py-96
                    bg-gray-200
                    rounded-md
                    flex-col
                    ">
                    </div>
                    
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </div>
    );
}

export default IndividualSkeleton;