import getCurrentUser from "@/app/actions/getCurrentUser";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const {
        title,
        front,
        backparagraph
    } = body;

    if(!title  || !front || !backparagraph) {
        return NextResponse.error();
    }

    const user = await getCurrentUser();

    if(!user) {
        return NextResponse.json({error: "User is required", status: 400});
    }

    const collaboration = await db.collaboration.create({
        data: {
            title,
            front,
            backparagraph,
            userId: user.id
        }
    })

    return NextResponse.json({collaboration});
}


export async function DELETE() {
    
}