import { NextResponse } from "next/server";

import {db} from "@/lib/db";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function GET(
  req: Request,
  { params }: { params: { vacancyId: string } }
) {
  try {
    if (!params.vacancyId) {
      return new NextResponse("vacancy id is required", { status: 400 });
    }

    const vacancy = await db.vacancy.findUnique({
      where: {
        id: params.vacancyId
      }
    });
  
    return NextResponse.json(vacancy);
  } catch (error) {
    console.log('[Vacancy_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function DELETE(
  req: Request,
  { params }: { params: { vacancyId: string} }
) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.vacancyId) {
      return new NextResponse("vacancy id is required", { status: 400 });
    }


    const vacancy = await db.vacancy.delete({
      where: {
        id: params.vacancyId,
      }
    });
  
    return NextResponse.json(vacancy);
  } catch (error) {
    console.log('[Vacancy_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};


export async function PATCH(
  req: Request,
  { params }: { params: { vacancyId: string} }
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

    if (!params.vacancyId) {
      return new NextResponse("vacancy id is required", { status: 400 });
    }

    const vacancy = await db.vacancy.update({
      where: {
        id: params.vacancyId,
      },
      data: {
        title,
        front,
        backparagraph
      }
    });
  
    return NextResponse.json(vacancy);
  } catch (error) {
    console.log('[Vacancy_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};