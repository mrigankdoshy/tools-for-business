'use client';

import { AnimatedIcons } from '@/features/landing/cta/animated-icons';
import { CallToActionTitle } from '@/features/landing/cta/cta-title';
import { SubscribeButton } from '@/features/landing/cta/subscribe-button';
import { Input } from '@/shared/ui/input';
import { CalendarHeart } from 'lucide-react';

export function CallToActionSection() {
  return (
    <section id="cta">
      <div className="py-14">
        <div className="flex w-full flex-col items-center justify-center">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <AnimatedIcons />
            <div className="absolute z-10">
              <div className="mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md dark:bg-black/10 lg:size-32">
                <CalendarHeart className="mx-auto size-16 text-black dark:text-white lg:size-24" />
              </div>
              <div className="z-10 mt-4 flex flex-col items-center text-center text-primary">
                <CallToActionTitle />
                <div className="mt-8 flex w-full max-w-md justify-center gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="flex-grow basis-0"
                  />
                  <SubscribeButton />
                </div>
              </div>
              <div className="bg-backtround absolute inset-0 -z-10 rounded-full opacity-40 blur-xl dark:bg-background" />
            </div>
            <div className="to-backtround absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70% dark:to-background" />
          </div>
        </div>
      </div>
    </section>
  );
}
