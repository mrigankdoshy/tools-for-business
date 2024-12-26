'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

type TanstackQueryClientProviderProps = Readonly<{ children: ReactNode }>;

export function TanstackQueryClientProvider({
  children,
}: TanstackQueryClientProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
