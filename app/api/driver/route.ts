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

export async function POST(req: Request) {
  try {
    // Parse request body
    const {
      first_name,
      last_name,
      country,
      car,
      managerId,
      wins,
      podiums,
      championships,
    } = await req.json();

    // Validate request body manually
    if (!first_name || !country || !managerId) {
      return NextResponse.json({ error: "Enter all details" }, { status: 400 });
    }

    // Create driver in the database
    await prisma.driver.create({
      data: {
        first_name: first_name,
        last_name: last_name,
        country: country,
        car: car,
        managerId: managerId,
        wins: wins,
        podiums: podiums,
        championships: championships,
      },
    });

    return NextResponse.json({ message: "driver created" });
  } catch (e) {
    // Handle errors
    return NextResponse.json(
      { error: "Error creating driver" },
      { status: 409 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(req: Request) {
  // Parse request body
  try {
    const {
      id,
      first_name,
      last_name,
      country,
      car,
      wins,
      podiums,
      championships,
    } = await req.json();

    // Validate request body
    if (
      !first_name &&
      !last_name &&
      !country &&
      !car &&
      !wins &&
      !podiums &&
      !championships
    ) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    // Update driver in the database
    await prisma.driver.update({
      where: { id: id },
      data: {
        first_name: first_name,
        last_name: last_name,
        country: country,
        car: car,
        wins: wins,
        podiums: podiums,
        championships: championships,
      },
    });

    return NextResponse.json({ message: "driver updated" });
  } catch (e) {
    return NextResponse.json(
      { error: "Error updating driver" },
      { status: 409 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
