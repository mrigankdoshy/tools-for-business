'use client';

import { CalendarHeart } from 'lucide-react';

import { AnimatedIcons } from '@/features/landing/cta/animated-icons';
import { CallToActionTitle } from '@/features/landing/cta/cta-title';
import { SubscribeButton } from '@/features/landing/cta/subscribe-button';

import { Input } from '@/shared/ui/input';

export function CallToActionSection() {
  return (
    <section id="cta">
      <div className="py-14">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <AnimatedIcons />
            <div className="absolute z-10">
              <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md lg:size-32 dark:bg-black/10">
                <CalendarHeart className="mx-auto size-16 text-black lg:size-24 dark:text-white" />
              </div>
              <div className="text-primary z-10 mt-4 flex flex-col items-center text-center">
                <CallToActionTitle />
                <div className="flex gap-2 justify-center mt-8 max-w-md w-full">
                  <Input
                    placeholder="Enter your email"
                    className="flex-grow basis-0"
                  />
                  <SubscribeButton />
                </div>
              </div>
              <div className="bg-backtround dark:bg-background absolute inset-0 -z-10 rounded-full opacity-40 blur-xl" />
            </div>
            <div className="to-backtround dark:to-background absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70%" />
          </div>
        </div>
      </div>
    </section>
  );
}
