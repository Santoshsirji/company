import { db } from "@/lib/db";

export default async function getAuthorById(request: any){
    try {
        const author = await db.user.findUnique({
            where: {
                id: request
            }
        });
        return author;
    } catch (error) {
        console.error('Error finding author by ID:', error);
        throw error;
    }
}