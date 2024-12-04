import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const raceData = await prisma.race.findMany({
      include: {
        winner: {
          select: {
            first_name: true,
            last_name: true,
            car: true,
            manager: {
              select: {
                company: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({ data: raceData });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching race details" },
      { status: 409 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const { location, winnerId, laps, hours, minutes, seconds, milliseconds } =
      await req.json();

    // Validate request body manually
    if (
      !location ||
      !winnerId ||
      !laps ||
      !hours ||
      !minutes ||
      !seconds ||
      !milliseconds
    ) {
      return NextResponse.json({ error: "Enter all details" }, { status: 400 });
    }

    // Create driver in the database
    await prisma.race.create({
      data: {
        location: location,
        winnerId: winnerId,
        laps: laps,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
      },
    });

    return NextResponse.json({ message: "race details posted" });
  } catch (e) {
    // Handle errors
    console.log("error: " + e);
    return NextResponse.json(
      { error: "Error posting race details" },
      { status: 409 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
