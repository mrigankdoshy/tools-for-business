import { useQuery } from '@tanstack/react-query';

import type { Tool } from '@/db/schema';

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
