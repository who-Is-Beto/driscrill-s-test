import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newCreated = await prisma.new.create({
      data: {
        content: body.content,
        title: body.title
      }
    });

    return NextResponse.json({
      user: newCreated,
      message: "New created successfully"
    });
  } catch (err) {
    return NextResponse.error();
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id")!;
  try {
    const specificNew = await prisma.new.findUnique({
      where: {
        id
      }
    });

    return NextResponse.json({ new: specificNew });
  } catch (err) {
    return NextResponse.error();
  }
}
