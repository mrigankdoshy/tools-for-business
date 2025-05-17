'use client';

import { EnhancedTool } from '@/features/landing/hero/types';
import { useHybridSearch } from '@/features/landing/hero/use-hybrid-search';
import { useSuggestions } from '@/features/landing/hero/use-suggestions';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
} from '@/shared/ui/command';
import { DialogTitle } from '@/shared/ui/dialog';
import { useDebounce } from '@/shared/utils/use-debounce';
import { ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

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

  const { data: suggestions = [], isLoading: isSuggestionsLoading } =
    useSuggestions({
      enabled: isOpen && debouncedQuery.length === 0,
    });

  const { data: results = [], isLoading: isSearchLoading } = useHybridSearch({
    query: debouncedQuery,
    enabled: isOpen && debouncedQuery.length > 0,
  });

  const showSearchLoading = isSearchLoading && debouncedQuery.length > 0;

  const showSuggestionsLoading =
    isSuggestionsLoading && debouncedQuery.length === 0;

  const showEmpty =
    !isSearchLoading && debouncedQuery.length > 0 && results.length === 0;

  const showResults =
    !showSearchLoading && debouncedQuery.length > 0 && results.length > 0;

  const showSuggestions =
    !showSuggestionsLoading &&
    debouncedQuery.length === 0 &&
    suggestions.length > 0;

  const displayItems = debouncedQuery.length > 0 ? results : suggestions;

  const isLoading =
    debouncedQuery.length > 0 ? isSearchLoading : isSuggestionsLoading;

  const renderToolItem = (item: EnhancedTool, index: number) => {
    const isSearchResult = debouncedQuery.length > 0;

    return (
      <motion.div
        key={`item-${item.id}`}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.15, delay: index * 0.03 }}
      >
        <CommandItem
          key={item.id}
          value={item.name}
          onSelect={() => window.open(item.externalLink, '_blank')}
          className="cursor-pointer px-4 py-2 transition duration-200"
        >
          <div className="flex w-full flex-col gap-2 rounded-md transition-all duration-200 ease-in-out">
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.name}</span>
                <ArrowRight className="h-4 w-4 text-[var(--color-three)]" />
              </div>
              <p className="text-muted-foreground text-xs">
                {item.shortDescription}
              </p>
            </div>
            <div className="text-muted-foreground/70 flex items-center gap-1 text-xs">
              <Sparkles className="h-3 w-3 text-[var(--color-two)]" />
              {item.category}
              {isSearchResult && item.similarity !== undefined && (
                <span className="ml-2 text-[var(--color-one)]">
                  {(item.similarity * 100).toFixed(0)}% match
                </span>
              )}
            </div>
          </div>
        </CommandItem>
      </motion.div>
    );
  };

  return (
    <CommandDialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle className="sr-only">Search Tools</DialogTitle>
      <Command
        shouldFilter={false}
        className="[&_[cmdk-input]]:focus-visible:ring-0 [&_[cmdk-input]]:focus-visible:ring-offset-0"
      >
        <CommandInput
          placeholder="Search tools using natural language..."
          value={searchQuery}
          onValueChange={setSearchQuery}
          className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <CommandList>
          {isLoading ? (
            <CommandLoading>
              <div className="flex items-center justify-center py-6">
                <Loader2 className="text-muted-foreground h-5 w-5 animate-spin" />
                <span className="text-muted-foreground ml-2 text-sm">
                  {debouncedQuery.length > 0
                    ? 'Searching...'
                    : 'Loading suggestions...'}
                </span>
              </div>
            </CommandLoading>
          ) : showEmpty ? (
            <CommandEmpty>No tools found.</CommandEmpty>
          ) : showResults || showSuggestions ? (
            <CommandGroup
              heading={
                debouncedQuery.length === 0 ? 'Top Suggestions' : 'Tools Found'
              }
            >
              <AnimatePresence>
                {displayItems.map((item, index) => renderToolItem(item, index))}
              </AnimatePresence>
            </CommandGroup>
          ) : null}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}
