import { ReactNode } from 'react';

import { SiteFooter } from '@/features/landing/site-footer';
import { SiteHeader } from '@/features/landing/site-header';

type LandingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
      <SiteFooter />
    </>
  );
}
