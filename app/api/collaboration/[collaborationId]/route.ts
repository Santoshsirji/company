import { NextResponse } from "next/server";

import {db} from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function GET(
  req: Request,
  { params }: { params: { collaborationId: string } }
) {
  try {
    if (!params.collaborationId) {
      return new NextResponse("collaboration id is required", { status: 400 });
    }

    const collaboration = await db.collaboration.findUnique({
      where: {
        id: params.collaborationId
      }
    });
  
    return NextResponse.json(collaboration);
  } catch (error) {
    console.log('[collaboration_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function DELETE(
  req: Request,
  { params }: { params: { collaborationId: string} }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.collaborationId) {
      return new NextResponse("collaboration id is required", { status: 400 });
    }

    const findcollaboration = await db.collaboration.findFirst({
      where: {
        id: params.collaborationId
      }
    });


    if(findcollaboration?.userId !== user.id) {
      console.log("I am here")
      return new NextResponse("Unauthorized", { status: 404})
    }

    const collaboration = await db.collaboration.delete({
      where: {
        id: params.collaborationId,
      }
    });
  
    return NextResponse.json(collaboration);
  } catch (error) {
    console.log('[collaboration_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};


export async function PATCH(
  req: Request,
  { params }: { params: { collaborationId: string} }
) {
  try {   
   const user = await getCurrentUser();

    const body = await req.json();
    
    const { title, front, backparagraph } = body;
    
    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    if (!front) {
      return new NextResponse("Front paragraph is required", { status: 400 });
    }
    if (!backparagraph) {
      return new NextResponse("Backparagraph is required", { status: 400 });
    }

    if (!params.collaborationId) {
      return new NextResponse("collaboration id is required", { status: 400 });
    }

    const collaboration = await db.collaboration.update({
      where: {
        id: params.collaborationId,
      },
      data: {
        title,
        front,
        backparagraph
      }
    });
  
    return NextResponse.json(collaboration);
  } catch (error) {
    console.log('[collaboration_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};