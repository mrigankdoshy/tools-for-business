'use client';

import { useHybridSearch } from '@/features/landing/hero/use-hybrid-search';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shared/ui/command';
import { DialogTitle } from '@/shared/ui/dialog';
import { useDebounce } from '@/shared/utils/use-debounce';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Loader2, Sparkles } from 'lucide-react';

type SearchDialogProps = Readonly<{
  isOpen: boolean;
  searchQuery: string;
  onClose: () => void;
  setSearchQuery: (query: string) => void;
}>;

export function SearchDialog({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
}: SearchDialogProps) {
  const debouncedQuery = useDebounce(searchQuery, 300);

  const { data: results, isLoading } = useHybridSearch({
    query: debouncedQuery,
    enabled: isOpen && debouncedQuery.length > 0,
  });

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle className="sr-only">Search Tools</DialogTitle>
      <CommandInput
        placeholder="Search tools using natural language..."
        value={searchQuery}
        onValueChange={setSearchQuery}
        className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <CommandList>
        {isLoading ? (
          <div className="flex items-center justify-center p-6">
            <Loader2 className="h-6 w-6 animate-spin text-[var(--color-two)]" />
          </div>
        ) : searchQuery.length === 0 ? (
          <CommandEmpty>Type to search for AI tools...</CommandEmpty>
        ) : results && results.length === 0 ? (
          <CommandEmpty>
            No tools found for &quot;{searchQuery}&quot;
          </CommandEmpty>
        ) : (
          <CommandGroup
            heading={searchQuery.length > 0 ? 'Tools Found' : 'Suggestions'}
          >
            <AnimatePresence>
              {results?.map((result, index) => (
                <motion.div
                  key={`result-${result.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <CommandItem
                    value={result.name}
                    onSelect={() => window.open(result.externalLink, '_blank')}
                    className="cursor-pointer px-4 py-2 transition duration-200"
                  >
                    <div className="flex w-full flex-col gap-2 rounded-md transition-all duration-200 ease-in-out">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">
                            {result.name}
                          </span>
                          <ArrowRight className="h-4 w-4 text-[var(--color-three)]" />
                        </div>
                        <p className="text-muted-foreground text-xs">
                          {result.shortDescription}
                        </p>
                      </div>
                      <div className="text-muted-foreground/70 flex items-center gap-1 text-xs">
                        <Sparkles className="size-3! text-[var(--color-two)]" />
                        {result.category}
                        {result.similarity && (
                          <span className="ml-2 text-[var(--color-one)]">
                            {(result.similarity * 100).toFixed(0)}% match
                          </span>
                        )}
                      </div>
                    </div>
                  </CommandItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}
