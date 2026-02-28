"use server";

import { db } from "@/lib/db";
import { decksTable, usersTable } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";

export async function createDeckAction(formData: FormData) {
  const name = formData.get("name") as string;

  if (!name) return;

  try {
    const allUsers = await db.select().from(usersTable).limit(1);
    const activeUserId = allUsers[0]?.id;

    if (!activeUserId) throw new Error("No user found");

    await db.insert(decksTable).values({
      name: name.trim(),
      userId: activeUserId,
    });

    revalidatePath("/dashboard");
  } catch (err) {
    console.error("Create Error:", err);
    return;
  }

  redirect("/dashboard");
}

export async function deleteDeckAction(formData: FormData) {
  const deckId = Number(formData.get("deckId"));
  if (!deckId) return;

  try {
    await db.delete(decksTable).where(eq(decksTable.id, deckId));
    revalidatePath("/dashboard");
  } catch (err) {
    console.error("Delete Error:", err);
  }
}