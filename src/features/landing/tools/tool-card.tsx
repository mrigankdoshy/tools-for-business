'use client';

import { Tool } from '@/db/schema';
import { Card } from '@/shared/ui/card';
import { useTheme } from 'next-themes';
import Image from 'next/image';

type ToolCardProps = Readonly<{
  tool: Tool;
}>;

export function ToolCard({ tool }: ToolCardProps) {
  const { theme } = useTheme();

  return (
    <a href={tool.link} target="_blank" rel="noopener noreferrer">
      <Card
        className="group relative flex transform flex-col text-primary no-underline shadow-sm transition duration-300 hover:scale-[1.01]"
        gradientColor={
          theme === 'dark' ? 'rgba(211, 14, 233, 0.15)' : '#D9D9D955'
        }
      >
        <ImagePlaceholder />
        <div className="flex flex-col gap-2 p-4">
          <h2 className="font-semibold leading-7">{tool.name}</h2>
          <p className="text-sm leading-5 text-muted-foreground">
            {tool.description}
          </p>
        </div>
      </Card>
    </a>
  );
}

function ImagePlaceholder() {
  return (
    <div className="relative flex h-48 w-full items-center justify-center rounded-lg bg-secondary/40">
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
