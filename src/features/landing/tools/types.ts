import { Tool } from '@/db/schema';

export type PaginatedTools = Readonly<{
  tools: Tool[];
  hasMore: boolean;
}>;
