import Heading from "@/components/style/heading";
import { Separator } from "@/components/ui/separator";
import getAllBlogs from "../actions/getBlogs";
import BlogSkeleton from "./components/BlogSkeleton";

const BlogLoading = () => {
    const blogs = [
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
        {
        id: "1",
        title: " ",
        front: " "
    },
]

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
                <Separator className="mt-7 mb-3" />
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
                    <BlogSkeleton
                        key={index}
                        id={blog.id}
                        title={blog.title}
                        paragraph={blog.front}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default BlogLoading;