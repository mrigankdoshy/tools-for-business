import { Privacy } from '@/features/legal/privacy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Tools for Business - Privacy',
};

export default function Page() {
  return <Privacy />;
}
