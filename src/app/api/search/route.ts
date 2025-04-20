import { db } from '@/db';
import { tools } from '@/db/schema';
import { EnhancedTool, SearchResult } from '@/features/landing/hero/types';
import { generateEmbedding } from '@/lib/openai';
import { sql } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json<EnhancedTool[]>([]);
    }

    if (query.trim().length < 2) {
      const fallback = await db
        .select()
        .from(tools)
        .where(sql`${tools.name} ILIKE ${'%' + query + '%'}`)
        .limit(10);
      return NextResponse.json(fallback);
    }

    const embedding = await generateEmbedding(query);

    const results = await db.execute<SearchResult>(
      sql`
        SELECT * FROM hybrid_tool_search(
          ${query}::text,
          ${sql.raw(`'[${embedding.join(',')}]'::vector`)},
          ${10}::int,
          ${1.0}::float,
          ${1.5}::float,
          ${0.3}::float
        )
      `
    );

    if (results.length === 0) {
      const fallback = await db
        .select()
        .from(tools)
        .where(sql`${tools.name} ILIKE ${'%' + query + '%'}`)
        .limit(5);
      return NextResponse.json(fallback);
    }

    const toolIds = results.map((row) => row.id);

    const fullTools = await db
      .select()
      .from(tools)
      .where(
        sql`${tools.id} = ANY(${sql.raw(`ARRAY[${toolIds.map((id) => `'${id}'`).join(', ')}]`)}::uuid[])`
      );

    const toolMap = new Map(fullTools.map((tool) => [tool.id, tool]));

    const enhancedTools: EnhancedTool[] = results
      .map((searchResult) => {
        const tool = toolMap.get(searchResult.id);
        if (!tool) {
          return undefined;
        }
        return { ...tool, similarity: searchResult.similarity };
      })
      .filter((tool): tool is EnhancedTool => tool !== undefined);

    return NextResponse.json(enhancedTools);
  } catch (error) {
    return NextResponse.json(
      { error: `Search error: ${error}` },
      { status: 500 }
    );
  }
}
