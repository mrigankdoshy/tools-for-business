import { EnhancedTool } from '@/features/landing/hero/types';
import { useQuery } from '@tanstack/react-query';

export function useSuggestions({ enabled = true }: { enabled?: boolean }) {
  return useQuery<EnhancedTool[]>({
    queryKey: ['suggestions'],
    queryFn: async () => {
      const response = await fetch('/api/suggestions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    },
    enabled,
    staleTime: 60000,
  });
}
