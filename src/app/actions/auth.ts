"use server";

import { db } from "@/lib/db";         
import { usersTable } from "@/db/schema"; 
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

// 1. SIGNUP
export async function registerUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.insert(usersTable).values({
      name,
      email,
      password: hashedPassword,
      emailVerified: false,
    });
    return { success: "Account created!" };
  } catch (err) {
    return { error: "Signup failed." };
  }
}

// 2. LOGIN (Fixes Error #1)
export async function loginUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
    if (!user) return { error: "Invalid email or password." };

    const match = await bcrypt.compare(password, user.password);
    if (!match) return { error: "Invalid email or password." };

    return { success: "Logged in!" };
  } catch (err) {
    return { error: "An error occurred." };
  }
}

// 3. FORGOT PASSWORD CHECK
export async function checkEmailAction(formData: FormData) {
  const email = formData.get("email") as string;
  try {
    const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
    if (!user) return { error: "Email not found." };
    return { success: true };
  } catch (err) {
    return { error: "Error checking email." };
  }
}

// 4. RESET PASSWORD 
export async function resetPasswordAction(formData: FormData) {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const email = "test@example.com"; 

  if (password !== confirmPassword) return { error: "Passwords do not match." };

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.update(usersTable).set({ password: hashedPassword }).where(eq(usersTable.email, email));
    return { success: "Password updated!" };
  } catch (err) {
    return { error: "Failed to update password." };
  }
}