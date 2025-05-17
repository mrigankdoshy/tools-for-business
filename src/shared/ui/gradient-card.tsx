'use client';

import { cn } from '@/shared/utils/cn';
import { useMousePosition } from '@/shared/utils/use-mouse-position';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { HTMLAttributes, useEffect, useRef } from 'react';

type GradientCardProps = HTMLAttributes<HTMLDivElement> &
  Readonly<{
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
    gradientFrom?: string;
    gradientTo?: string;
  }>;

export function GradientCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = 'rgba(211, 14, 233, 0.15)',
  gradientOpacity = 0.8,
  gradientFrom = '#fb00ff',
  gradientTo = '#ba65ff',
}: GradientCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const { x: clientX, y: clientY } = useMousePosition();

  const radialGradientBackground = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
  `;

  const layeredGradientBackground = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientFrom}, ${gradientTo}, hsl(var(--border)) 100%)
  `;

  useEffect(() => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
  }, [clientX, clientY, mouseX, mouseY]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      className={cn('group relative flex size-full rounded-xl', className)}
    >
      <div className="bg-background absolute inset-px z-10 rounded-xl" />
      <div className="relative z-30">{children}</div>
      <motion.div
        className="pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: radialGradientBackground,
          opacity: gradientOpacity,
        }}
      />
      <motion.div
        className="bg-border pointer-events-none absolute inset-0 rounded-xl duration-300 group-hover:opacity-100"
        style={{ background: layeredGradientBackground }}
      />
    </div>
  );
}
