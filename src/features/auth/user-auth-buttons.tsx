import { buttonVariants } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn';
import Link from 'next/link';

type UserAuthButtonsProps = Readonly<{
  className?: string;
}>;

export function UserAuthButtons({ className }: UserAuthButtonsProps) {
  return (
    <>
      <Link
        className={
          className ?? cn(buttonVariants({ variant: 'ghost' }), 'text-sm')
        }
        href="/sign-in"
      >
        Sign In
      </Link>
      <Link
        className={
          className ?? cn(buttonVariants({ variant: 'secondary' }), 'text-sm')
        }
        href="/sign-up"
      >
        Sign Up
      </Link>
    </>
  );
}
