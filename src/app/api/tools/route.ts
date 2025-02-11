import { db } from '@/db';
import { tools } from '@/db/schema';
import { asc } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const allTools = await db.select().from(tools).orderBy(asc(tools.name));
    return NextResponse.json(allTools);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch tools: ${error}` },
      { status: 500 }
    );
  }
}
