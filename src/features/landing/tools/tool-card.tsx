'use client';

import type { Tool } from '@/db/schema';
import { CONTENT_1, CONTENT_2 } from '@/features/landing/tools/mocked-data';
import { buttonVariants } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { cn } from '@/shared/utils/cn';
import { useOnClickOutside } from '@/shared/utils/use-on-click-outside';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

type ToolCardProps = Readonly<{
  tool: Tool;
  isActive: boolean;
  onClick: () => void;
  onClose: () => void;
}>;

export function ToolCard({ tool, isActive, onClick, onClose }: ToolCardProps) {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, onClose);

  return (
    <>
      <motion.div
        layoutId={`card-${tool.id}`}
        onClick={onClick}
        className="cursor-pointer"
      >
        <Card
          className="group relative flex transform flex-col text-primary no-underline shadow-sm transition duration-300"
          gradientColor={
            theme === 'dark' ? 'rgba(211, 14, 233, 0.15)' : '#D9D9D955'
          }
        >
          <motion.div layoutId={`image-${tool.id}`}>
            <ImagePlaceholder isActive={false} />
          </motion.div>
          <div className="flex flex-col gap-2 p-4">
            <motion.h2
              layoutId={`title-${tool.id}`}
              className="font-semibold leading-7"
            >
              {tool.name}
            </motion.h2>
            <motion.p
              layoutId={`description-${tool.id}`}
              className="text-sm leading-5 text-muted-foreground"
            >
              {tool.description}
            </motion.p>
          </div>
        </Card>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.div
              layoutId={`card-${tool.id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden border border-border bg-background sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${tool.id}`}>
                <ImagePlaceholder isActive />
              </motion.div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between p-4">
                  <div className="flex flex-col gap-2">
                    <motion.h1
                      layoutId={`title-${tool.id}`}
                      className="text-md font-semibold"
                    >
                      {tool.name}
                    </motion.h1>
                    <motion.h2
                      layoutId={`description-${tool.id}`}
                      className="text-sm text-muted-foreground"
                    >
                      {tool.description}
                    </motion.h2>
                  </div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                      buttonVariants({ size: 'lg', variant: 'default' }),
                      'rounded-full px-4 py-2 font-semibold'
                    )}
                  >
                    <Link
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
                <div className="relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-sm text-muted-foreground [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit"
                  >
                    <p>{CONTENT_1}</p>
                    <p>{CONTENT_2}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function ImagePlaceholder({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center bg-secondary/40 ${
        isActive ? 'h-80 sm:rounded-tl-lg sm:rounded-tr-lg' : 'h-48 rounded-lg'
      }`}
    >
      <Image
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 18' fill='currentColor'%3E%3Cpath d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z'/%3E%3C/svg%3E"
        alt="Placeholder"
        width={40}
        height={40}
        className="opacity-50"
      />
    </div>
  );
}
