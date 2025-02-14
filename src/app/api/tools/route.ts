import { db } from '@/db';
import { tools } from '@/db/schema';
import { PaginatedTools } from '@/features/landing/tools/types';
import { asc, sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const searchTerm = searchParams.get('search') || '';
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    let toolResults;

    if (searchTerm) {
      toolResults = await db
        .select()
        .from(tools)
        .where(
          sql`to_tsvector('english', ${tools.name} || ' ' || ${tools.shortDescription}) @@ plainto_tsquery('english', ${searchTerm})`
        )
        .orderBy(asc(tools.name))
        .limit(limit)
        .offset(offset);
    } else {
      toolResults = await db
        .select()
        .from(tools)
        .orderBy(asc(tools.name))
        .limit(limit)
        .offset(offset);
    }

    const hasMore = toolResults.length === limit;

    return NextResponse.json({
      tools: toolResults,
      hasMore,
    } satisfies PaginatedTools);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch tools: ${error}` },
      { status: 500 }
    );
  }
}
