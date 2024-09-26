'use client';

import { CalendarHeart, Loader } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import AnimatedIcons from '@/components/landing/animated-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CallToActionSection() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubscribeClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

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
                <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] text-3xl font-bold lg:text-4xl dark:from-white dark:to-white/40">
                  The Focal Lab Digest
                </h1>
                <p className="mt-2">
                  Get the tea 🍵 on tools, micro-businesses, and 0-1 stories!
                </p>
                <div className="flex gap-2 justify-center mt-8 max-w-md w-full">
                  <Input
                    placeholder="Enter your email"
                    className="flex-grow basis-0"
                  />
                  <Button
                    className={cn(
                      'group relative overflow-hidden tracking-tighter flex-shrink-0',
                      'hover:ring-primary transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2'
                    )}
                    disabled={isLoading}
                    onClick={onSubscribeClick}
                    style={{ width: isLoading ? '120px' : '100px' }}
                  >
                    <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <p>Subscribing</p>
                        <Loader className="h-4 w-4 animate-spin" />
                      </div>
                    ) : (
                      <p>Subscribe</p>
                    )}
                  </Button>
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
