import { ThemeToggle } from '@/features/theme/theme-toggle';
import { buttonVariants } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full animate-fade-in opacity-0 backdrop-blur-md [--animation-delay:600ms]">
      <div className="container flex h-14 items-center justify-between">
        <Link className="text-md flex items-center" href="/">
          Tools for Business
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            className={cn(buttonVariants({ variant: 'ghost' }), 'text-sm')}
            href="/signin"
          >
            Log in
          </Link>
          <Link
            className={cn(buttonVariants({ variant: 'secondary' }), 'text-sm')}
            href="/signup"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
