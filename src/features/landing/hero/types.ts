import { Tool } from '@/db/schema';

export type SearchResult = Readonly<{
  id: string;
  name: string;
  short_description: string;
  category: string;
  similarity: number;
  rank: number;
}>;

export type EnhancedTool = Readonly<
  Tool & {
    similarity: number;
  }
>;
