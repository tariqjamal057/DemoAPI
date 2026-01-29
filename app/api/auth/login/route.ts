import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query, User } from '@/lib/db';
import { Role } from '@/lib/enums';

const generateToken = (id: string, role: Role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });
};

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Please enter all fields' }, { status: 400 });
    }

    const result = await query('SELECT * FROM "User" WHERE email = $1', [email]);
    const user = result.rows[0] as User | undefined;

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const token = generateToken(user.id, user.role as any);

    const response = NextResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });

    // Set the token in an HTTP-only cookie
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
