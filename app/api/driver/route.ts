import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // fetch all drivers
    const driverData = await prisma.driver.findMany({
      include: {
        manager: {
          select: {
            company: true,
          },
        },
      },
    });

    return NextResponse.json({ data: driverData });
  } catch (error) {
    // Handle errors
    return NextResponse.json(
      { error: "Error fetching driver details" },
      { status: 409 }
    );
  } finally {
    await prisma.$disconnect();
  }
}



