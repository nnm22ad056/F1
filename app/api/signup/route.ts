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
    // Create manager in the database
    const manager = await prisma.manager.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        company: company,
        email: email,
        password: password,
      },
    });

    // Check if manager id is valid
    if (!manager.id) {
      console.error('manager created, but ID is missing: '+ manager);
      return NextResponse.json({ error: 'manager creation failed' }, { status: 500 });
    }

    // Generate JWT token
    const jwt = sign({ id: manager.id }, JWT_SECRET);

    // Return the JWT token
    return NextResponse.json({ jwt: 'Bearer ' + jwt });
  } catch (e) {
    return NextResponse.json({ error: 'manager with that email already exists' }, { status: 409 });
  } finally {
    await prisma.$disconnect();
  }
}
