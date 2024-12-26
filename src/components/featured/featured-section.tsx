'use client';

import { useState } from 'react';

import { FeaturedTools } from '@/components/featured/featured-tools';
import { Switch } from '@/components/ui/switch';

export type Interval = 'month' | 'year';

export function FeaturedSection() {
  const [interval, setInterval] = useState<Interval>('month');
  return (
    <section id="featured-tools">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold tracking-tight text-black sm:text-6xl dark:text-white">
            Exclusive discounts to <br className="hidden md:block" /> start
            building.
          </h2>

          <p className="animate-fade-in mt-6 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
            Choose an <strong>affordable tool</strong> from our recommendations
            that&apos;s packed with the best features for your project.
          </p>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked) =>
              setInterval(checked ? 'year' : 'month')
            }
          />
          <p>Annual</p>
          <p className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            2 MONTHS FREE ✨
          </p>
        </div>
        <FeaturedTools interval={interval} />
      </div>
    </section>
  );
}
