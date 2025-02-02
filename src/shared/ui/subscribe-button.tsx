import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils/cn';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export function SubscribeButton() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubscribeClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <Button
      className={cn(
        'group relative flex-shrink-0 overflow-hidden tracking-tighter',
        'transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2'
      )}
      disabled={isLoading}
      onClick={onSubscribeClick}
      style={{ width: isLoading ? '120px' : '100px' }}
    >
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
      {isLoading ? (
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <p>Subscribing</p>
        </div>
      ) : (
        <p>Subscribe</p>
      )}
    </Button>
  );
}
