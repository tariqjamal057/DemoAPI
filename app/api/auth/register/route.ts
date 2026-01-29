import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query, User } from '@/lib/db';
import { Role, Status } from '@/lib/enums';
const { createId } = require("@paralleldrive/cuid2");


const generateToken = (id: string, role: Role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });
};

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();

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
      'INSERT INTO "User" (id, name, email, password, role, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [createId(), name, email, hashedPassword, Role.USER, Status.Active]
    );

    const user = result.rows[0] as User;

    if (user) {
      const response = NextResponse.json({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id, user.role as Role),
      }, { status: 201 });

      return response;
    } else {
      return NextResponse.json({ message: 'Invalid user data' }, { status: 400 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
