import { db } from '@/db';
import { tools } from '@/db/schema';
import type { EnhancedTool } from '@/features/landing/hero/types';
import { desc, eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get top 5 unique categories
    const topCategories = await db
      .select({ category: tools.category })
      .from(tools)
      .groupBy(tools.category)
      .orderBy(tools.category)
      .limit(5);

    const categories = topCategories.map(({ category }) => category);

    // From each category, select the latest tool
    const toolsByCategory = await Promise.all(
      categories.map((category) =>
        db
          .select()
          .from(tools)
          .where(eq(tools.category, category))
          .orderBy(desc(tools.createdAt))
          .limit(1)
      )
    );

    const diverseSuggestions = toolsByCategory.flat();

    // If not enough, fallback to recent tools
    if (diverseSuggestions.length >= 5) {
      return NextResponse.json(diverseSuggestions as EnhancedTool[]);
    }

    const recentSuggestions = await db
      .select()
      .from(tools)
      .orderBy(desc(tools.createdAt))
      .limit(5);

    return NextResponse.json(recentSuggestions as EnhancedTool[]);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch suggestions: ${error}` },
      { status: 500 }
    );
  }
}
