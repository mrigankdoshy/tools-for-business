'use client';

import type { Tool } from '@/db/schema';
import { Card } from '@/shared/ui/card';
import { useOnClickOutside } from '@/shared/utils/use-on-click-outside';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
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
    <motion.div
      ref={ref}
      layoutId={`card-${tool.id}`}
      onClick={onClick}
      className={`cursor-pointer ${isActive ? 'fixed inset-0 z-50 grid place-items-center overflow-auto p-4' : ''}`}
    >
      <Card
        className={`group relative flex transform flex-col text-primary no-underline shadow-sm transition duration-300 ${
          isActive
            ? 'h-full w-full max-w-[500px] overflow-hidden sm:h-fit sm:max-h-[90%]'
            : 'hover:scale-[1.01]'
        }`}
        gradientColor={
          theme === 'dark' ? 'rgba(211, 14, 233, 0.15)' : '#D9D9D955'
        }
      >
        <motion.div layoutId={`image-${tool.id}`}>
          <ImagePlaceholder isActive={isActive} />
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
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Additional details about {tool.name}
                </p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn More
                </a>
              </div>
              <div className="relative pt-4">
                <div className="h-40 overflow-auto pb-10 text-xs text-muted-foreground [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:h-fit md:text-sm lg:text-base">
                  <p>
                    Here you can add more detailed information about the tool,
                    its features, use cases, or any other relevant content. This
                    content will only be visible when the card is expanded.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </Card>
    </motion.div>
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
