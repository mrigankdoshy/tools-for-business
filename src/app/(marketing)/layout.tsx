import { ReactNode } from 'react';

import { SiteFooter } from '@/features/navigation/site-footer';
import { SiteHeader } from '@/features/navigation/site-header';

type MarketingLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex-1 overflow-hidden">{children}</main>
      <SiteFooter />
    </>
  );
}
