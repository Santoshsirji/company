import { db } from "@/lib/db";

export default async function getIndividualBlog({ params} : { params: { blogId: string}} ) {

    if(!params.blogId) {
        return null;
    }

    const blog = await db.blog.findFirst({
        where: {
            id: params.blogId
        }
    })
    if(!blog) {
        return null;
    }

    return blog;
}