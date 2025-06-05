import { NextRequest, NextResponse } from 'next/server';
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: 'Please enter an email address and continue' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  return NextResponse.json({ exists: !!user });
}