import { SignUp } from '@/features/auth/signup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign Up for Tools for Business',
};

export default function SignUpPage() {
  return <SignUp />;
}
