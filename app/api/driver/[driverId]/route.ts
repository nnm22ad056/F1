// app/api/driver/[driverId]/route.ts

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { driverId: string } }
) {
  // Extract the dynamic parameter `driverId` from the route
  const { driverId } = params;

  if (!driverId) {
    return NextResponse.json(
      { message: "Driver ID is required" },
      { status: 400 }
    );
  }

  // Parse driverId to an integer
  const parsedDriverId = parseInt(driverId, 10);

  // Check if parsing was successful
  if (isNaN(parsedDriverId)) {
    return NextResponse.json(
      { message: "Invalid Driver ID format" },
      { status: 400 }
    );
  }

  try {
    // Fetch driver details from the database
    const driverData = await prisma.driver.findUnique({
      where: {
        id: parsedDriverId, // Use the parsed integer here
      },
      include: {
        manager: {
          select: {
            company: true,
          },
        },
      },
    });

    if (!driverData) {
      return NextResponse.json({ error: "Driver not found" }, { status: 404 });
    }

    return NextResponse.json(driverData);
  } catch (error) {
    console.error("Error fetching driver data:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { driverId: string } }
) {
  // Parse request body
  try {
    const { driverId } = params;

    // Parse driverId to an integer
    const parsedDriverId = parseInt(driverId, 10);

    const {
      first_name,
      last_name,
      description,
      country,
      car,
      points,
      wins,
      podiums,
      championships,
    } = await req.json();

    // Validate request body
    if (
      !first_name &&
      !last_name &&
      !description &&
      !country &&
      !car &&
      !points &&
      !wins &&
      !podiums &&
      !championships
    ) {
      return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
    }

    const parsedPoints = parseInt(points, 10);
    const parsedWins = parseInt(wins, 10);
    const parsedPodiums = parseInt(podiums, 10);
    const parsedChampionships = parseInt(championships, 10);

    // Update driver in the database
    await prisma.driver.update({
      where: { id: parsedDriverId },
      data: {
        first_name: first_name,
        last_name: last_name,
        description: description,
        country: country,
        car: car,
        points: parsedPoints,
        wins: parsedWins,
        podiums: parsedPodiums,
        championships: parsedChampionships,
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
