'use client';

import { LoaderCircle } from 'lucide-react';
import { ReactNode, useEffect, useRef } from 'react';

type InfiniteScrollProps = {
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  children: ReactNode;
  fetchNextPage: () => void;
};

export function InfiniteScroll({
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  children,
  fetchNextPage,
}: InfiniteScrollProps) {
  const observerElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          (!isFetchingNextPage || !isLoading) &&
          hasNextPage
        ) {
          fetchNextPage();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '300px',
      threshold: 0,
    });

    if (observerElement.current) {
      observer.observe(observerElement.current);
    }

    return () => observer.disconnect();
  }, [isFetchingNextPage, isLoading, hasNextPage, fetchNextPage]);

  return (
    <>
      {children}
      <div ref={observerElement} id="observer">
        {isFetchingNextPage && !isLoading && (
          <div className="flex h-20 items-center justify-center">
            <LoaderCircle className="animate-spin" />
          </div>
        )}
      </div>
    </>
  );
}
