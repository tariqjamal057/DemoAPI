import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { query, User } from '@/lib/db';
import { Role, Status } from '@/lib/enums';
const { createId } = require("@paralleldrive/cuid2");

export async function GET(request: NextRequest) {
  try {
    const result = await query(
      'SELECT id, name, email, role, status, "joinedDate", "createdAt", "updatedAt" FROM "User" ORDER BY "createdAt" DESC'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, password, role, status } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Please enter all fields' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await query('SELECT id FROM "User" WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user
    const result = await query(
      'INSERT INTO "User" (id, name, email, password, role, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, name, email, role, status, "joinedDate", "createdAt", "updatedAt"',
      [createId(), name, email, hashedPassword, role || Role.USER, status || Status.Active]
    );

    const user = result.rows[0] as User;
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
