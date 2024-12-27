'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { MouseEvent } from 'react';

import { cn } from '@/lib/utils';

import { useTools } from '@/components/tools/use-tools';

import { Skeleton } from '@/shared/ui/skeleton';

export function Tools() {
  const { data: tools, isLoading, error } = useTools();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundStyle = useMotionTemplate`
    radial-gradient(
      650px circle at ${mouseX}px ${mouseY}px,
      rgba(211, 14, 233, 0.15),
      transparent 80%
    )
  `;

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  if (isLoading || !tools) {
    return (
      <div className="mx-auto grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading tools. Please try again later.
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {tools.map((tool) => (
        <div
          key={tool.id}
          className={cn(
            'group relative max-w-[400px] rounded-2xl border border-white/10 px-2 py-6 shadow-2xl'
          )}
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{ background: backgroundStyle }}
          />

          <div className="flex items-center">
            <div className="ml-4">
              <h2 className="text-base font-semibold leading-7 my-2">
                {tool.name}
              </h2>
              <p className="h-16 text-sm leading-5 text-black/70 dark:text-white">
                {tool.description}
              </p>
            </div>
          </div>
          <a
            href={tool.link}
            className="ml-4 flex items-center gap-2 text-sm font-medium"
          >
            Learn more
            <ChevronRight className="w-4" />
          </a>
        </div>
      ))}
    </div>
  );
}
