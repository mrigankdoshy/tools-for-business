'use client';

import { SearchDialog } from '@/features/landing/hero/search-dialog';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { FormEvent, useEffect, useState } from 'react';

export function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    setIsDialogOpen(true);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsDialogOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <motion.form
        onSubmit={handleSearch}
        className="mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="shadow-[var(--color-three)]/20 hover:shadow-[var(--color-three)]/30 relative flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-[var(--color-three)] via-[var(--color-two)] to-[var(--color-three)] p-[1px] shadow-lg transition-all duration-300 hover:shadow-xl">
          <Input
            type="text"
            placeholder="Discover tools to supercharge your workflow"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsDialogOpen(true)}
            className="text-md h-12 flex-grow rounded-l-lg border-none bg-background placeholder:text-muted-foreground/70 focus:text-muted-foreground/70 md:h-14"
          />
          <Button
            type="submit"
            variant="ghost"
            className="h-12 rounded-r-lg bg-transparent font-semibold text-primary-foreground transition-all hover:bg-white/10 md:h-14"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </motion.form>
      <SearchDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}
