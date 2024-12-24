import { desc } from 'drizzle-orm';
import { NextResponse } from 'next/server';

import { db } from '@/db';
import { tools } from '@/db/schema';

export async function GET() {
  try {
    const allTools = await db.select().from(tools).orderBy(desc(tools.id));
    return NextResponse.json(allTools);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch tools: ${error}` },
      { status: 500 }
    );
  }
}
