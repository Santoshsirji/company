import { db } from "@/lib/db";

export default async function getAllvacancys(){

    const vacancys = await db.vacancy.findMany({
        where: {

        },
        orderBy: {
            createdAt: "desc"
        }
    })

    return vacancys;
}