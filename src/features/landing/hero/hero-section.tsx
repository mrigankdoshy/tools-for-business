'use client';

import { Button } from '@/shared/ui/button';
import { FlipWords } from '@/shared/ui/flip-words';
import { Input } from '@/shared/ui/input';
import { TextShimmer } from '@/shared/ui/text-shimmer';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { LayoutGroup, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';

const words = ['AI tool', 'library', 'plugin'];

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality here
  };

  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
    >
      <div className="backdrop-filter-[12px] group inline-flex h-7 animate-fade-in items-center justify-between gap-1 rounded-full border border-primary/10 bg-primary/5 px-3 text-xs text-primary opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-primary/10">
        <TextShimmer className="inline-flex items-center justify-center">
          <span>✨ Introducing a Weekly Newsletter</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
      <h1 className="animate-fade-in bg-gradient-to-br from-primary via-primary/80 to-primary/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] md:text-6xl lg:text-7xl">
        <LayoutGroup>
          <motion.span layout>Find that </motion.span>
          <motion.span layout>
            <FlipWords words={words} /> <br />
          </motion.span>
          <motion.span layout> that works for you</motion.span>
        </LayoutGroup>
      </h1>
      <p className="text-md mb-8 animate-fade-in text-balance tracking-tight text-muted-foreground opacity-0 [--animation-delay:400ms] md:text-lg">
        Launch your startup in a day without code—we find the right tools for
        you so you can ship fast.
        <br className="hidden md:block" /> Stop waiting, create your idea now!
      </p>
      <motion.form
        onSubmit={handleSearch}
        className="mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="shadow-[var(--color-three)]/20 hover:shadow-[var(--color-three)]/30 relative flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[var(--color-three)] via-[var(--color-two)] to-[var(--color-three)] p-[1px] shadow-lg transition-all duration-300 hover:shadow-xl">
          <Input
            type="text"
            placeholder="Discover tools to supercharge your workflow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-md h-12 flex-grow rounded-l-lg border-none bg-background placeholder:text-muted-foreground/70 focus:text-muted-foreground/70 md:h-14"
          />
          <Button
            type="submit"
            variant="ghost"
            className="h-12 rounded-r-lg bg-transparent font-semibold text-primary-foreground transition-all hover:bg-white/10 md:h-14"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </motion.form>
    </section>
  );
}
