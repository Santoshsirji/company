import { db } from "@/lib/db";


export default async function getUserById(id: string) {

    const user = await db.user.findFirst({where: {
        id: id,
        }});
    return user;
}