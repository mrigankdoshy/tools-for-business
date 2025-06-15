'use client';

import { SearchForm } from '@/features/landing/hero/search-form';
import { FlipWords } from '@/shared/ui/flip-words';
import { TextShimmer } from '@/shared/ui/text-shimmer';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { LayoutGroup, motion } from 'motion/react';
import Link from 'next/link';

const words = ['AI tool', 'library', 'plugin'];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
    >
      <Link
        href="https://catalystai.beehiiv.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="group animate-fade-in border-primary/10 bg-primary/5 text-primary hover:bg-primary/10 inline-flex h-7 items-center justify-between gap-1 rounded-full border px-3 text-xs opacity-0 backdrop-filter-[12px] transition-all ease-in hover:cursor-pointer">
          <TextShimmer className="inline-flex items-center justify-center">
            <span>✨ Introducing a Weekly Newsletter</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </TextShimmer>
        </div>
      </Link>
      <h1 className="animate-fade-in from-primary via-primary/80 to-primary/40 bg-linear-to-br bg-clip-text py-6 text-5xl leading-none font-medium tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] md:text-6xl lg:text-7xl">
        <LayoutGroup>
          <motion.span layout>Find that </motion.span>
          <motion.span layout>
            <FlipWords words={words} /> <br />
          </motion.span>
          <motion.span layout> that works for you</motion.span>
        </LayoutGroup>
      </h1>
      <p className="text-md animate-fade-in text-muted-foreground mb-8 tracking-tight text-balance opacity-0 [--animation-delay:400ms] md:text-lg">
        Launch your startup in a day without code—we find the right tools for
        you so you can ship fast.
        <br className="hidden md:block" /> Stop waiting, create your idea now!
      </p>
      <SearchForm />
    </section>
  );
}
