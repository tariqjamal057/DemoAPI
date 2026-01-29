import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { query } from '@/lib/db';

interface NotificationSettings {
  smsNotification: boolean;
  carUpdateValue: boolean;
  newVehicleAlerts: boolean;
  priceDropAlerts: boolean;
}

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    } catch (error) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }

    const result = await query(
      'SELECT "smsNotification", "carUpdateValue", "newVehicleAlerts", "priceDropAlerts" FROM "User" WHERE id = $1',
      [decoded.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    const notifications: NotificationSettings = {
      smsNotification: result.rows[0].smsNotification ?? true,
      carUpdateValue: result.rows[0].carUpdateValue ?? true,
      newVehicleAlerts: result.rows[0].newVehicleAlerts ?? true,
      priceDropAlerts: result.rows[0].priceDropAlerts ?? true,
    };

    return NextResponse.json(notifications);
  } catch (error) {
    console.error('Get notifications error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    } catch (error) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401 }
      );
    }

    const body: Partial<NotificationSettings> = await request.json();

    const updateFields = [];
    const values = [];
    let paramIndex = 1;

    if (body.smsNotification !== undefined) {
      updateFields.push(`"smsNotification" = $${paramIndex++}`);
      values.push(body.smsNotification);
    }
    if (body.carUpdateValue !== undefined) {
      updateFields.push(`"carUpdateValue" = $${paramIndex++}`);
      values.push(body.carUpdateValue);
    }
    if (body.newVehicleAlerts !== undefined) {
      updateFields.push(`"newVehicleAlerts" = $${paramIndex++}`);
      values.push(body.newVehicleAlerts);
    }
    if (body.priceDropAlerts !== undefined) {
      updateFields.push(`"priceDropAlerts" = $${paramIndex++}`);
      values.push(body.priceDropAlerts);
    }

    if (updateFields.length === 0) {
      return NextResponse.json(
        { message: 'No fields to update' },
        { status: 400 }
      );
    }

    values.push(decoded.id);
    const updateQuery = `UPDATE "User" SET ${updateFields.join(', ')} WHERE id = $${paramIndex}`;

    await query(updateQuery, values);

    return NextResponse.json({ message: 'Notifications updated successfully' });
  } catch (error) {
    console.error('Update notifications error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
