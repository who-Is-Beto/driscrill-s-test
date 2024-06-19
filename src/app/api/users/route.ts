import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users: User[] = await prisma.user.findMany();
    return NextResponse.json({ users });
  } catch (err) {
    return NextResponse.error();
  }
}
