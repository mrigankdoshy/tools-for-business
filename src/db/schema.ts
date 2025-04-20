import { pgTable, text, timestamp, uuid, vector } from 'drizzle-orm/pg-core';

export const tools = pgTable('tools', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  shortDescription: text('short_description').notNull(),
  longDescription: text('long_description').notNull(),
  externalLink: text('external_link').notNull(),
  imageUrl: text('image_url').notNull(),
  pricing: text('pricing').notNull(),
  category: text('category').notNull(),
  createdAt: timestamp('created_at').notNull(),
  embedding: vector('embedding', { dimensions: 1536 }),
});

export type Tool = typeof tools.$inferSelect;
