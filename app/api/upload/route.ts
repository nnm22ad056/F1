import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define the path to the public folder for uploading
const uploadDirectory = path.join(process.cwd(), "public/uploads");

export async function POST(req: NextRequest) {
  try {
    console.log("Uploading file...");
    // Ensure the uploads folder exists, create it if not
    if (!fs.existsSync(uploadDirectory)) {
      fs.mkdirSync(uploadDirectory, { recursive: true });
    }

    // Get the file from the request
    const formData = await req.formData();
    const file = formData.get("file") as Blob;

    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    // Get the file name and create a path for saving
    const fileName = file.name;
    const filePath = path.join(uploadDirectory, fileName);

    // Convert the file Blob to a buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Save the file in the public/uploads folder
    fs.writeFileSync(filePath, buffer);

    return NextResponse.json({ message: "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error uploading file" }, { status: 500 });
  }
}
