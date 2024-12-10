import { NextResponse } from "next/server";

import {db} from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function GET(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    if (!params.blogId) {
      return new NextResponse("blog id is required", { status: 400 });
    }

    const blog = await db.blog.findUnique({
      where: {
        id: params.blogId
      }
    });
  
    return NextResponse.json(blog);
  } catch (error) {
    console.log('[Blog_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function DELETE(
  req: Request,
  { params }: { params: { blogId: string} }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.blogId) {
      return new NextResponse("Blog id is required", { status: 400 });
    }

    const findblog = await db.blog.findFirst({
      where: {
        id: params.blogId
      }
    });


    if(findblog?.userId !== user.id) {
      console.log("I am here")
      return new NextResponse("Unauthorized", { status: 404})
    }

    const blog = await db.blog.delete({
      where: {
        id: params.blogId,
      }
    });
  
    return NextResponse.json(blog);
  } catch (error) {
    console.log('[Blog_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};


export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string} }
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

    if (!params.blogId) {
      return new NextResponse("Blog id is required", { status: 400 });
    }

    const blog = await db.blog.update({
      where: {
        id: params.blogId,
      },
      data: {
        title,
        front,
        backparagraph
      }
    });
  
    return NextResponse.json(blog);
  } catch (error) {
    console.log('[blog_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};