import { NextRequest, NextResponse } from 'next/server';
import { query, User } from '@/lib/db';
import { Role } from '@/lib/enums';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await query('SELECT id, name, email, "profilePhoto", role, status, "joinedDate", "createdAt", "updatedAt" FROM "User" WHERE id = $1', [id]);

    if (result.rows.length > 0) {
      return NextResponse.json(result.rows[0]);
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { name, email, profilePhoto, role, status } = await request.json();
    const { id } = await params;
    const userId = id;

    // Check if user exists
    const existingUser = await query('SELECT * FROM "User" WHERE id = $1', [userId]);
    if (existingUser.rows.length === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Only admin can update role and status
    if (role !== existingUser.rows[0].role || status !== existingUser.rows[0].status) {
      // Note: In Next.js API routes, we need to handle auth differently
      // For now, assuming auth is handled elsewhere
    }

    // Update user
    const result = await query(
      'UPDATE "User" SET name = $1, email = $2, "profilePhoto" = $3, role = $4, status = $5 WHERE id = $6 RETURNING id, name, email, "profilePhoto", role, status, "joinedDate", "createdAt", "updatedAt"',
      [
        name || existingUser.rows[0].name,
        email || existingUser.rows[0].email,
        profilePhoto || existingUser.rows[0].profilePhoto,
        role || existingUser.rows[0].role,
        status || existingUser.rows[0].status,
        userId
      ]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }:  { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const userId = id;

    // Check if user exists
    const existingUser = await query('SELECT id FROM "User" WHERE id = $1', [userId]);
    if (existingUser.rows.length === 0) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Delete user
    await query('DELETE FROM "User" WHERE id = $1', [userId]);
    return NextResponse.json({ message: 'User removed' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
