'use client';

import { CheckIcon } from '@radix-ui/react-icons';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  Variants,
} from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { MouseEvent } from 'react';

import { cn } from '@/lib/utils';

import { Interval } from '@/components/featured/featured-section';
import { Button } from '@/components/ui/button';

type FeaturedTool = Readonly<{
  id: string;
  name: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  isMostPopular: boolean;
}>;

const featuredTools: FeaturedTool[] = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    description:
      'AI art generator that creates imaginative digital images and art from prompts.',
    features: [
      'Fast GPU Time 3.3 hr/month',
      'Work Solo In Your Direct Messages',
      'Maximum 3 Concurrent Jobs',
      'Rate Images to Earn Free GPU Time',
    ],
    monthlyPrice: 10,
    yearlyPrice: 96,
    isMostPopular: false,
  },
  {
    id: 'opus-clip',
    name: 'Opus Clip',
    description:
      'Video editing tool to create engaging short-form content clips from long-form',
    features: [
      'AI clipping with Virality Score',
      'AI animated captions in 20+ languages',
      '1 brand template',
      'Filler & silence removal',
    ],
    monthlyPrice: 15,
    yearlyPrice: 180,
    isMostPopular: false,
  },
  {
    id: 'chat-gpt',
    name: 'ChatGPT',
    description: 'OpenAI chatbot that can engage in natural conversations',
    features: [
      'Help with writing, problem solving etc.',
      'Access to GPT-4o mini',
      'Limited access to GPT-4o',
      'Use custom GPTs',
    ],
    monthlyPrice: 0,
    yearlyPrice: 0,
    isMostPopular: true,
  },
  {
    id: 'memberstack',
    name: 'Memberstack',
    description:
      'Add free or paid memberships to any website without writing code.',
    features: [
      '1,000 Members',
      'Social Logins',
      'Stripe Payments',
      'Custom SSO',
    ],
    monthlyPrice: 29,
    yearlyPrice: 300,
    isMostPopular: false,
  },
];

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

type FeaturedToolsProps = Readonly<{
  interval: Interval;
}>;

export function FeaturedTools({ interval }: FeaturedToolsProps) {
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

  return (
    <div className="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {featuredTools.map((tool, index) => (
        <div key={tool.id} className="relative overflow-visible">
          <div
            className={cn(
              'group relative flex max-w-[400px] flex-col gap-8 overflow-hidden rounded-2xl border p-4 text-black dark:text-white',
              {
                'border-none glow-border': tool.isMostPopular,
              }
            )}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={{ background: backgroundStyle }}
            />

            <div className="flex items-center">
              <div>
                <h2 className="text-base font-semibold leading-7">
                  {tool.name}
                </h2>
                <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                  {tool.description}
                </p>
              </div>
            </div>

            <motion.div
              key={`${tool.id}-${interval}`}
              initial="initial"
              animate="animate"
              variants={variants}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-row gap-1"
            >
              <div>
                <h2 className="text-sm font-semibold text-gray-600 mb-1">
                  Starting
                </h2>
                <span className="text-4xl font-bold text-black dark:text-white">
                  ${interval === 'year' ? tool.yearlyPrice : tool.monthlyPrice}
                  <span className="text-xs"> /{interval}</span>
                </span>
              </div>
            </motion.div>

            <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />

            {tool.features && tool.features.length > 0 && (
              <ul className="flex flex-col gap-2 font-normal">
                {tool.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                  >
                    <CheckIcon className="size-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                    <span className="flex">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            <Button
              className={cn(
                'group relative w-full gap-2 overflow-hidden tracking-tighter',
                'hover:ring-primary transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-2'
              )}
              // TODO: Wire up learn more click handler
              onClick={() => undefined}
            >
              <p>Learn More</p>
              <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
