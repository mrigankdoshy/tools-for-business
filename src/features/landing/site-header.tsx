'use client';

import { UserAuthButtons } from '@/features/auth/user-auth-buttons';
import { ThemeToggle } from '@/features/theme/theme-toggle';
import { Button, buttonVariants } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full animate-fade-in opacity-0 backdrop-blur-md [--animation-delay:600ms]">
      <div className="container flex h-14 items-center justify-between">
        <Link className="text-md flex items-center" href="/">
          Tools for Business
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="hidden items-center gap-2 sm:flex">
              <UserAuthButtons />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </SignedOut>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container py-4 animate-in sm:hidden">
          <nav className="flex flex-col gap-2">
            <UserAuthButtons
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'justify-start'
              )}
            />
          </nav>
        </div>
      )}
    </header>
  );
}
