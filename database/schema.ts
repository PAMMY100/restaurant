import { uuid, varchar, integer, text, boolean, pgTable, pgEnum, timestamp } from "drizzle-orm/pg-core";


export const ORDER_STATUS_ENUM = pgEnum('status', ['PENDING', 'APPROVED'])
export const HOUSE_STATUS = pgEnum('house_status', ['AVAILABLE', 'SOLD', 'RENTED'])

export const users = pgTable("users", {
  id: uuid('id').notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar('full_name', {length: 255}).notNull(),
  email: text('email').notNull().unique(),
  phone: text('phone').notNull(),
  password: text('password').notNull(),
  address: text('address').notNull(),
  createdAt: timestamp('created_at', {withTimezone: true,}).defaultNow(),
  lastLogin: timestamp('last_login', {withTimezone: true}),
});
 