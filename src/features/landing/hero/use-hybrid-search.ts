import { EnhancedTool } from '@/features/landing/hero/types';
import { useQuery } from '@tanstack/react-query';

type UseHybridSearchParams = Readonly<{
  query: string;
  enabled?: boolean;
}>;

export function useHybridSearch({
  query,
  enabled = true,
}: UseHybridSearchParams) {
  return useQuery<EnhancedTool[]>({
    queryKey: ['hybrid-search', query],
    queryFn: async () => {
      if (!query.trim()) {
        return [];
      }

      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
    enabled: enabled && query.length > 0,
    staleTime: 10000,
  });
}
