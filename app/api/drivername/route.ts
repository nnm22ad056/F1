

import { PrismaClient } from "@prisma/client";
import {  NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(
  request: Request
  
){
  // Extract the dynamic parameter `driverId` from the route
    const {firstName} = await request.json();
    if(!firstName){
        return NextResponse.json({
            error : "Error No firstname" 
        });
    }

 

  try {
    // Fetch driver details from the database
    const driverData = await prisma.driver.findFirst({
      where: {
        first_name: firstName, // Use the parsed integer here
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

    return NextResponse.json({driverData : driverData});
  } catch (error) {
    console.error("Error fetching driver data:"+ error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }


}