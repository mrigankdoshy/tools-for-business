import type { Metadata } from 'next';

import { Login } from '@/features/auth/login';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account',
};

export default function LoginPage() {
  return <Login />;
}
