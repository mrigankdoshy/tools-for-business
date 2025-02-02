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
        'absolute left-4 top-4 md:left-8 md:top-8'
      )}
    >
      <ChevronLeft className="mr-2 size-4" />
      Back
    </Link>
  );
}
