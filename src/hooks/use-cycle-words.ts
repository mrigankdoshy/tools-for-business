import { useEffect, useState } from 'react';

export function useCycleWords(words: string[], delay = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((previous) => (previous + 1) % words.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [words.length, delay]);

  return words[currentWordIndex];
}
