import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { sign } from 'jsonwebtoken';  // Import jwt.sign to create a token
import { env } from 'process';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Validate the input
    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Fetch the JWT_SECRET from environment variables
    const JWT_SECRET = env.JWT_SECRET;
    if (!JWT_SECRET) {
      return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Check if user exists and the password matches
    if (!user || user.password !== password) {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }

    // If login is successful, generate JWT token
    const jwt = sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });  // You can set the expiration time here

    // Omit the password from the user data
    const { password: _, ...userWithoutPassword } = user;

    // Send back the JWT token and user data (without password)
    console.log('JWT Token:', jwt);
    return NextResponse.json({
      message: 'Login successful',
      user: userWithoutPassword,
      jwt: `Bearer ${jwt}`,
    });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
