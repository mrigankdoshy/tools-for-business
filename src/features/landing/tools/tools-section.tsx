'use client';

import { ToolCard } from '@/features/landing/tools/tool-card';
import { useTools } from '@/features/landing/tools/use-tools';
import { AnimatedTabs, type Tab } from '@/shared/ui/animated-tabs';
import { buttonVariants } from '@/shared/ui/button';
import { InfiniteScroll } from '@/shared/ui/infinite-scroll';
import { Input } from '@/shared/ui/input';
import { Skeleton } from '@/shared/ui/skeleton';
import { cn } from '@/shared/utils/cn';
import { useMediaQuery } from '@/shared/utils/use-media-query';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { MouseEvent, useEffect, useRef, useState } from 'react';

const tabs: Tab[] = [
  { id: 'all', label: 'All' },
  { id: 'development', label: 'Development' },
  { id: 'generative', label: 'Generative' },
  { id: 'language', label: 'Language' },
  { id: 'writing', label: 'Writing' },
];

export function ToolsSection() {
  const isSmallScreen = useMediaQuery(640);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useTools({ limit: isSmallScreen ? 6 : 24 });

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      setActiveTool(null);
    }
  };

  useEffect(() => {
    if (activeTool) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeTool]);

  if (isLoading || !data) {
    return (
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 px-4 py-14 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
        {[...Array(9)].map((_, i) => (
          <Skeleton key={i} className="h-[280px] rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-destructive">
        Error loading tools. Please try again later.
      </div>
    );
  }

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-8 px-4 py-14 md:px-8">
        <motion.div
          className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.div
            className="relative w-full sm:max-w-xs"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          >
            <Input
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          </motion.div>
          <div className="no-scrollbar overflow-x-auto">
            <AnimatedTabs tabs={tabs} />
          </div>
        </motion.div>
        <div className="mx-auto grid flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <InfiniteScroll
            isLoading={isLoading}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            disabled={isSmallScreen}
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
        </div>
      </div>
      {isSmallScreen && (
        <motion.div
          className="relative mx-auto px-6 text-center md:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        >
          <Link
            href="#"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'group mt-4 rounded-[2rem] px-6'
            )}
          >
            Explore All Tools
            <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </motion.div>
      )}
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
    </section>
  );
}
