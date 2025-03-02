'use client';

import { ToolsList } from '@/features/landing/tools/tools-list';
import { AnimatedTabs, type Tab } from '@/shared/ui/animated-tabs';
import { buttonVariants } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { cn } from '@/shared/utils/cn';
import { useDebounce } from '@/shared/utils/use-debounce';
import { useMediaQuery } from '@/shared/utils/use-media-query';
import { motion } from 'framer-motion';
import { ChevronRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const FILTERS: Tab[] = [
  { id: 'all', label: 'All' },
  { id: 'development', label: 'Development' },
  { id: 'generative', label: 'Generative' },
  { id: 'language', label: 'Language' },
  { id: 'writing', label: 'Writing' },
];

export function ToolsSection() {
  const isSmallScreen = useMediaQuery(640);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <section id="tools">
      <div className="mx-auto flex max-w-(--breakpoint-lg) flex-col gap-8 px-4 py-14 md:px-8">
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
            {!searchTerm && (
              <Search className="text-muted-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 transform" />
            )}
          </motion.div>
          <div className="no-scrollbar overflow-x-auto">
            <AnimatedTabs tabs={FILTERS} />
          </div>
        </motion.div>
        <div className="mx-auto grid flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ToolsList
            limit={isSmallScreen ? 6 : 24}
            searchTerm={debouncedSearchTerm}
            scrollDisabled={isSmallScreen}
          />
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
    </section>
  );
}
