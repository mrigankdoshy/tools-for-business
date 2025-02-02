'use client';

import { MoonIcon } from '@/features/theme/moon-icon';
import { SunIcon } from '@/features/theme/sun-icon';
import { Button } from '@/shared/ui/button';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
