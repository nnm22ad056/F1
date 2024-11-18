import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { env } from 'process';
import { sign } from 'jsonwebtoken';

// Generate Prisma client instance
const prisma = new PrismaClient();

export async function POST(request: Request) {
  // Fetch environment variables
  const JWT_SECRET = env.JWT_SECRET;
  if (!JWT_SECRET) {
    return NextResponse.json({ error: 'Missing JWT_SECRET' }, { status: 500 });
  }

  // Parse request body
  const body = await request.json();

  // Validate request body manually (simplified validation)
  const { firstName, lastName, email, company, password } = body;
  if (!firstName || !lastName || !email || !company || !password) {
    return NextResponse.json({ error: 'Email, password, and name are required' }, { status: 400 });
  }

  try {
    // Create user in the database
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        company: company,
        email: email,
        password: password,
      },
    });

    // Check if user id is valid
    if (!user.id) {
      console.error('User created, but ID is missing:', user);
      return NextResponse.json({ error: 'User creation failed' }, { status: 500 });
    }

    // Generate JWT token
    const jwt = sign({ id: user.id }, JWT_SECRET);

    // Return the JWT token
    console.log('JWT Token:', jwt);
    return NextResponse.json({ jwt: 'Bearer ' + jwt });
  } catch (e) {
    console.error('Error creating user:', e);
    return NextResponse.json({ error: 'User with that email already exists' }, { status: 409 });
  } finally {
    await prisma.$disconnect();
  }
}
