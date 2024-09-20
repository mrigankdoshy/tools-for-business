import { Metadata } from 'next';
import { ReactNode } from 'react';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Explore AI tools for business',
};

type ResourcesLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function ResourcesLayout({ children }: ResourcesLayoutProps) {
  return <>{children}</>;
}
