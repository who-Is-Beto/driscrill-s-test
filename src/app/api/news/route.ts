import { prisma } from "@/lib/prisma";
import { New } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const news: New[] = await prisma.new.findMany();
    return NextResponse.json({ news });
  } catch (err) {
    return NextResponse.error();
  }
}
