'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { useTheme } from 'next-themes';
import { PropsWithChildren } from 'react';

export function AuthProvider({ children }: PropsWithChildren) {
  const { theme } = useTheme();
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: theme === 'dark' ? 'hsl(0, 0%, 98%)' : 'hsl(0, 0%, 9%)',
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
