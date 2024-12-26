import type { Metadata } from 'next';
import Link from 'next/link';

import { BackButton } from '@/components/ui/back-button';
import { UserAuthForm } from '@/components/user-auth-form';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign Up for Tools for Business',
};

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <BackButton />
      <div className="mx-auto flex w-full flex-col justify-center gap-6 sm:w-[350px]">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome to Tools for Business
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign up for an account
          </p>
        </div>
        <UserAuthForm />
        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link
            href="/signin"
            className="hover:text-brand underline underline-offset-4"
          >
            Already have an account? Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
