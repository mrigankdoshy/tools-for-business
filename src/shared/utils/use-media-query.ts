import { useCallback, useEffect, useState } from 'react';

export function useMediaQuery(width: number): boolean {
  const media =
    typeof window !== 'undefined'
      ? window.matchMedia(`(max-width: ${width}px)`)
      : null;

  const [targetReached, setTargetReached] = useState<boolean>(
    media?.matches || false
  );

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    setTargetReached(e.matches);
  }, []);

  useEffect(() => {
    if (!media) {
      return;
    }

    media.addEventListener('change', updateTarget);

    return () => {
      media.removeEventListener('change', updateTarget);
    };
  }, [updateTarget, media]);

  return targetReached;
}
