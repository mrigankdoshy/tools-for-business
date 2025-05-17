import type { Tool } from '@/db/schema';
import { ToolImage } from '@/features/landing/tools/tool-image';
import { buttonVariants } from '@/shared/ui/button';
import { GradientCard } from '@/shared/ui/gradient-card';
import { cn } from '@/shared/utils/cn';
import { useOnClickOutside } from '@/shared/utils/use-on-click-outside';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { memo, useRef } from 'react';

type ToolCardProps = Readonly<{
  tool: Tool;
  isActive: boolean;
  onClick: () => void;
  onClose: () => void;
}>;

function ToolCard({ tool, isActive, onClick, onClose }: ToolCardProps) {
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
        <GradientCard
          className="group text-primary relative flex transform flex-col no-underline shadow-xs transition duration-300"
          gradientColor={
            theme === 'dark' ? 'rgba(211, 14, 233, 0.15)' : '#D9D9D955'
          }
        >
          <motion.div layoutId={`image-${tool.id}`}>
            <ToolImage
              isActive={false}
              url={tool.imageUrl}
              toolName={tool.name}
            />
          </motion.div>
          <div className="flex flex-col gap-2 p-4">
            <motion.h2
              layoutId={`title-${tool.id}`}
              className="leading-7 font-semibold"
            >
              {tool.name}
            </motion.h2>
            <motion.p
              layoutId={`description-${tool.id}`}
              className="text-muted-foreground text-sm leading-5"
            >
              {tool.shortDescription}
            </motion.p>
          </div>
        </GradientCard>
      </motion.div>

      <AnimatePresence>
        {isActive && (
          <div className="fixed inset-0 z-100 grid place-items-center">
            <motion.div
              layoutId={`card-${tool.id}`}
              ref={ref}
              className="border-border bg-background flex h-full w-full max-w-[500px] flex-col overflow-hidden border sm:rounded-3xl md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${tool.id}`}>
                <ToolImage isActive url={tool.imageUrl} toolName={tool.name} />
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
                      className="text-muted-foreground text-sm"
                    >
                      {tool.shortDescription}
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
                      href={tool.externalLink}
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
                    className="text-muted-foreground flex h-40 flex-col items-start gap-4 overflow-auto pb-10 text-sm [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit"
                  >
                    <p>{tool.longDescription}</p>
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

const memoToolCard = memo(ToolCard);
export { memoToolCard as ToolCard };
