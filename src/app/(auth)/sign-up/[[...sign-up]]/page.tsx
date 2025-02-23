import { SignUpPage } from '@/features/auth/sign-up';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign Up for Tools for Business',
};

export default function Page() {
  return <SignUpPage />;
}
