import { NextRequest, NextResponse } from 'next/server';
import { query, User } from '@/lib/db';
import jwt from 'jsonwebtoken';

// Helper function to get user from token
async function getUserFromToken(request: NextRequest): Promise<User | null> {
    try {
        const token = request.cookies.get('token')?.value;

        if (!token) {
            return null;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
        const result = await query('SELECT * FROM "User" WHERE id = $1', [decoded.id]);

        return result.rows[0] as User || null;
    } catch (error) {
        return null;
    }
}

// Helper function to split name into first, middle, last
function splitName(name: string) {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
        return { firstName: parts[0], middleName: '', lastName: '' };
    } else if (parts.length === 2) {
        return { firstName: parts[0], middleName: '', lastName: parts[1] };
    } else {
        return { firstName: parts[0], middleName: parts.slice(1, -1).join(' '), lastName: parts[parts.length - 1] };
    }
}

// Helper function to combine names
function combineNames(firstName: string, middleName: string, lastName: string): string {
    const parts = [firstName, middleName, lastName].filter(part => part.trim() !== '');
    return parts.join(' ');
}

// GET /api/accounts/profile - Get user profile
export async function GET(request: NextRequest) {
    try {
        const user = await getUserFromToken(request);

        if (!user) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { firstName, middleName, lastName } = splitName(user.name);

        const profile = {
            firstName,
            middleName,
            lastName,
            phone: user.phone || '',
            dob: user.dob ? user.dob.toISOString().split('T')[0] : '',
            address: user.address || '',
            email: user.email,
            profilePhoto: user.profilePhoto,
            joinedDate: user.joinedDate,
        };

        return NextResponse.json(profile);
    } catch (error) {
        console.error('Profile fetch error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}

// PUT /api/accounts/profile - Update user profile
export async function PUT(request: NextRequest) {
    try {
        const user = await getUserFromToken(request);

        if (!user) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { firstName, middleName, lastName, phone, dob, address } = await request.json();

        // Validate required fields
        if (!firstName || !lastName) {
            return NextResponse.json({ message: 'First name and last name are required' }, { status: 400 });
        }

        // Combine names
        const fullName = combineNames(firstName, middleName || '', lastName);

        // Update user profile
        await query(
            'UPDATE "User" SET name = $1, phone = $2, dob = $3, address = $4, "updatedAt" = CURRENT_TIMESTAMP WHERE id = $5',
            [fullName, phone || null, dob || null, address || null, user.id]
        );

        return NextResponse.json({ message: 'Profile updated successfully' });
    } catch (error) {
        console.error('Profile update error:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
