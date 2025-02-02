import { SiteFooter } from '@/features/landing/site-footer';
import { SiteHeader } from '@/features/landing/site-header';
import { ReactNode } from 'react';

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
