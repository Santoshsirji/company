import { db } from "@/lib/db";

export default async function getAllBlogs(){

    const blogs = await db.blog.findMany({
        where: {

        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return blogs;
}