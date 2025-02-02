'use client';

import { Tools } from '@/features/landing/tools/tools';
import { buttonVariants } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function ToolsSection() {
  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Build your tool kit.
          </h2>

          <p className="mt-6 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
            92% of builders spend over 5 hours finding tools, be the 8%.
          </p>
        </div>
        <Tools />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 text-center md:px-8">
        <Link
          href="#"
          className={cn(
            buttonVariants({
              size: 'lg',
              variant: 'outline',
            }),
            'group mt-4 rounded-[2rem] px-6'
          )}
        >
          Explore All Tools
          <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
