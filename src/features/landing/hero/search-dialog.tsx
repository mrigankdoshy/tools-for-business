'use client';

import {
  MOCKED_RESULTS,
  SearchResult,
} from '@/features/landing/hero/mocked-data';
import { Dialog, DialogContent, DialogTitle } from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const filtered = MOCKED_RESULTS.filter(
      (result) =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [searchQuery]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogTitle className="sr-only">Search Tools</DialogTitle>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tools..."
            className="h-12 w-full border-none bg-background pl-10 pr-4 focus:ring-2 focus:ring-[var(--color-three)]"
          />
        </div>
        <div className="mt-4 max-h-[400px] overflow-y-auto">
          <h3 className="mb-2 text-sm font-medium text-muted-foreground">
            {searchQuery ? 'Results' : 'Suggestions'}
          </h3>
          <AnimatePresence>
            {(searchQuery ? filteredResults : MOCKED_RESULTS).map((result) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mb-4 rounded-lg bg-background p-4 shadow-md transition-all hover:bg-muted/50 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-primary">
                        {result.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 text-[var(--color-three)]" />
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {result.description}
                    </p>
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <Sparkles className="mr-1 h-3 w-3 text-[var(--color-two)]" />
                      {result.category}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
