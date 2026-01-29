const { Client } = require("pg");
const bcrypt = require("bcryptjs");
const { createId } = require("@paralleldrive/cuid2");
require("dotenv").config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function createAdminUser() {
  try {
    await client.connect();

    // Check if admin already exists
    const existingAdmin = await client.query(
      'SELECT id FROM "User" WHERE role = $1',
      ["ADMIN"]
    );
    if (existingAdmin.rows.length > 0) {
      console.log("Admin user already exists!");
      return;
    }

    // Get admin details from command line arguments or use defaults
    const name = process.argv[2] || "Admin User";
    const email = process.argv[3] || "admin@autobon.com";
    const password = process.argv[4] || "admin123";

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate cuid for id
    const id = createId();

    // Insert admin user
    const result = await client.query(
      'INSERT INTO "User" (id, name, email, password, "profilePhoto", role, status, "joinedDate", "createdAt", "updatedAt") VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW(), NOW()) RETURNING id, name, email, role',
      [id, name, email, hashedPassword, null, "ADMIN", "Active"]
    );

    console.log("Admin user created successfully!");
    console.log("Details:", result.rows[0]);
    console.log("Password:", password);
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    await client.end();
  }
}

createAdminUser();
