import { useInfiniteQuery } from '@tanstack/react-query';

type UseToolsParams = Readonly<{
  limit: number;
}>;

export function useTools({ limit }: UseToolsParams) {
  return useInfiniteQuery({
    queryKey: ['tools'],
    queryFn: async ({ pageParam = 0 }) => {
      const response = await fetch(
        `/api/tools?limit=${limit}&offset=${pageParam}`
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
