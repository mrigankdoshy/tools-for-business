import { Card, CardProps } from '@/shared/ui/card';
import { Marquee } from '@/shared/ui/marquee';
import { Activity, Brain, Code, Cpu, Shield, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const tiles: CardProps[] = [
  {
    icon: <Activity className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Terminal className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Brain className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Shield className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Code className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]"></div>
    ),
  },
  {
    icon: <Cpu className="size-full" />,
    bg: (
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px]"></div>
    ),
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shuffleArray = (array: any): CardProps[] => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export function AnimatedIcons() {
  const [randomTiles1, setRandomTiles1] = useState<CardProps[]>([]);
  const [randomTiles2, setRandomTiles2] = useState<CardProps[]>([]);
  const [randomTiles3, setRandomTiles3] = useState<CardProps[]>([]);
  const [randomTiles4, setRandomTiles4] = useState<CardProps[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRandomTiles1(shuffleArray(tiles));
      setRandomTiles2(shuffleArray(tiles));
      setRandomTiles3(shuffleArray(tiles));
      setRandomTiles4(shuffleArray(tiles));
    }
  }, []);

  return (
    <>
      <Marquee reverse className="-delay-[200ms] [--duration:10s]" repeat={5}>
        {randomTiles1.map((review, idx) => (
          <Card key={idx} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:25s]" repeat={5}>
        {randomTiles2.map((review, idx) => (
          <Card key={idx} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
        {randomTiles1.map((review, idx) => (
          <Card key={idx} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:30s]" repeat={5}>
        {randomTiles2.map((review, idx) => (
          <Card key={idx} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="-delay-[200ms] [--duration:20s]" repeat={5}>
        {randomTiles3.map((review, idx) => (
          <Card key={idx} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:30s]" repeat={5}>
        {randomTiles4.map((review, idx) => (
          <Card key={idx} {...review} />
        ))}
      </Marquee>
    </>
  );
}
