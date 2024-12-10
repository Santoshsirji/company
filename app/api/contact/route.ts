import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const {
        name,
        email,
        phone,
        subject,
        description
    } = body;

    if(!name  || !phone || !email || !subject || !description) {
        return NextResponse.error();
    }


    const contact = await db.contact.create({
        data: {
            name,
            email,
            phone,
            subject,
            description
        }
    })

    return NextResponse.json({contact});
}
