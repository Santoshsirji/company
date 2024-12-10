import { Triangle, TriangleAlert } from "lucide-react";


import Heading from "@/components/style/heading";
import { Separator } from "@/components/ui/separator";
import getAllBlogs from "../actions/getBlogs";
import Blog from "./components/Blog";

const BlogPage = async () => {
    const blogs = await getAllBlogs();
    return ( 
        <div
        className="
        w-full
        bg-slate-50
        min-h-[90vh]
        "
        >
            <div className="px-2 md:px-6 lg:px-10">
                <Heading
                    title="Blogs"
                    subtitle="Following are the blogs available to read."
                    />
                <Separator className="mt-7 mb-3"/>
            </div>
            <div
            className="
            flex
            flex-col
            items-center
            justify-center
            gap-8
            "
            >
                {blogs.map((blog, index) => (
                    <Blog
                     key={index}
                     id={blog.id}
                     title={blog.title}
                     paragraph={blog.front}
                    />
                ))}
                <div 
                className="
                font-semibold
                flex
                items-center 
                space-x-1
                text-muted-foreground
                ">
                    <TriangleAlert/>
                    <span className="text-lg ">
                     End of Results.
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default BlogPage;