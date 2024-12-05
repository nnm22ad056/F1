import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { env } from "process";

// Create a new Prisma client instance
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Validate the input
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Fetch the JWT_SECRET from environment variables
    const JWT_SECRET = env.JWT_SECRET;
    if (!JWT_SECRET) {
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Find user by email
    const manager = await prisma.manager.findUnique({
      where: { email },
    });

    // Check if manager exists and the password matches
    if (!manager || manager.password !== password) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    const drivers = await prisma.driver.findMany({
      where: {
        managerId: manager.id,
      },
    });

    console.log("Drivers:", drivers[0].id, drivers[1].id);

    // If login is successful, generate JWT token
    const jwt = sign({ id: manager.id }, JWT_SECRET, { expiresIn: "1h" });
    // Omit the password from the manager data
    const { password: _, ...managerWithoutPassword } = manager;

    // Send back the JWT token and manager data (without password)
    console.log("JWT Token:", jwt);
    return NextResponse.json({
      message: "Login successful",
      manager: managerWithoutPassword,
      managerId: manager.id,
      driver1Id: drivers[0].id,
      driver2Id: drivers[1].id,
      jwt: `Bearer ${jwt}`,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
