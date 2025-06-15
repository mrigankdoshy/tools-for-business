import { Terms } from '@/features/legal/terms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Tools for Business - Terms',
};

export default function Page() {
  return <Terms />;
}
