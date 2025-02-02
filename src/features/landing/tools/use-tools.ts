import type { Tool } from '@/db/schema';
import { useQuery } from '@tanstack/react-query';

export function useTools() {
  return useQuery<Tool[]>({
    queryKey: ['tools'],
    queryFn: async () => {
      const response = await fetch('/api/tools');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });
}
