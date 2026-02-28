import { integer, pgTable, varchar, boolean, timestamp, text, serial } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),

  password: text().notNull(),

  emailVerified: boolean().default(false).notNull(),

  verificationToken: text(),
  resetToken: text(),
  resetTokenExpiry: timestamp(),

  createdAt: timestamp().defaultNow().notNull(),
});

export const decksTable = pgTable("decks", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => usersTable.id, { onDelete: 'cascade' }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const cardsTable = pgTable("cards", {
  id: serial("id").primaryKey(),
  deckId: integer("deck_id").references(() => decksTable.id, { onDelete: 'cascade' }).notNull(),
  question: text("question").notNull(),
  answer: text("answer").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});