import { numeric, pgTable, text, uuid } from 'drizzle-orm/pg-core';

// Tools table model
export const tools = pgTable('tools', {
  id: uuid('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  link: text('link').notNull(),
});

// Tiers table model (one tool can have multiple tiers)
export const tiers = pgTable('tiers', {
  id: uuid('id').primaryKey(),
  tool_id: uuid('tool_id')
    .references(() => tools.id, { onDelete: 'cascade' })
    .notNull(),
  name: text('name').notNull(),
  price: numeric('price').notNull(),
  description: text('description'),
});

// Features table model (each feature can be associated with multiple tiers)
export const features = pgTable('features', {
  id: uuid('id').primaryKey(),
  description: text('description').notNull(),
});

// Tier-Features join table (links tiers to features)
export const tier_features = pgTable(
  'tier_features',
  {
    tier_id: uuid('tier_id')
      .references(() => tiers.id, { onDelete: 'cascade' })
      .notNull(),
    feature_id: uuid('feature_id')
      .references(() => features.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (self) => ({
    primaryKey: [self.tier_id, self.feature_id],
  })
);

export type Tool = typeof tools.$inferSelect;
export type Tier = typeof tiers.$inferSelect;
export type Feature = typeof features.$inferSelect;
