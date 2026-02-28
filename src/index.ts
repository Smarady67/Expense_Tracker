import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';

const db = drizzle(process.env.DATABASE_URL!);

async function testConnection() {
  try {
    const result = await db.execute('SELECT NOW()');
    console.log("✅ Database connected:", result);
  } catch (error) {
    console.error("❌ Connection failed:", error);
  }
}

testConnection();
