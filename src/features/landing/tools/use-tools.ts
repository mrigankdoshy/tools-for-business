import { PaginatedTools } from '@/features/landing/tools/types';
import { useInfiniteQuery } from '@tanstack/react-query';

type UseToolsParams = Readonly<{
  limit: number;
  searchTerm: string;
}>;

export function useTools({ limit, searchTerm }: UseToolsParams) {
  return useInfiniteQuery<PaginatedTools>({
    queryKey: ['tools', searchTerm],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await fetch(
        `/api/tools?limit=${limit}&offset=${pageParam}&search=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length * limit : null;
    },
  });
}
