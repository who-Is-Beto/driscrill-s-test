import { prisma } from "@/lib/prisma";
import { encryptPassword } from "@/utils/passwords";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const password = await encryptPassword(body.password);

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        password,
        name: body.name
      }
    });

    newUser.password = "";

    return NextResponse.json({
      user: newUser,
      message: "User created successfully"
    });
  } catch (err) {
    return NextResponse.error();
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id")!;
  try {
    const specificUser = await prisma.user.findUnique({
      where: {
        id
      }
    });

    return NextResponse.json({ user: specificUser });
  } catch (err) {
    return NextResponse.error();
  }
}

export async function PUT(req: Request) {
  try {
    const { email, id, name, password: newPassword } = await req.json();
    const password = await encryptPassword(newPassword);

    const updatedUser = await prisma.user.update({
      where: {
        id
      },
      data: {
        email,
        name,
        password
      }
    });

    updatedUser.password = "";

    return NextResponse.json({
      user: updatedUser,
      message: "User updated successfully"
    });
  } catch (err) {
    return NextResponse.error();
  }
}

export async function DELETE(req: Request) {
  try {
    const body = await req.json();

    await prisma.user.delete({
      where: {
        id: body.id
      }
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (err) {
    return NextResponse.error();
  }
}
