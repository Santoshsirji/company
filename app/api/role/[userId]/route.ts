import { NextResponse } from "next/server";


import { db } from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";


export async function PATCH(
  req: Request,
  { params }: { params: { userId: string} }
) {
  try {   
   const user = await getCurrentUser();

    const body = await req.json();
    
    const { role } = body;
    
    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }


    if (!params.userId) {
      return new NextResponse("User id is required", { status: 400 });
    }

    const updatedUser = await db.user.update({
      where: {
        id: params.userId,
      },
      data: {
        role: role
      }
    });
  
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log('[Role_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};