import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;

// Helper function to execute queries
export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}

// User type definition
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  profilePhoto?: string;
  phone?: string;
  dob?: Date;
  address?: string;
  role: 'ADMIN' | 'USER';
  status: 'Active' | 'Banned';
  joinedDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
