import { db } from '@/db';
import { tools } from '@/db/schema';
import { generateEmbedding } from '@/lib/openai';
import { eq } from 'drizzle-orm';

export async function createToolWithEmbedding(data: {
  name: string;
  shortDescription: string;
  longDescription: string;
  externalLink: string;
  imageUrl: string;
  pricing: string;
  category: string;
}) {
  const embeddingText = [
    data.name,
    data.shortDescription,
    data.longDescription,
    data.category,
    data.pricing,
  ].join(' ');

  const embedding = await generateEmbedding(embeddingText);

  const [tool] = await db
    .insert(tools)
    .values({
      ...data,
      embedding,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    })
    .returning();

  return tool;
}

export async function updateToolWithEmbedding(
  id: string,
  data: Partial<{
    name: string;
    shortDescription: string;
    longDescription: string;
    externalLink: string;
    imageUrl: string;
    pricing: string;
    category: string;
  }>
) {
  const regenerateEmbedding =
    data.name ||
    data.shortDescription ||
    data.longDescription ||
    data.category ||
    data.pricing;

  let embedding;

  if (regenerateEmbedding) {
    const [currentTool] = await db.select().from(tools).where(eq(tools.id, id));

    if (!currentTool) throw new Error('Tool not found');

    const embeddingText = [
      data.name || currentTool.name,
      data.shortDescription || currentTool.shortDescription,
      data.longDescription || currentTool.longDescription,
      data.category || currentTool.category,
      data.pricing || currentTool.pricing,
    ].join(' ');

    embedding = await generateEmbedding(embeddingText);
  }

  const [updatedTool] = await db
    .update(tools)
    .set({ ...data, ...(embedding && { embedding }) })
    .where(eq(tools.id, id))
    .returning();

  return updatedTool;
}
