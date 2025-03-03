'use client';

import { ToolCard } from '@/features/landing/tools/tool-card';
import { useTools } from '@/features/landing/tools/use-tools';
import { InfiniteScroll } from '@/shared/ui/infinite-scroll';
import { Skeleton } from '@/shared/ui/skeleton';
import { AnimatePresence, motion } from 'framer-motion';
import { MouseEvent, useRef, useState } from 'react';

type ToolsListProps = Readonly<{
  limit: number;
  searchTerm: string;
  scrollDisabled: boolean;
}>;

export function ToolsList({
  limit,
  searchTerm,
  scrollDisabled,
}: ToolsListProps) {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useTools({ limit, searchTerm });

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      setActiveTool(null);
    }
  };

  if (isLoading || !data) {
    return [...Array(9)].map((_, i) => (
      <Skeleton key={i} className="h-[280px] rounded-xl" />
    ));
  }

  if (error) {
    return (
      <div className="text-destructive text-center">
        Error loading tools. Please try again later.
      </div>
    );
  }

  return (
    <>
      <InfiniteScroll
        isLoading={isLoading}
        isFetchingNextPage={isFetchingNextPage}
        hasNextPage={hasNextPage}
        disabled={scrollDisabled}
        fetchNextPage={fetchNextPage}
      >
        {data?.pages.map((page) =>
          page.tools.map((tool, itemIndex) => (
            <motion.div
              key={tool.id}
              className="col-span-1"
              initial={{ opacity: 0, x: -20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -10, y: -10 }}
              transition={{
                type: 'spring',
                duration: 0.3,
                stiffness: 100,
                delay: itemIndex * 0.1,
              }}
            >
              <ToolCard
                tool={tool}
                onClick={() => setActiveTool(tool.id)}
                onClose={() => setActiveTool(null)}
                isActive={activeTool === tool.id}
              />
            </motion.div>
          ))
        )}
      </InfiniteScroll>
      <AnimatePresence>
        {activeTool && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50"
            onClick={handleOverlayClick}
          />
        )}
      </AnimatePresence>
    </>
  );
}
