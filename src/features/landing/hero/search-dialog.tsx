'use client';

import { MOCKED_RESULTS } from '@/features/landing/hero/mocked-data';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/shared/ui/command';
import { DialogTitle } from '@/shared/ui/dialog';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMemo } from 'react';

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
  const filteredResults = useMemo(() => {
    if (!searchQuery) {
      return MOCKED_RESULTS;
    }
    return MOCKED_RESULTS.filter(
      (result) =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle className="sr-only">Search Tools</DialogTitle>
      <CommandInput
        placeholder="Search tools..."
        value={searchQuery}
        onValueChange={setSearchQuery}
        className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <CommandList>
        <CommandEmpty>No tools found.</CommandEmpty>
        <CommandGroup
          heading={searchQuery.length === 0 ? 'Suggestions' : 'Tools Found'}
        >
          <AnimatePresence>
            {filteredResults.map((result, index) => (
              <motion.div
                key={`result-${result.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <CommandItem
                  value={result.title}
                  onSelect={() => window.open(result.url, '_blank')}
                  className="cursor-pointer px-4 py-2 transition duration-200"
                >
                  <div className="flex w-full flex-col gap-2 rounded-md transition-all duration-200 ease-in-out">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          {result.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-[var(--color-three)]" />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {result.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground/70">
                      <Sparkles className="!size-3 text-[var(--color-two)]" />
                      {result.category}
                    </div>
                  </div>
                </CommandItem>
              </motion.div>
            ))}
          </AnimatePresence>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
