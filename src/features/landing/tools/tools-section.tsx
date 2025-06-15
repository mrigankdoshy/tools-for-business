'use client';

import { ToolsList } from '@/features/landing/tools/tools-list';
import { buttonVariants } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn';
import { useMediaQuery } from '@/shared/utils/use-media-query';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function ToolsSection() {
  const isSmallScreen = useMediaQuery(640);

  return (
    <section id="tools">
      <div className="mx-auto flex max-w-(--breakpoint-lg) flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto grid flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ToolsList
            limit={isSmallScreen ? 6 : 24}
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
