import { db } from '@/db';
import { Tool, tools } from '@/db/schema';
import { PaginatedTools } from '@/features/landing/tools/types';
import { asc } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    const toolResults: Tool[] = await db
      .select()
      .from(tools)
      .orderBy(asc(tools.name))
      .limit(limit)
      .offset(offset);

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
