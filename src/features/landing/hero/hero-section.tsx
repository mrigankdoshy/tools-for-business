'use client';

import { Button } from '@/shared/ui/button';
import { TextShimmer } from '@/shared/ui/text-shimmer';
import { cn } from '@/shared/utils/cn';
import { useCycleWords } from '@/shared/utils/use-cycle-words';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

const words = ['AI tool', 'library', 'plugin'];

export function HeroSection() {
  const currentWord = useCycleWords(words);

  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
    >
      <div className="backdrop-filter-[12px] group inline-flex h-7 -translate-y-4 animate-fade-in items-center justify-between gap-1 rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-black">
        <TextShimmer className="inline-flex items-center justify-center">
          <span>✨ Introducing a Weekly Newsletter</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
      <h1 className="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
        <LayoutGroup>
          <motion.span layout>Find that </motion.span>
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="inline-block text-primary"
            >
              {currentWord}
            </motion.span>
          </AnimatePresence>
          <motion.span layout> that works for you</motion.span>
        </LayoutGroup>
      </h1>
      <p className="mb-12 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
        Launch your startup in a day without code—we find the right tools for
        you so you can ship fast.
        <br className="hidden md:block" /> Stop waiting, create your idea now!
      </p>
      <Button
        className={cn(
          'group relative gap-2 overflow-hidden tracking-tighter',
          'transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2'
        )}
      >
        <p>Explore Resources</p>
        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
    </section>
  );
}
