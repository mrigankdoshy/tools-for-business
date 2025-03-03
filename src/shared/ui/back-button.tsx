import { buttonVariants } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export function BackButton() {
  return (
    <Link
      href="/"
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute top-4 left-4 md:top-8 md:left-8'
      )}
    >
      <ChevronLeft className="mr-2 size-4" />
      Back
    </Link>
  );
}
