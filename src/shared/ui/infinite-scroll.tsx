'use client';

import { LoaderCircle } from 'lucide-react';
import { ReactNode, useEffect, useRef } from 'react';

type InfiniteScrollProps = {
  children: ReactNode;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  disabled?: boolean;
  fetchNextPage: () => void;
};

export function InfiniteScroll({
  children,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  disabled,
  fetchNextPage,
}: InfiniteScrollProps) {
  const observerElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disabled) {
      return;
    }

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
      rootMargin: '100px',
      threshold: 0,
    });

    if (observerElement.current) {
      observer.observe(observerElement.current);
    }

    return () => observer.disconnect();
  }, [isFetchingNextPage, isLoading, hasNextPage, fetchNextPage, disabled]);

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
